# NextDoc4J 官方文档

这是 NextDoc4J 的官方文档网站，基于 VitePress 构建，提供完整的使用指南和开发文档。

## 目录结构

```
nextdoc4j-docs/
├── development/              # 开发相关文档
│   ├── frontend.md          # 前端开发指南
│   └── index.md             # 开发文档首页
├── guide/                   # 使用指南
│   ├── authconfiguration.md      # 认证配置
│   ├── basicconfiguration.md     # 基础配置
│   ├── brandconfiguration.md     # 品牌配置
│   ├── index.md                  # 指南首页
│   ├── markdownIntegrationConfiguration.md  # Markdown 集成配置
│   └── started.md                # 快速开始
├── more/                    # 更多信息
│   ├── changelog.md         # 更新日志
│   ├── contribute.md        # 贡献指南
│   └── faq.md              # 常见问题
├── public/                  # 静态资源
│   ├── images/              # 图片资源
│   │   └── screenshots/     # 截图
│   └── logo/               # Logo 文件
├── index.md                # 文档首页
├── LICENSE                 # 许可证
├── package.json           # 项目配置
└── pnpm-lock.yaml         # 依赖锁定文件
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
