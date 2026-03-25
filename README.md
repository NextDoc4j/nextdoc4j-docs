<p align="center">
  <img src="./public/logo/logo.png" alt="NextDoc4j Logo" width="180">
</p>

<h1 align="center">NextDoc4j Docs</h1>

<p align="center">
  NextDoc4j 官方文档站点仓库（VitePress）
</p>

<p align="center">
  🌐 <a href="https://demo.nextdoc4j.top/">在线演示</a> |
  📘 <a href="https://nextdoc4j.top/">官方文档</a> |
  🧩 <a href="https://nextdoc4j.top/more/changelog.html">更新日志</a> |
  ❓ <a href="https://nextdoc4j.top/more/faq.html">常见问题</a>
</p>

## 项目说明

本仓库用于维护 NextDoc4j 官网文档内容与静态资源，覆盖：

- 使用指南（快速开始、配置说明、插件说明）
- 界面功能文档（UI 功能拆解与截图）
- 开发指南（前端/后端）
- 更新日志、贡献指南、FAQ、团队页

关联仓库：

- 后端主仓：`nextdoc4j`
- 演示仓：`nextdoc4j-demo`

## 本地开发

### 环境要求

- Node.js 20+
- pnpm 9+

### 常用命令

```bash
pnpm install
pnpm docs:dev
pnpm docs:build
pnpm docs:preview
```

团队页缓存相关：

```bash
pnpm team:status
pnpm team:update
pnpm team:force-update
```

## 当前目录结构

```text
nextdoc4j-docs/
├── .vitepress/
│   ├── config.mts
│   └── theme/
│       ├── components/
│       ├── custom.css
│       └── index.ts
├── development/
│   ├── index.md
│   └── backend.md
├── guide/
│   ├── index.md
│   ├── start/
│   │   └── started.md
│   ├── config/
│   │   ├── basicconfiguration.md
│   │   ├── brandconfiguration.md
│   │   ├── authconfiguration.md
│   │   └── markdownIntegrationConfiguration.md
│   ├── plugin/
│   │   ├── enum.md
│   │   ├── authentication.md
│   │   ├── satoken.md
│   │   └── gateway.md
│   └── ui/
│       ├── overview.md
│       ├── browse-debug.md
│       ├── security-permissions.md
│       ├── gateway-ui.md
│       └── search-export.md
├── more/
│   ├── changelog.md
│   ├── contribute.md
│   ├── faq.md
│   └── team/
│       ├── team.md
│       ├── team.config.ts
│       └── build-team-cache.ts
├── public/
│   ├── images/
│   │   ├── paymentcode/
│   │   └── screenshots/
│   ├── logo/
│   └── team-cache.json
├── index.md
├── package.json
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
└── tsconfig.json
```

## 文档分组说明

- `index.md`：官网首页内容。
- `guide/`：面向用户的使用文档。
- `guide/ui/`：前端界面功能说明与截图（可见能力，不是后端配置项）。
- `development/`：面向开发者的前后端开发说明。
- `more/`：项目补充内容（更新日志、贡献指南、FAQ、团队页）。
- `public/images/screenshots/`：文档截图资源。

## 维护建议

- 截图优先使用最新 UI 实际页面，不使用过期占位图。
- 插件文档示例需与 `nextdoc4j`、`nextdoc4j-demo` 当前代码保持一致。
- 提交前建议执行一次 `pnpm docs:build`。

---

如果文档内容与代码实现不一致，欢迎直接提交 PR 或 Issue。
