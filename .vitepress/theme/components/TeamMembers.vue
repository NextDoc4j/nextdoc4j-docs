<template>
  <div class="team-container">
    <div class="team-members">
      <!-- 动态渲染团队成员 -->
      <div
          v-for="member in teamMembers"
          :key="member.login"
          class="member-card modern-card"
      >
        <!-- 社交链接 - 右上角 -->
        <div class="member-social-corner">
          <a v-if="member.social?.github"
             :href="`https://github.com/${member.social.github}`"
             target="_blank"
             class="social-link github-link">
            <svg class="social-icon" viewBox="0 0 24 24">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" fill="currentColor"/>
            </svg>
          </a>

          <a v-if="member.social?.gitee"
             :href="`https://gitee.com/${member.social.gitee}`"
             target="_blank"
             class="social-link gitee-link">
            <svg class="social-icon" viewBox="0 0 24 24">
              <path d="M11.984 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.016 0zm6.09 5.333c.328 0 .593.266.592.593v1.482a.594.594 0 0 1-.593.592H9.777c-.982 0-1.778.796-1.778 1.778v5.63c0 .327.266.592.593.592h5.63c.982 0 1.778-.796 1.778-1.778v-.296a.593.593 0 0 0-.592-.593h-4.15a.592.592 0 0 1-.592-.592v-1.482a.593.593 0 0 1 .593-.592h6.815c.327 0 .593.265.593.592v3.408a4 4 0 0 1-4 4H5.926a.593.593 0 0 1-.593-.593V9.778a4.444 4.444 0 0 1 4.445-4.444h8.296z" fill="#C71D23"/>
            </svg>
          </a>

          <a v-if="member.blog"
             :href="member.blog"
             target="_blank"
             class="social-link blog-link">
            <svg class="social-icon" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" fill="currentColor"/>
            </svg>
          </a>
        </div>

        <!-- 主要内容区域 -->
        <div class="member-main">
          <!-- 头像区域 -->
          <div class="member-avatar-section">
            <img
                :src="member.avatar_url"
                :alt="member.name || member.login"
                class="member-avatar"
            />
            <div class="avatar-ring"></div>
          </div>

          <!-- 信息内容 -->
          <div class="member-info">
            <div class="member-header">
              <h3 class="member-name">{{ member.displayName || member.name || member.login }}</h3>
              <div class="member-role-badge">{{ member.role }}</div>
            </div>

            <div class="member-location" v-if="member.location || member.bio">
              <svg class="location-icon" viewBox="0 0 24 24" width="12" height="12">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor"/>
              </svg>
              <span class="location-text">{{ member.location || member.bio || '未知' }}</span>
            </div>

            <div class="member-skills">
              <div class="skills-container">
                <span
                    v-for="skill in member.skills?.slice(0, 3)"
                    :key="skill"
                    class="skill-tag"
                >
                  {{ skill }}
                </span>
                <span v-if="member.skills && member.skills.length > 3" class="skill-more">
                  +{{ member.skills.length - 3 }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 加入我们卡片 -->
      <div class="member-card join-card modern-card">
        <!-- 社交链接 - 右上角 -->
        <div class="member-social-corner">
          <a :href="config.project?.contributeUrl || '#'"
             target="_blank"
             class="social-link contribute-link">
            <svg class="social-icon" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" fill="currentColor"/>
            </svg>
          </a>
        </div>

        <!-- 主要内容区域 -->
        <div class="member-main">
          <!-- 头像区域 -->
          <div class="member-avatar-section">
            <div class="join-avatar">
              <svg viewBox="0 0 24 24" width="36" height="36">
                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" fill="white"/>
              </svg>
            </div>
            <div class="avatar-ring join-ring"></div>
          </div>

          <!-- 信息内容 -->
          <div class="member-info">
            <div class="member-header">
              <h3 class="member-name">加入我们</h3>
              <div class="member-role-badge join-badge">成为团队一员</div>
            </div>

            <div class="member-location">
              <svg class="location-icon" viewBox="0 0 24 24" width="12" height="12">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor"/>
              </svg>
              <span class="location-text">远程协作</span>
            </div>

            <div class="member-skills">
              <div class="skills-container">
                <span class="skill-tag">开源贡献</span>
                <span class="skill-tag">代码审查</span>
                <span class="skill-tag">文档编写</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 加载状态 -->
    <div v-if="loading" class="loading-state">
      <div class="loading-spinner"></div>
      <p>正在加载团队信息...</p>
    </div>

    <!-- 错误状态 -->
    <div v-if="error" class="error-state">
      <div class="error-icon">⚠️</div>
      <p>{{ error }}</p>
      <button @click="loadTeamMembers" class="retry-button">重试</button>
    </div>

    <!-- 缓存信息 -->
    <div v-if="cacheInfo && !loading && !error" class="cache-info">
      <p class="cache-status">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
        数据更新于 {{ formatDate(cacheInfo.lastUpdate) }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

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

interface ProjectConfig {
  contributeUrl?: string
}

interface TeamConfig {
  teams?: Team[]
  project?: ProjectConfig
}

interface TeamMember {
  login: string
  name?: string
  avatar_url: string
  html_url?: string
  bio?: string
  location?: string
  blog?: string
  company?: string
  platform: string
  cached_at: number
  username: string
  role: string
  skills: string[]
  displayName?: string
  social: SocialLinks
}

interface CacheData {
  lastUpdate: number
  version: string
  members: TeamMember[]
}

// 响应式数据
const config = ref<TeamConfig>({})
const teamMembers = ref<TeamMember[]>([])
const loading = ref<boolean>(false)
const error = ref<string>('')
const cacheInfo = ref<{ lastUpdate: number } | null>(null)

// 格式化日期
const formatDate = (timestamp: number): string => {
  return new Date(timestamp).toLocaleString('zh-CN', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}

// 加载配置文件
const loadConfig = async (): Promise<void> => {
  try {
    const configModule = await import('/more/team/team.config.ts')
    config.value = configModule.default || configModule
  } catch (error) {
    console.warn('加载配置失败，使用默认配置:', (error as Error).message)
    config.value = {
      teams: [
        {
          platform: 'github',
          users: [
            {
              username: 'NextDoc4j',
              role: '项目创始人',
              skills: ['Java', 'Spring Boot', 'Vue.js', '文档生成']
            }
          ]
        }
      ],
      project: {
        contributeUrl: 'https://github.com/NextDoc4j/NextDoc4j/issues'
      }
    }
  }
}

// 从缓存加载数据
const loadFromCache = async (): Promise<boolean> => {
  try {
    // 尝试从 public 目录加载缓存
    const response = await fetch('/team-cache.json')
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`)
    }

    const cacheData: CacheData = await response.json()

    if (cacheData.members && cacheData.members.length > 0) {
      teamMembers.value = cacheData.members
      cacheInfo.value = { lastUpdate: cacheData.lastUpdate }
      console.log('✓ 成功从缓存加载团队数据')
      return true
    }

    throw new Error('缓存数据为空')
  } catch (err) {
    console.warn('从缓存加载失败:', (err as Error).message)
    return false
  }
}

// GitHub API 请求
const fetchGitHubUser = async (username: string): Promise<TeamMember | null> => {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`)
    if (!response.ok) {
      throw new Error(`GitHub API 请求失败: ${response.status}`)
    }
    const data = await response.json()
    return { ...data, platform: 'github' }
  } catch (error) {
    console.error(`获取 GitHub 用户 ${username} 失败:`, (error as Error).message)
    return null
  }
}

// Gitee API 请求
const fetchGiteeUser = async (username: string): Promise<TeamMember | null> => {
  try {
    const response = await fetch(`https://gitee.com/api/v5/users/${username}`)
    if (!response.ok) {
      throw new Error(`Gitee API 请求失败: ${response.status}`)
    }
    const data = await response.json()
    data.html_url = data.html_url || `https://gitee.com/${data.login}`
    return { ...data, platform: 'gitee' }
  } catch (error) {
    console.error(`获取 Gitee 用户 ${username} 失败:`, (error as Error).message)
    return null
  }
}

// 备用方案：直接从API获取（仅在缓存失败时使用）
const fetchMembersFromAPI = async (): Promise<TeamMember[]> => {
  const members: TeamMember[] = []

  for (const team of config.value.teams || []) {
    for (const userConfig of team.users || []) {
      let userData: any = null

      if (team.platform === 'github') {
        userData = await fetchGitHubUser(userConfig.username)
      } else if (team.platform === 'gitee') {
        userData = await fetchGiteeUser(userConfig.username)
      }

      if (userData) {
        // 合并用户配置信息
        const memberData: TeamMember = {
          ...userData,
          username: userConfig.username,
          role: userConfig.role,
          skills: userConfig.skills || [],
          displayName: userConfig.displayName,
          location: userConfig.location || userData.location,
          social: {
            github: userConfig.social?.github || userConfig.githubUsername || userConfig.username,
            gitee: userConfig.social?.gitee || userConfig.giteeUsername || userConfig.username
          },
          cached_at: Date.now()
        }

        if (userConfig.avatar) {
          memberData.avatar_url = userConfig.avatar
        }

        members.push(memberData)
      }
    }
  }

  return members
}

// 加载团队成员信息
const loadTeamMembers = async (): Promise<void> => {
  loading.value = true
  error.value = ''
  teamMembers.value = []

  try {
    // 优先从缓存加载
    const cacheSuccess = await loadFromCache()

    if (!cacheSuccess) {
      // 缓存加载失败，回退到API
      console.log('🔄 缓存不可用，使用API获取数据')
      teamMembers.value = await fetchMembersFromAPI()

      if (teamMembers.value.length === 0) {
        throw new Error('无法获取任何团队成员信息')
      }

      console.log('✓ 使用API获取数据完成')
    }
  } catch (err) {
    error.value = `获取团队信息失败: ${(err as Error).message}`
    console.error('获取团队信息失败:', err)
  } finally {
    loading.value = false
  }
}

// 组件挂载时加载数据
onMounted(async () => {
  await loadConfig()
  await loadTeamMembers()
})
</script>

<style scoped>
/* 保持原有样式不变 */
.team-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.team-members {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

/* 现代化卡片设计 */
.modern-card {
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider-light);
  border-radius: 20px;
  padding: 1.5rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06);
  min-height: 160px;
}

.modern-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(34, 197, 94, 0.08), transparent);
  transition: left 0.6s ease;
}

