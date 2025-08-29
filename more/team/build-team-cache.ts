#!/usr/bin/env node
/**
 * 构建时团队缓存生成脚本
 * 只在 Node.js 环境中运行，生成静态缓存文件
 */

import fs from 'fs'
import path from 'path'
import {fileURLToPath} from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// 类型定义
interface SocialLinks {
    github?: string
    gitee?: string
}

interface UserConfig {
    username: string
    role: string
    skills?: string[]
    displayName?: string
    location?: string
    avatar?: string
    social?: SocialLinks
    githubUsername?: string
    giteeUsername?: string
}

interface Team {
    platform: 'github' | 'gitee'
    users: UserConfig[]
}

interface TeamConfiguration {
    teams?: Team[]
    project?: {
        contributeUrl?: string
    }
}

interface ApiUserData {
    login: string
    name?: string
    avatar_url: string
    html_url?: string
    bio?: string
    location?: string
    blog?: string
    company?: string
}

interface CachedMemberData extends ApiUserData {
    platform: string
    cached_at: number
    // 合并用户配置
    username: string
    role: string
    skills: string[]
    displayName?: string
    social: SocialLinks
}

interface CacheData {
    lastUpdate: number
    version: string
    members: CachedMemberData[]
}

// 配置
const CONFIG = {
    CACHE_DURATION: 30 * 24 * 60 * 60 * 1000,
    REQUEST_DELAY: 1000,
    TEAM_CONFIG_PATH: path.join(__dirname, '/team.config.ts'),
    // 修改输出路径 - 生成到 public 目录，这样 VitePress 会自动复制到 dist
    CACHE_OUTPUT_PATH: path.join(__dirname, '../../public/team-cache.json'),
    MAX_RETRIES: 3,
    TIMEOUT: 10000
}

class TeamCacheBuilder {
    private async loadTeamConfig(): Promise<TeamConfiguration> {
        try {
            if (!fs.existsSync(CONFIG.TEAM_CONFIG_PATH)) {
                console.warn('配置文件不存在，使用默认配置')
                return this.getDefaultConfig()
            }

            // 动态导入配置文件
            const timestamp = Date.now()
            const configModule = await import(`${CONFIG.TEAM_CONFIG_PATH}?t=${timestamp}`)
            const config: TeamConfiguration = configModule.default || configModule
            console.log('✓ 成功加载团队配置')
            return config
        } catch (error) {
            console.error('加载团队配置失败:', (error as Error).message)
            return this.getDefaultConfig()
        }
    }

    private getDefaultConfig(): TeamConfiguration {
        return {
            teams: [
                {
                    platform: 'gitee',
                    users: [
                        {
                            username: 'wenjing_1129',
                            role: '前端开发工程师',
                            skills: ['Vue.js', 'React', 'TypeScript', 'Node.js'],
                            location: '浙江·杭州',
                            social: {
                                github: 'Mm-Dxx',
                                gitee: 'wenjing_1129'
                            }
                        },
                        {
                            username: 'dom-w',
                            role: '后端开发工程师',
                            skills: ['Java', 'Spring Boot', 'Vue.js', 'MySQL'],
                            location: '浙江·杭州',
                            social: {
                                github: 'Time-w',
                                gitee: 'dom-w'
                            }
                        }
                    ]
                }
            ]
        }
    }

    private async fetchWithRetry(
        url: string,
        retries: number = CONFIG.MAX_RETRIES
    ): Promise<Response> {
        for (let i = 0; i < retries; i++) {
            try {
                const controller = new AbortController()
                const timeoutId = setTimeout(() => controller.abort(), CONFIG.TIMEOUT)

                const response = await fetch(url, {
                    signal: controller.signal,
                    headers: {
                        'User-Agent': 'NextDoc4j-TeamUpdater/1.0'
                    }
                })

                clearTimeout(timeoutId)

                if (response.ok) {
                    return response
                }
                throw new Error(`HTTP ${response.status}: ${response.statusText}`)
            } catch (error) {
                console.warn(`尝试 ${i + 1}/${retries} 失败:`, (error as Error).message)
                if (i === retries - 1) throw error
                await this.delay(CONFIG.REQUEST_DELAY * (i + 1))
            }
        }
        throw new Error('所有重试都失败了')
    }

