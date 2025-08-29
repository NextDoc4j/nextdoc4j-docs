export default {
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
    },

    // 缓存配置
    cache: {
        // 缓存持续时间（毫秒）
        duration: 30 * 24 * 60 * 60 * 1000, // 30天

        // 自动更新配置
        autoUpdate: {
            enabled: true,
            // 更新间隔（毫秒）
            interval: 24 * 60 * 60 * 1000, // 每24小时检查一次

            // 更新时间配置（可选，格式：HH:MM）
            scheduledTime: '03:00', // 凌晨3点更新

            // 失败重试次数
            retryCount: 3,

            // 重试间隔（毫秒）
            retryInterval: 5 * 60 * 1000 // 5分钟
        },

        // API请求配置
        api: {
            // 请求间隔（避免频率限制）
            requestDelay: 1000,

            // 超时时间
            timeout: 10000,

            // User-Agent
            userAgent: 'NextDoc4j-TeamUpdater/1.0'
        }
    }
}