.modern-card:hover::before {
  left: 100%;
}

.modern-card:hover {
  transform: translateY(-4px);
  border-color: var(--vp-c-green-1);
  box-shadow: 0 10px 25px rgba(34, 197, 94, 0.15), 0 4px 10px rgba(0, 0, 0, 0.1);
}

/* 右上角社交链接 */
.member-social-corner {
  position: absolute;
  top: 1rem;
  right: 1rem;
  display: flex;
  gap: 0.25rem;
  z-index: 10;
}

.social-link {
  width: 28px;
  height: 28px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  color: var(--vp-c-text-2);
  text-decoration: none;
  transition: all 0.2s ease;
  opacity: 0.8;
}

.social-icon {
  width: 14px;
  height: 14px;
  fill: currentColor;
}

.social-link:hover {
  transform: scale(1.1);
  opacity: 1;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.github-link:hover {
  background: #333;
  color: white;
  border-color: #333;
}

.gitee-link:hover {
  background: #c71d23;
  color: white;
  border-color: #c71d23;
}

.blog-link:hover,
.contribute-link:hover {
  background: var(--vp-c-green-1);
  color: white;
  border-color: var(--vp-c-green-1);
}

/* 主要内容区域 */
.member-main {
  display: flex;
  align-items: center;
  gap: 1.2rem;
  padding-right: 3rem;
}

/* 头像部分 */
.member-avatar-section {
  position: relative;
  flex-shrink: 0;
}

.member-avatar {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid var(--vp-c-green-1);
  transition: all 0.3s ease;
  position: relative;
  z-index: 2;
}

.avatar-ring {
  position: absolute;
  top: -4px;
  left: -4px;
  right: -4px;
  bottom: -4px;
  border-radius: 50%;
  border: 2px solid transparent;
  background: linear-gradient(45deg, var(--vp-c-green-1), var(--vp-c-green-2));
  background-clip: padding-box;
  opacity: 0;
  transform: scale(0.9);
  transition: all 0.3s ease;
  z-index: 1;
}

.modern-card:hover .member-avatar {
  transform: scale(1.05);
}

.modern-card:hover .avatar-ring {
  opacity: 1;
  transform: scale(1);
}

/* 加入我们的头像 */
.join-avatar {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--vp-c-green-1), var(--vp-c-green-2));
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid var(--vp-c-green-1);
  transition: all 0.3s ease;
  position: relative;
  z-index: 2;
}