    private async fetchGitHubUser(username: string): Promise<ApiUserData | null> {
        try {
            const response = await this.fetchWithRetry(`https://api.github.com/users/${username}`)
            return await response.json()
        } catch (error) {
            console.error(`获取GitHub用户 ${username} 失败:`, (error as Error).message)
            return null
        }
    }

    private async fetchGiteeUser(username: string): Promise<ApiUserData | null> {
        try {
            const response = await this.fetchWithRetry(`https://gitee.com/api/v5/users/${username}`)
            const data: ApiUserData = await response.json()
            data.html_url = data.html_url || `https://gitee.com/${data.login}`
            return data
        } catch (error) {
            console.error(`获取Gitee用户 ${username} 失败:`, (error as Error).message)
            return null
        }
    }

    private async delay(ms: number): Promise<void> {
        return new Promise(resolve => setTimeout(resolve, ms))
    }

    private loadExistingCache(): CacheData | null {
        const path = CONFIG.CACHE_OUTPUT_PATH
        try {
            if (fs.existsSync(path)) {
                const cacheData = JSON.parse(fs.readFileSync(path, 'utf8'))
                console.log(`✓ 加载现有缓存: ${path}`)
                return cacheData
            }
        } catch (error) {
            console.warn(`加载缓存失败 ${path}:`, (error as Error).message)
        }
        return null
    }

    private needsUpdate(cache: CacheData | null): boolean {
        if (!cache) return true
        const now = Date.now()
        return (now - cache.lastUpdate) > CONFIG.CACHE_DURATION
    }

    public async buildCache(forceUpdate = false): Promise<void> {
        console.log('🚀 开始构建团队缓存...')

        const config = await this.loadTeamConfig()
        const existingCache = this.loadExistingCache()

        if (!forceUpdate && existingCache && !this.needsUpdate(existingCache)) {
            console.log('📦 缓存仍然有效，跳过更新')
            this.saveCache(existingCache)
            return
        }

        const members: CachedMemberData[] = []
        let successCount = 0
        let totalCount = 0

        try {
            for (const team of config.teams || []) {
                for (const userConfig of team.users || []) {
                    totalCount++
                    console.log(`⟳ 获取用户信息: ${userConfig.username} (${team.platform})`)

                    let userData: ApiUserData | null = null

                    if (team.platform === 'github') {
                        userData = await this.fetchGitHubUser(userConfig.username)
                    } else if (team.platform === 'gitee') {
                        userData = await this.fetchGiteeUser(userConfig.username)
                    }

                    if (userData) {
                        const memberData: CachedMemberData = {
                            // API 数据
                            login: userData.login,
                            name: userData.name,
                            avatar_url: userData.avatar_url,
                            html_url: userData.html_url || `https://${team.platform}.com/${userData.login}`,
                            bio: userData.bio,
                            location: userData.location,
                            blog: userData.blog,
                            company: userData.company,
                            platform: team.platform,
                            cached_at: Date.now(),

                            // 用户配置数据
                            username: userConfig.username,
                            role: userConfig.role,
                            skills: userConfig.skills || [],
                            displayName: userConfig.displayName,
                            social: {
                                github: userConfig.social?.github || userConfig.githubUsername || userConfig.username,
                                gitee: userConfig.social?.gitee || userConfig.giteeUsername || userConfig.username
                            }
                        }

                        // 覆盖头像和位置（如果配置中有指定）
                        if (userConfig.avatar) {
                            memberData.avatar_url = userConfig.avatar
                        }
                        if (userConfig.location) {
                            memberData.location = userConfig.location
                        }

                        members.push(memberData)
                        successCount++
                        console.log(`✓ 成功获取: ${userConfig.username}`)
                    } else {
                        console.log(`✗ 获取失败: ${userConfig.username}`)

                        // 尝试使用旧缓存数据
                        if (existingCache) {
                            const oldMember = existingCache.members.find(
                                m => m.username === userConfig.username && m.platform === team.platform
                            )
                            if (oldMember) {
                                members.push(oldMember)
                                console.log(`↻ 使用缓存数据: ${userConfig.username}`)
                            }
                        }
                    }

                    // API调用间隔
                    await this.delay(CONFIG.REQUEST_DELAY)
                }
            }

            const cacheData: CacheData = {
                lastUpdate: Date.now(),
                version: '1.0.0',
                members
            }

            this.saveCache(cacheData)

            console.log('\n🎉 团队缓存构建完成！')
            console.log(`✓ 成功: ${successCount}/${totalCount}`)
            console.log(`📅 更新时间: ${new Date().toLocaleString('zh-CN')}`)
            console.log(`📄 缓存文件: ${CONFIG.CACHE_OUTPUT_PATH}`)

        } catch (error) {
            console.error('❌ 构建过程中出现错误:', (error as Error).message)

            // 如果有旧缓存，使用旧缓存
            if (existingCache) {
                console.log('📦 使用现有缓存作为备用')
                this.saveCache(existingCache)
            }

            throw error
        }
    }

