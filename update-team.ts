#!/usr/bin/env node

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

// 获取当前文件目录（ES模块中的__dirname替代）
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
}

interface CachedMembers {
    [key: string]: CachedMemberData
}

interface CacheData {
    lastUpdate: number
    members: CachedMembers
}

interface Config {
    CACHE_DURATION: number
    TEAM_CONFIG_PATH: string
    CACHE_FILE_PATH: string
    REQUEST_DELAY: number
}

// 配置
const CONFIG: Config = {
    // 缓存周期（毫秒）
    CACHE_DURATION: 30 * 24 * 60 * 60 * 1000, // 30天
    // 团队配置文件路径
    TEAM_CONFIG_PATH: path.join(__dirname, 'more/team/team.config.ts'),
    // 缓存文件路径
    CACHE_FILE_PATH: path.join(__dirname, 'more/team/team.cache.json'),
    // 请求延迟（避免频繁请求）
    REQUEST_DELAY: 1000
}

class TeamUpdater {
    private cache: CacheData

    constructor() {
        this.cache = this.loadCache()
    }

    // 加载缓存
    private loadCache(): CacheData {
        try {
            if (fs.existsSync(CONFIG.CACHE_FILE_PATH)) {
                const cacheData = fs.readFileSync(CONFIG.CACHE_FILE_PATH, 'utf8')
                return JSON.parse(cacheData)
            }
        } catch (error) {
            console.warn('加载缓存失败:', (error as Error).message)
        }
        return {
            lastUpdate: 0,
            members: {}
        }
    }

    // 保存缓存
    private saveCache(): void {
        try {
            // 确保目录存在
            const cacheDir = path.dirname(CONFIG.CACHE_FILE_PATH)
            if (!fs.existsSync(cacheDir)) {
                fs.mkdirSync(cacheDir, { recursive: true })
            }

            fs.writeFileSync(CONFIG.CACHE_FILE_PATH, JSON.stringify(this.cache, null, 2))
            console.log('✓ 缓存已保存至:', CONFIG.CACHE_FILE_PATH)
        } catch (error) {
            console.error('保存缓存失败:', (error as Error).message)
        }
    }

    // 检查是否需要更新
    public needsUpdate(): boolean {
        const now = Date.now()
        const timeSinceUpdate = now - this.cache.lastUpdate
        return timeSinceUpdate > CONFIG.CACHE_DURATION
    }

    // 获取GitHub用户信息
    private async fetchGitHubUser(username: string): Promise<ApiUserData | null> {
        try {
            const response = await fetch(`https://api.github.com/users/${username}`)
            if (!response.ok) {
                throw new Error(`GitHub API 请求失败: ${response.status}`)
            }
            return await response.json()
        } catch (error) {
            console.error(`获取GitHub用户 ${username} 失败:`, (error as Error).message)
            return null
        }
    }

    // 获取Gitee用户信息
    private async fetchGiteeUser(username: string): Promise<ApiUserData | null> {
        try {
            const response = await fetch(`https://gitee.com/api/v5/users/${username}`)
            if (!response.ok) {
                throw new Error(`Gitee API 请求失败: ${response.status}`)
            }
            const data: ApiUserData = await response.json()
            // 为 Gitee 用户添加 html_url
            data.html_url = data.html_url || `https://gitee.com/${data.login}`
            return data
        } catch (error) {
            console.error(`获取Gitee用户 ${username} 失败:`, (error as Error).message)
            return null
        }
    }

    // 延迟执行
    private async delay(ms: number): Promise<void> {
        return new Promise(resolve => setTimeout(resolve, ms))
    }

    // 加载团队配置
    private async loadTeamConfig(): Promise<TeamConfiguration> {
        try {
            // 检查配置文件是否存在
            if (!fs.existsSync(CONFIG.TEAM_CONFIG_PATH)) {
                console.warn('配置文件不存在，使用默认配置')
                return this.getDefaultConfig()
            }

            // 使用动态导入，添加时间戳避免缓存
            const timestamp = Date.now()
            const configModule = await import(`${CONFIG.TEAM_CONFIG_PATH}?t=${timestamp}`)
            const config: TeamConfiguration = configModule.default || configModule
            console.log('✓ 成功加载团队配置')
            return config
        } catch (error) {
            console.error('加载团队配置失败:', (error as Error).message)
            console.log('使用默认配置')
            return this.getDefaultConfig()
        }
    }

