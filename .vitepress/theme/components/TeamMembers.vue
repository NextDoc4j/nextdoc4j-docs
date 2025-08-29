<template>
  <div class="team-container">
    <div class="team-members">
      <!-- 动态渲染团队成员 -->
      <div
          v-for="member in teamMembers"
          :key="member.login"
          class="member-card"
      >
        <img
            :src="member.avatar_url"
            :alt="member.name || member.login"
            class="member-avatar"
        />
        <div class="member-info">
          <h3>{{ member.displayName || member.name || member.login }}</h3>
          <p class="role">{{ member.role }}</p>
          <p class="location">📍 {{ member.location || '未知' }}</p>
          <div class="skills">
            <span
                v-for="skill in member.skills"
                :key="skill"
                class="skill"
            >
              {{ skill }}
            </span>
          </div>
          <div class="social-links">
            <!-- 同时显示 GitHub 和 Gitee 链接，使用各自配置的用户名 -->
            <a v-if="member.social?.github" :href="`https://github.com/${member.social.github}`" target="_blank" class="github">
              <svg class="social-icon" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
              </svg>
              GitHub
            </a>
            <a v-if="member.social?.gitee" :href="`https://gitee.com/${member.social.gitee}`" target="_blank" class="gitee">
              <svg class="social-icon" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.984 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.016 0zm6.09 5.333c.328 0 .593.266.592.593v1.482a.594.594 0 0 1-.593.592H9.777c-.982 0-1.778.796-1.778 1.778v5.63c0 .327.266.592.593.592h5.63c.982 0 1.778-.796 1.778-1.778v-.296a.593.593 0 0 0-.592-.593h-4.15a.592.592 0 0 1-.592-.592v-1.482a.593.593 0 0 1 .593-.592h6.815c.327 0 .593.265.593.592v3.408a4 4 0 0 1-4 4H5.926a.593.593 0 0 1-.593-.593V9.778a4.444 4.444 0 0 1 4.445-4.444h8.296z" fill="#C71D23"/>
              </svg>
              Gitee
            </a>
            <a v-if="member.blog" :href="member.blog" target="_blank">
              <svg class="social-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" fill="currentColor"/>
              </svg>
              博客
            </a>
          </div>
        </div>
      </div>

      <!-- 加入我们卡片 -->
      <div class="member-card join-card">
        <div class="join-icon">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="80" height="80">
            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" fill="var(--vp-c-green-1)"/>
          </svg>
        </div>
        <div class="member-info">
          <h3>加入我们</h3>
          <p class="role">成为团队一员</p>
          <p class="location">📍 远程协作</p>
          <div class="skills">
            <span class="skill">开源贡献</span>
            <span class="skill">代码审查</span>
            <span class="skill">文档编写</span>
          </div>
          <div class="social-links">
            <a :href="config.project?.contributeUrl || '#'" target="_blank">
              参与贡献
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- 加载状态 -->
    <div v-if="loading" class="loading">
      <div class="loading-spinner"></div>
      <p>正在加载团队信息...</p>
    </div>

    <!-- 错误状态 -->
    <div v-if="error" class="error">
      <p>{{ error }}</p>
      <button @click="loadTeamMembers" class="retry-btn">重试</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// 响应式数据
const config = ref({})
const teamMembers = ref([])
const loading = ref(false)
const error = ref('')

// 加载配置文件
async function loadConfig() {
  try {
    // 动态导入配置文件
    const configModule = await import('/more/team/team.config.js')
    config.value = configModule.default || configModule
  } catch (error) {
    // 默认配置
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

// GitHub API 请求
async function fetchGitHubUser(username) {
  const response = await fetch(`https://api.github.com/users/${username}`)
  if (!response.ok) throw new Error(`GitHub API 请求失败: ${response.status}`)
  return response.json()
}

// Gitee API 请求
async function fetchGiteeUser(username) {
  const response = await fetch(`https://gitee.com/api/v5/users/${username}`)
  if (!response.ok) throw new Error(`Gitee API 请求失败: ${response.status}`)
  return response.json()
}

// 加载团队成员信息
async function loadTeamMembers() {
  loading.value = true
  error.value = ''
  teamMembers.value = []

  try {
    for (const team of config.value.teams || []) {
      for (const userConfig of team.users || []) {
        let userData

        if (team.platform === 'github') {
          userData = await fetchGitHubUser(userConfig.username)
          userData.platform = 'github'
        } else if (team.platform === 'gitee') {
          userData = await fetchGiteeUser(userConfig.username)
          userData.platform = 'gitee'
          // Gitee API 字段映射
          userData.html_url = userData.html_url || `https://gitee.com/${userData.login}`
        }

        // 合并用户配置信息
        userData.username = userConfig.username // 保留原始用户名用于生成链接
        userData.role = userConfig.role
        userData.skills = userConfig.skills || []
        userData.displayName = userConfig.displayName
        userData.location = userConfig.location

        // 配置社交链接（支持不同平台的不同用户名）
        userData.social = {
          github: userConfig.social?.github || userConfig.githubUsername || userConfig.username,
          gitee: userConfig.social?.gitee || userConfig.giteeUsername || userConfig.username
        }

        // 如果有自定义头像，使用自定义头像
        if (userConfig.avatar) {
          userData.avatar_url = userConfig.avatar
        }

        teamMembers.value.push(userData)
      }
    }
  } catch (err) {
    error.value = `获取团队信息失败: ${err.message}`
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
.loading {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 3rem;
  color: var(--vp-c-text-2);
}

.loading-spinner {
  width: 40px;
  height: 40px;
  border: 3px solid var(--vp-c-divider);
  border-top: 3px solid var(--vp-c-green-1);
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

.error {
  text-align: center;
  padding: 2rem;
  color: var(--vp-c-text-2);
}

.retry-btn {
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background: var(--vp-c-green-1);
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.retry-btn:hover {
  background: var(--vp-c-green-2);
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
