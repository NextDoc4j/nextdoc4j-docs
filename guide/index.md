# 项目简介
<br>
<a href="https://github.com/nextdoc4j/nextdoc4j">
  <img src="https://img.shields.io/badge/version-1.0.0-green" alt="Project Version 1.0.0" style="display:inline-block;margin-right:10px;" />
</a>
<a href="https://spring.io/projects/spring-boot">
  <img src="https://img.shields.io/badge/SpringBoot-3.5.5-green?logo=spring" alt="Spring Boot 3.5.5" style="display:inline-block;margin-right:10px;" />
</a>
<a href="https://springdoc.org/">
  <img src="https://img.shields.io/badge/SpringDoc-2.8.13-orange?logo=openapiinitiative" alt="SpringDoc 2.8.13" style="display:inline-block;margin-right:10px;" />
</a>
<a href="https://www.openapis.org/">
  <img src="https://img.shields.io/badge/OpenAPI-3.1-lightgrey?logo=openapiinitiative" alt="OpenAPI 3.1" style="display:inline-block;margin-right:10px;" />
</a>
<a href="https://openjdk.org/">
  <img src="https://img.shields.io/badge/OpenJDK-17-brightgreen?logo=OpenJDK" alt="OpenJDK 17" style="display:inline-block;margin-right:10px;" />
</a>
<a href="https://vuejs.org/">
  <img src="https://img.shields.io/badge/Vue-3.5.17-brightgreen?logo=vue.js" alt="Vue 3.5.17" style="display:inline-block;margin-right:10px;" />
</a>
<a href="https://element-plus.org/">
  <img src="https://img.shields.io/badge/ElementPlus-2.10.2-4BC0C0?logo=element" alt="Element Plus 2.10.2" style="display:inline-block;margin-right:10px;" />
</a>
<a href="https://www.typescriptlang.org/">
  <img src="https://img.shields.io/badge/TypeScript-5.8.3-3178C6?logo=typescript" alt="TypeScript 5.8.3" style="display:inline-block;margin-right:10px;" />
</a>
<a href="https://vitejs.dev/">
  <img src="https://img.shields.io/badge/Vite-6.3.5-CF9E53?logo=vite" alt="Vite 6.3.5" style="display:inline-block;margin-right:10px;" />
</a>
<a href="https://www.apache.org/licenses/LICENSE-2.0">
  <img src="https://img.shields.io/badge/License-Apache%202.0-red?logo=apache" alt="Apache License 2.0" style="display:inline-block;margin-right:10px;" />
</a>
<a href="https://github.com/nextdoc4j/nextdoc4j/stargazers">
  <img src="https://img.shields.io/github/stars/nextdoc4j/nextdoc4j?style=social" alt="GitHub Stars" style="display:inline-block;margin-right:10px;" />
</a>
<a href="https://github.com/nextdoc4j/nextdoc4j/network/members">
  <img src="https://img.shields.io/github/forks/nextdoc4j/nextdoc4j?style=social" alt="GitHub Forks" style="display:inline-block;margin-right:10px;" />
</a>
<a href="https://gitee.com/nextdoc4j/nextdoc4j/stargazers">
  <img src="https://gitee.com/nextdoc4j/nextdoc4j/badge/star.svg?theme=dark" alt="Gitee Stars" style="display:inline-block;margin-right:10px;"/>
</a>
<a href="https://gitee.com/nextdoc4j/nextdoc4j/members">
  <img src="https://gitee.com/nextdoc4j/nextdoc4j/badge/fork.svg?theme=dark" alt="Gitee Forks" style="display:inline-block;margin-right:10px;" />
</a>

