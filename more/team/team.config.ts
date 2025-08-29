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

interface PaymentMethods {
    alipay?: string
    wechat?: string
}

interface SponsorConfig {
    enabled: boolean
    payments?: PaymentMethods
    gratitudeText?: string
    suggestedAmounts?: number[]
    supporters?: Array<{
        name: string
        avatar: string
        amount?: number
    }>
}


interface TeamConfiguration {
    teams: Team[]
    project: ProjectConfig
    sponsor: SponsorConfig
}

// 配置导出
const teamConfig: TeamConfiguration = {
    // 团队配置
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
    ],

    // 项目配置
    project: {
        contributeUrl: 'https://github.com/NextDoc4j/NextDoc4j/issues'
    },

    // 赞助配置
    sponsor: {
        enabled: true,
        payments: {
            alipay: '/images/paymentcode/alipay-qr.jpg',
            wechat: '/images/paymentcode/wechat-qr.jpg'
        }
    }
}

export default teamConfig

// 导出类型定义供其他文件使用
export type {
    SocialLinks,
    UserConfig,
    Team,
    ProjectConfig,
    PaymentMethods,
    SponsorConfig,
    TeamConfiguration
}
