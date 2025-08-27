import {defineConfig} from 'vitepress'

export default defineConfig({
    title: "NextDoc4j",
    description: "现代化 API 文档 UI 工具 - 专为 SpringDoc 设计",

    head: [
        ['link', {rel: 'icon', href: '/logo/favicon.ico'}],
        ['meta', {name: 'theme-color', content: '#3c82f6'}],
        ['meta', {property: 'og:title', content: 'NextDoc4j - 现代化 API 文档工具'}],
        ['meta', {property: 'og:description', content: '专为 SpringDoc 和 OpenAPI 3 设计的现代化文档界面'}],
        ['meta', {property: 'og:image', content: '/logo/logo.png'}],
    ],

    themeConfig: {
        logo: '/logo/logo.png',
        siteTitle: 'NextDoc4j',

        nav: [
            {text: '首页', link: '/'},
            {text: '指南', link: '/guide/'},
            {
                text: '更多',
                items: [
                    {text: '开发', link: '/development/'},
                    {text: '贡献指南', link: '/more/contribute'},
                    {text: '更新日志', link: '/more/changelog'},
                    {text: 'FAQ', link: '/more/faq'}
                ]
            }
        ],

        sidebar: {
            '/guide/': [
                {
                    text: '开始',
                    collapsed: false,
                    items: [
                        {text: '概述', link: '/guide/'},
                        {text: '快速开始', link: '/guide/started'}
                    ]
                },
                {
                    text: '配置说明',
                    collapsed: false,
                    items: [
                        {text: '基础配置', link: '/guide/basicconfiguration'},
                        {text: '品牌配置', link: '/guide/brandconfiguration'},
                        {text: '简单认证配置', link: '/guide/authconfiguration'},
                        {text: 'markdown文档配置', link: '/guide/markdownIntegrationConfiguration'}
                    ]
                }
            ],

            '/development/': [
                {
                    text: '开发指南',
                    collapsed: false,
                    items: [
                        {text: '后端开发', link: '/development/'},
                        {text: '前端开发', link: '/development/frontend'}
                    ]
                }
            ],
        },

        footer: {
            copyright: [
                'Copyright © 2025 <a href="https://docs.dockit4j.top" target="_blank" rel="noopener noreferrer">NextDoc4j 版权所有</a>',
                '<a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer">浙ICP备2025151976号</a>'
            ].join('<br>')
        },

        docFooter: {
            prev: '上一页',
            next: '下一页'
        },

        outline: {
            level: 'deep',
            label: '目录'
        },

        lastUpdated: {
            text: '最后更新于',
            formatOptions: {
                dateStyle: 'short',
                timeStyle: 'medium'
            }
        },

        returnToTopLabel: '回到顶部',
        sidebarMenuLabel: '菜单',
        darkModeSwitchLabel: '主题',
        lightModeSwitchTitle: '切换到浅色模式',
        darkModeSwitchTitle: '切换到深色模式',

        socialLinks: [
            {icon: 'github', link: 'https://github.com/your-repo/NextDoc4j'},
            {icon: 'gitee', link: 'https://gitee.com/NextDoc4j'}
        ],

        search: {
            provider: 'local',
            options: {
                locales: {
                    root: {
                        translations: {
                            button: {
                                buttonText: '搜索文档',
                                buttonAriaLabel: '搜索文档'
                            },
                            modal: {
                                noResultsText: '无法找到相关结果',
                                resetButtonTitle: '清除查询条件',
                                footer: {
                                    selectText: '选择',
                                    navigateText: '切换'
                                }
                            }
                        }
                    }
                }
            }
        }
    },

    markdown: {
        theme: {
            light: 'github-light',
            dark: 'github-dark'
        },
        lineNumbers: true
    }
})