[在线演示](https://demo.nextdoc4j.top) 


**NextDoc4j** 是一个现代化的 API 文档 UI 工具，专为 **SpringDoc** 和 **OpenAPI 3** 设计的现代化文档界面，旨在完全替代传统的 Swagger UI，为开发者提供更美观、更强大的开发体验，让 API 文档焕然一新。

基于现代 Web 技术栈构建，采用响应式设计理念，提供清晰直观的界面布局，支持暗色/亮色主题切换，为开发者带来舒适的文档浏览体验。重新设计的用户交互流程，改进了参数输入、请求测试、响应查看等核心功能，让 API 调试工作更加顺手。

## 🤝 社区与支持

::: tip 💡
选择您喜欢的代码托管平台,给我们一个 Star ⭐ 支持项目持续发展!
:::
<CommunityPlatforms></CommunityPlatforms>

## 💡 诞生背景

**NextDoc4j** 完全是受 **[Knife4j](https://doc.xiaominfo.com/)** 的启发，也感谢 **Knife4j** 开源项目的贡献。在使用 Knife4j 的过程中，我们深深体会到了优秀 API 文档工具的重要性，同时也看到了在现代化 Web 技术发展下，API 文档界面还有更大的提升空间。

同时，前端 UI 基于优秀的 **[Vben Admin](https://doc.vben.pro/)** 企业级管理系统框架构建，感谢 Vben 提供的开箱即用的现代化前端解决方案。Vben Admin 基于 Vue3.0、Vite、TypeScript 的技术栈，为我们提供了完善的组件库、工具函数、主题配置等基础能力，让我们能够专注于 API 文档的核心功能开发。

## 📸 界面展示

<div class="theme-image">
  <img src="/images/screenshots/bright-home.png" alt="NextDoc4j 主界面" class="light-only" />
  <img src="/images/screenshots/dark-home.png" alt="NextDoc4j 主界面" class="dark-only" />
</div>

## ✨ 核心特性

### 🎨 现代化设计
- 基于 **Vben Admin** 设计规范，采用企业级 UI 设计语言
- 继承 Vben 的组件系统和交互模式，保证界面一致性和专业性
- 响应式布局设计，完美适配桌面端、平板和移动设备
- 支持多主题配置，包括亮色/暗色主题及自定义主题色
- 清晰的信息层次和直观的导航结构

### 🔧 深度集成优化
- 专为 **SpringDoc** 深度优化，与 Spring Boot 生态完美融合
- 无缝替换 Swagger UI，零学习成本迁移
- 一行配置即可升级您的 API 文档界面

### ⚡ 交互体验升级
- 重新设计的用户交互流程，操作更加直观流畅
- 优化的请求测试功能，实时展示请求和响应详情
- 增强的响应查看器，支持 JSON 格式化和语法高亮
- 快速搜索和过滤功能，快速定位目标 API

### 🛠️ 高度可定制
- 继承 Vben Admin 的主题系统，支持多套预设主题方案
- 支持品牌 Logo 定制，展示企业形象
- 丰富的主题色彩配置选项，可配置主色调、辅助色等
- 基于 CSS Variables 的动态主题切换
- 灵活的布局样式调整能力，支持菜单模式、标签页等配置
- 自定义 CSS 样式支持，满足企业级项目的个性化需求


## 🏗️ 技术架构

我们的系统基于现代化前后端技术栈，兼顾 **高性能**、**可维护性** 和 **扩展性**。

### 前端架构

*  **框架**：[Vben Admin 5.x](https://doc.vben.pro/) —— 企业级管理系统解决方案
* **核心技术**：[Vue3](https://vuejs.org/) + [TypeScript](https://www.typescriptlang.org/) + [Vite](https://vitejs.dev/)
* **UI & 样式**： [Element Plus](https://element-plus.org/) + 二次封装组件，结合 [TailwindCSS](https://tailwindcss.com/) 与 CSS Variables 实现动态主题
* **状态管理**：[Pinia](https://pinia.vuejs.org/) —— 简洁高效，支持数据持久化

### 工程化体系
* **代码规范**：[ESLint](https://eslint.org/)、[Prettier](https://prettier.io/)
* **提交校验**：[Husky](https://typicode.github.io/husky)、[Commitlint](https://commitlint.js.org/)

### 后端架构
* **框架**：[Spring Boot 3.4.x](https://spring.io/projects/spring-boot)
* **接口文档**：[SpringDoc](https://springdoc.org/) + [OpenAPI 3.0](https://swagger.io/specification/)
* **版本与构建**：[Maven](https://maven.apache.org/)

## 🎯 项目目标

我们的目标是打造一个：
- **现代化** - 采用最新的 Web 技术和设计理念
- **美观易用** - 提供直观流畅的用户体验
- **功能强大** - 满足复杂 API 项目的各种需求
- **高度可定制** - 适应不同团队和项目的个性化需求
- **全平台支持** - 完美适配各种设备和屏幕尺寸



## 📄 开源协议

NextDoc4j 基于 [Apache License 2.0](https://gitee.com/nextdoc4j/nextdoc4j/blob/master/LICENSE) 开源协议，欢迎大家使用、贡献和分享。

## 🙏 致谢

感谢以下开源项目的启发和支持：
- **[Knife4j](https://github.com/xiaoymin/knife4j)** - 优秀的 Swagger 增强工具，为我们提供了宝贵的设计理念
- **[Vben Admin](https://doc.vben.pro/)** - 企业级管理系统框架，为前端 UI 提供了强大的技术基础
- **[SpringDoc](https://github.com/springdoc/springdoc-openapi)** - Spring Boot OpenAPI 3 集成方案
- **[Swagger UI](https://github.com/swagger-api/swagger-ui)** - 经典的 API 文档工具
- **[Vue.js](https://vuejs.org/)** - 渐进式 JavaScript 框架
- **[Element-Plus](https://element-plus.org/zh-CN/)** - 优秀的 Vue.js UI 组件库

---

> 💡 **提示**: 如果您正在使用 Knife4j 或 Swagger UI，欢迎体验 NextDoc4j 带来的全新文档体验！
