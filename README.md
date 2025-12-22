<p align="center">
  <img src="./public/logo/logo.png" alt="Nextdoc4j Logo" width="180">
</p>

<h1 align="center">Nextdoc4j</h1>

<p align="center">
  <strong>🚀 现代化的 API 文档后端解决方案</strong><br>
  基于 <strong>SpringBoot 3.4.x</strong> + <strong>SpringDoc</strong> 构建，替代 Swagger UI，<br>
  提供更美观、更强大的开发体验，让 API 文档焕然一新。
</p>

<p align="center">
  🌐 <a href="https://demo.nextdoc4j.top/">在线演示</a> |
  📘 <a href="https://nextdoc4j.top/">官方文档</a> |
  🧩 <a href="https://nextdoc4j.top/more/changelog.html">更新日志</a> |
  ❓ <a href="https://nextdoc4j.top/more/faq.html">常见问题</a>
</p>

# 这是 NextDoc4J 的官方文档网站，基于 VitePress 构建，提供完整的使用指南和开发文档。

## 目录结构

```
nextdoc4j-docs/
├── .vitepress/               # VitePress 配置和主题
│   ├── config.mts           # VitePress 配置文件
│   └── theme/               # 自定义主题
│       ├── components/      # Vue 组件
│       ├── custom.css       # 自定义样式
│       └── index.ts         # 主题入口
├── development/              # 开发相关文档
│   ├── index.md             # 前端开发指南
│   └── backend.md           # 后端开发指南
├── guide/                    # 使用指南
│   ├── index.md             # 指南首页
│   ├── start/               # 快速开始
│   │   └── started.md       # 快速开始文档
│   ├── config/              # 配置说明
│   │   ├── basicconfiguration.md        # 基础配置
│   │   ├── brandconfiguration.md        # 品牌配置
│   │   ├── authconfiguration.md         # 认证配置
│   │   └── markdownIntegrationConfiguration.md  # Markdown 集成配置
│   └── plugin/              # 插件使用
│       ├── enum.md          # 枚举插件
│       └── security.md      # 认证展示插件
├── more/                     # 更多信息
│   ├── team/                # 团队信息
│   │   ├── team.md          # 团队介绍页
│   │   ├── team.config.ts   # 团队配置
│   │   └── build-team-cache.ts  # 团队缓存构建
│   ├── changelog.md         # 更新日志
│   ├── contribute.md        # 贡献指南
│   └── faq.md               # 常见问题
├── public/                   # 静态资源
│   ├── images/              # 图片资源
│   │   └── screenshots/     # 截图
│   ├── logo/                # Logo 文件
│   └── team-cache.json      # 团队数据缓存
├── index.md                  # 文档首页
├── package.json              # 项目配置
├── pnpm-lock.yaml            # 依赖锁定文件
├── pnpm-workspace.yaml       # 工作区配置
└── tsconfig.json             # TypeScript 配置
```

## 文档说明

### 📖 内容结构

- **首页 (`index.md`)**：文档网站主页，提供 NextDoc 的整体介绍
- **使用指南 (`guide/`)**：面向用户的完整使用教程
  - 快速开始指南
  - 基础配置说明
  - 认证系统配置
  - 品牌定制配置
  - Markdown 集成配置
- **开发文档 (`development/`)**：面向开发者的技术文档
  - 前端开发指南
  - 开发环境搭建
- **更多信息 (`more/`)**：补充资料
  - 版本更新日志
  - 社区贡献指南
  - 常见问题解答

### 🛠️ 技术栈

- **VitePress**：静态站点生成器
- **Vue 3**：前端框架
- **TypeScript**：类型支持
- **Iconify**：图标库

### 📸 资源文件

- `public/images/screenshots/`：产品截图和界面展示
- `public/logo/`：品牌 Logo 和网站图标

<div align="center">

**NextDoc4j** - 让 API 文档焕然一新！ 如果这个项目对你有帮助，请给它一个 ⭐️

</div>