.modern-card.join-card:hover .join-avatar {
  transform: scale(1.05) rotate(90deg);
}

.join-ring {
  background: linear-gradient(45deg, var(--vp-c-green-2), var(--vp-c-green-3));
}

/* 信息内容 */
.member-info {
  flex: 1;
  min-width: 0;
}

.member-header {
  margin-bottom: 0.75rem;
}

.member-name {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
  margin: 0 0 0.5rem 0;
  transition: color 0.3s ease;
  line-height: 1.2;
}

.modern-card:hover .member-name {
  color: var(--vp-c-green-1);
}

.member-role-badge {
  background: linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(22, 163, 74, 0.08));
  color: var(--vp-c-green-1);
  padding: 0.2rem 0.75rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 600;
  border: 1px solid rgba(34, 197, 94, 0.2);
  display: inline-block;
  transition: all 0.2s ease;
}

.modern-card:hover .member-role-badge {
  background: var(--vp-c-green-1);
  color: white;
  transform: translateY(-1px);
}

.join-badge {
  background: linear-gradient(135deg, rgba(34, 197, 94, 0.15), rgba(22, 163, 74, 0.12));
}

.member-location {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  color: var(--vp-c-text-2);
  font-size: 0.8rem;
  margin-bottom: 0.75rem;
  line-height: 1.2;
}