    private saveCache(cacheData: CacheData): void {
        try {
            // 确保输出目录存在
            const outputDir = path.dirname(CONFIG.CACHE_OUTPUT_PATH)
            if (!fs.existsSync(outputDir)) {
                fs.mkdirSync(outputDir, {recursive: true})
            }

            const cacheJson = JSON.stringify(cacheData, null, 2)

            fs.writeFileSync(CONFIG.CACHE_OUTPUT_PATH, cacheJson)

        } catch (error) {
            console.error('保存缓存失败:', (error as Error).message)
            throw error
        }
    }

    public showStatus(): void {
        const cache = this.loadExistingCache()
        if (!cache) {
            console.log('📭 未找到缓存文件')
            return
        }

        const lastUpdate = new Date(cache.lastUpdate)
        const nextUpdate = new Date(cache.lastUpdate + CONFIG.CACHE_DURATION)
        const needsUpdate = this.needsUpdate(cache)

        console.log('\n📊 缓存状态信息:')
        console.log('─'.repeat(50))
        console.log(`📅 上次更新: ${lastUpdate.toLocaleString('zh-CN')}`)
        console.log(`📅 下次更新: ${nextUpdate.toLocaleString('zh-CN')}`)
        console.log(`👥 缓存成员: ${cache.members.length} 人`)
        console.log(`📄 缓存版本: ${cache.version || '未知'}`)
        console.log(`🔄 需要更新: ${needsUpdate ? '是' : '否'}`)
        console.log('─'.repeat(50))
    }
}

// 命令行执行
async function main(): Promise<void> {
    const builder = new TeamCacheBuilder()
    const args = process.argv.slice(2)

    try {
        if (args.includes('--status') || args.includes('-s')) {
            builder.showStatus()
        } else if (args.includes('--force') || args.includes('-f')) {
            await builder.buildCache(true)
        } else {
            await builder.buildCache(false)
        }
    } catch (error) {
        console.error('❌ 执行失败:', (error as Error).message)
        process.exit(1)
    }
}

// 直接运行时执行
const isMainModule = import.meta.url === `file://${process.argv[1]}` ||
    process.argv[1].endsWith('build-team-cache.ts') ||
    process.argv[1].endsWith('build-team-cache.js')

if (isMainModule) {
    main().catch((error) => {
        console.error('⌐ 脚本执行失败:', (error as Error).message)
        process.exit(1)
    })
}

export default TeamCacheBuilder