    // 获取默认配置
    private getDefaultConfig(): TeamConfiguration {
        return {
            teams: [
                {
                    platform: 'gitee',
                    users: [
                        {
                            username: 'wenjing_1129',
                            role: '前端开发工程师',
                            skills: ['Vue.js', 'React'],
                            location: '浙江·杭州',
                            social: {
                                github: 'Mm-Dxx',
                                gitee: 'wenjing_1129'
                            }
                        },
                        {
                            username: 'dom-w',
                            role: '后端开发工程师',
                            skills: ['Java', 'Spring Boot', 'Vue.js'],
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

    // 更新团队成员信息
    public async updateTeamMembers(): Promise<void> {
        console.log('开始更新团队成员信息...')

        const config = await this.loadTeamConfig()
        let hasUpdates = false

        try {
            for (const team of config.teams || []) {
                for (const userConfig of team.users || []) {
                    const cacheKey = `${team.platform}_${userConfig.username}`

                    // 检查缓存是否存在且有效
                    if (this.cache.members[cacheKey] && !this.needsUpdate()) {
                        console.log(`✓ 使用缓存: ${userConfig.username} (${team.platform})`)
                        continue
                    }

                    console.log(`⟳ 更新用户信息: ${userConfig.username} (${team.platform})`)

                    let userData: ApiUserData | null = null

                    if (team.platform === 'github') {
                        userData = await this.fetchGitHubUser(userConfig.username)
                    } else if (team.platform === 'gitee') {
                        userData = await this.fetchGiteeUser(userConfig.username)
                    }

                    if (userData) {
                        // 处理数据格式统一
                        this.cache.members[cacheKey] = {
                            login: userData.login,
                            name: userData.name,
                            avatar_url: userData.avatar_url,
                            html_url: userData.html_url || `https://${team.platform}.com/${userData.login}`,
                            bio: userData.bio,
                            location: userData.location,
                            blog: userData.blog,
                            company: userData.company,
                            platform: team.platform,
                            cached_at: Date.now()
                        }
                        hasUpdates = true
                        console.log(`✓ 成功更新: ${userConfig.username}`)
                    } else {
                        console.log(`✗ 更新失败: ${userConfig.username}`)
                    }

                    // 添加延迟避免请求过于频繁
                    await this.delay(CONFIG.REQUEST_DELAY)
                }
            }

            if (hasUpdates) {
                this.cache.lastUpdate = Date.now()
                this.saveCache()
                console.log('🎉 团队成员信息更新完成！')
            } else {
                console.log('📦 无需更新，使用缓存数据')
            }
        } catch (err) {
            console.error('❌ 更新过程中出现错误:', (err as Error).message)
            throw err
        }
    }

    // 获取团队成员数据（供Vue组件调用）
    public async getTeamMembersData(): Promise<Array<CachedMemberData & {
        username: string
        role: string
        skills: string[]
        displayName?: string
        social: SocialLinks
    }>> {
        const config = await this.loadTeamConfig()
        const result: Array<CachedMemberData & {
            username: string
            role: string
            skills: string[]
            displayName?: string
            social: SocialLinks
        }> = []

        for (const team of config.teams || []) {
            for (const userConfig of team.users || []) {
                const cacheKey = `${team.platform}_${userConfig.username}`
                const cachedData = this.cache.members[cacheKey]

                if (cachedData) {
                    // 合并配置和缓存数据
                    const memberData = {
                        ...cachedData,
                        username: userConfig.username,
                        role: userConfig.role,
                        skills: userConfig.skills || [],
                        displayName: userConfig.displayName,
                        location: userConfig.location || cachedData.location,
                        social: {
                            github: userConfig.social?.github || userConfig.githubUsername || userConfig.username,
                            gitee: userConfig.social?.gitee || userConfig.giteeUsername || userConfig.username
                        }
                    }

                    if (userConfig.avatar) {
                        memberData.avatar_url = userConfig.avatar
                    }

                    result.push(memberData)
                }
            }
        }

        return result
    }

    // 强制更新所有数据
    public async forceUpdate(): Promise<void> {
        console.log('🚀 强制更新所有团队成员信息...')
        this.cache.lastUpdate = 0 // 重置更新时间
        await this.updateTeamMembers()
    }

    // 显示缓存状态
    public showCacheStatus(): void {
        const now = Date.now()
        const lastUpdate = new Date(this.cache.lastUpdate)
        const nextUpdate = new Date(this.cache.lastUpdate + CONFIG.CACHE_DURATION)
        const memberCount = Object.keys(this.cache.members).length

        console.log('\n📊 缓存状态信息:')
        console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
        console.log(`📅 上次更新: ${this.cache.lastUpdate ? lastUpdate.toLocaleString('zh-CN') : '从未更新'}`)
        console.log(`📅 下次更新: ${nextUpdate.toLocaleString('zh-CN')}`)
        console.log(`👥 缓存成员: ${memberCount} 人`)
        console.log(`⏰ 缓存周期: ${CONFIG.CACHE_DURATION / (24 * 60 * 60 * 1000)} 天`)
        console.log(`🔄 需要更新: ${this.needsUpdate() ? '是' : '否'}`)
        console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n')
    }
}

// 命令行使用
async function main(): Promise<void> {
    const updater = new TeamUpdater()
    const args = process.argv.slice(2)

    try {
        if (args.includes('--status') || args.includes('-s')) {
            updater.showCacheStatus()
        } else if (args.includes('--force') || args.includes('-f')) {
            await updater.forceUpdate()
        } else {
            // 显示状态
            updater.showCacheStatus()
            // 执行更新
            await updater.updateTeamMembers()
        }
    } catch (error) {
        console.error('❌ 执行失败:', (error as Error).message)
        process.exit(1)
    }
}

// 如果直接运行脚本
const isMainModule = import.meta.url === `file://${process.argv[1]}` ||
    process.argv[1].endsWith('update-team.ts') ||
    process.argv[1].endsWith('update-team.js')

if (isMainModule) {
    main().catch((error) => {
        console.error('❌ 脚本执行失败:', (error as Error).message)
        process.exit(1)
    })
}

export default TeamUpdater