.location-icon {
  color: var(--vp-c-green-1);
  flex-shrink: 0;
}

.location-text {
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* 技能标签 */
.member-skills {
  margin-top: 0.75rem;
}

.skills-container {
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem;
}

.skill-tag {
  background: var(--vp-c-green-soft);
  color: var(--vp-c-green-1);
  padding: 0.15rem 0.5rem;
  border-radius: 8px;
  font-size: 0.7rem;
  font-weight: 600;
  border: 1px solid rgba(34, 197, 94, 0.2);
  transition: all 0.2s ease;
  white-space: nowrap;
}

.skill-tag:hover {
  background: var(--vp-c-green-1);
  color: white;
  transform: translateY(-1px);
}

.skill-more {
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-2);
  padding: 0.15rem 0.5rem;
  border-radius: 8px;
  font-size: 0.7rem;
  font-weight: 500;
  border: 1px solid var(--vp-c-divider);
}

/* 加入我们卡片特殊样式 */
.join-card {
  border: 2px dashed var(--vp-c-green-1);
  background: linear-gradient(135deg, rgba(34, 197, 94, 0.03), rgba(22, 163, 74, 0.02));
}

.join-card:hover {
  background: linear-gradient(135deg, rgba(34, 197, 94, 0.08), rgba(22, 163, 74, 0.05));
}

/* 加载和错误状态 */
.loading-state, .error-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem;
  text-align: center;
}

.loading-spinner {
  width: 40px;
  height: 40px;
  border: 3px solid var(--vp-c-divider);
  border-top: 3px solid var(--vp-c-green-1);
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: 1rem;
}

.error-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.retry-button {
  margin-top: 1rem;
  padding: 0.75rem 1.5rem;
  background: var(--vp-c-green-1);
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.retry-button:hover {
  background: var(--vp-c-green-2);
  transform: translateY(-1px);
}

/* 缓存信息 */
.cache-info {
  margin-top: 2rem;
  text-align: center;
}

.cache-status {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.85rem;
  color: var(--vp-c-text-2);
  background: var(--vp-c-bg-soft);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  border: 1px solid var(--vp-c-divider);
}

.cache-status svg {
  color: var(--vp-c-green-1);
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* 响应式设计 */
@media (max-width: 768px) {
  .team-members {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .member-main {
    padding-right: 2.5rem;
  }

  .member-social-corner {
    top: 0.75rem;
    right: 0.75rem;
  }

  .social-link {
    width: 24px;
    height: 24px;
  }

  .social-icon {
    width: 12px;
    height: 12px;
  }
}

@media (max-width: 480px) {
  .team-container {
    padding: 1rem;
  }

  .modern-card {
    padding: 1rem;
  }

  .member-avatar, .join-avatar {
    width: 56px;
    height: 56px;
  }

  .member-main {
    flex-direction: column;
    text-align: center;
    padding-right: 0;
    gap: 1rem;
  }

  .member-social-corner {
    position: relative;
    top: auto;
    right: auto;
    order: -1;
    justify-content: center;
    margin-bottom: 0.5rem;
  }

  .skills-container {
    justify-content: center;
  }
}
</style>
