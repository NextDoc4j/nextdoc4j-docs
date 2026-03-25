# 界面功能总览

> 本分组聚焦 **前端界面能力**（可见可用的功能），不是后端配置项说明。

## 功能地图

| 功能域 | 主要能力 | 入口/位置 |
|---|---|---|
| 文档浏览 | 分组导航、接口详情、实体模型浏览、菜单图标 | 首页与文档详情页 |
| 在线调试 | 参数编辑、`Content-Type` 切换、文件上传、响应渲染、请求缓存 | 接口详情页调试区 |
| 认证与权限 | 全局认证输入、接口权限元数据展示（含 Sa-Token） | 文档详情页 |
| 文档扩展 | Markdown 文档导航与渲染 | 左侧菜单 |
| 网关聚合 | 服务选择器、按服务隔离菜单、聚合模式路由 | 网关模式下首页/文档页 |
| 全局效率工具 | 全局搜索、全局参数管理、文档导出（含 `docx`） | 顶部工具区/导出页 |
| 视觉与体验 | 明暗主题、系统主题跟随、响应式布局 | 全站 |

## 1. 文档浏览

- 支持按分组、标签和路径浏览接口。
- 文档详情区支持请求参数、响应结构、示例内容联动查看。
- 实体模型区域支持结构化浏览，并支持 JSON 示例视图。

<div class="theme-image">
  <img src="/images/screenshots/bright-home.png" alt="NextDoc4j 主界面（亮色）" class="light-only" />
  <img src="/images/screenshots/dark-home.png" alt="NextDoc4j 主界面（暗色）" class="dark-only" />
</div>

## 2. 在线调试

- 支持常见请求参数编辑与请求头配置。
- 支持请求体 `Content-Type` 场景切换。
- 支持文件上传与表单混合参数调试。
- 支持响应多内容类型渲染与 JSON 结构化查看。
- 支持复制 `baseUrl` 与 `path`，并支持请求缓存提升重复调试效率。

![debug-panel](/images/screenshots/guide/debug-panel-placeholder.png)
*▲ 在线调试与请求缓存界面*

## 3. 认证与权限

- 支持从 `securitySchemes` 渲染全局认证输入框。
- 支持接口级权限元数据展示。
- 支持 Sa-Token 注解解析后的权限/角色信息展示。

![authentication-plugin-ui](/images/screenshots/guide/authentication-plugin-ui.png)
*▲ 全局认证输入框*

![satoken-plugin-1](/images/screenshots/guide/security-plugin-1.png)
*▲ Sa-Token 权限信息展示*

## 4. 文档扩展

- 支持集成 Markdown 文档并在左侧菜单统一展示。
- 支持按分组组织业务文档与变更记录。

![markdown-integration](/images/screenshots/guide/markdown.png)
*▲ Markdown 文档集成效果*

## 5. 网关聚合

- 自动识别聚合模式并展示服务选择器。
- 支持按服务维度隔离菜单与接口内容。
- 支持聚合场景下的路由状态管理与容错切换。

![gateway-plugin-ui](/images/screenshots/guide/gateway-plugin-ui.png)
*▲ 网关聚合模式服务切换*

## 6. 全局效率工具

- 全局搜索：支持路径检索、关键字高亮、聚合场景搜索。
- 全局参数管理：支持在导出/调试场景复用公共参数。
- 文档导出：支持按分组/接口范围导出，支持 `docx`，并支持聚合服务导出。

> 详细操作见：[全局搜索与导出](./search-export.md)

## 7. 视觉与交互体验

- 支持亮色/暗色主题。
- 支持跟随系统暗色模式自动切换。
- 响应式布局适配桌面与移动端。
- 持续优化菜单、图标、面板布局与可读性。

## 相关文档

- [快速开始](/guide/start/started.md)
- [文档浏览与在线调试](./browse-debug.md)
- [认证与权限界面](./security-permissions.md)
- [网关聚合界面](./gateway-ui.md)
- [全局搜索与导出](./search-export.md)
- [网关聚合插件](/guide/plugin/gateway.md)
- [认证展示插件](/guide/plugin/authentication.md)
- [Sa-Token 权限码插件](/guide/plugin/satoken.md)
- [枚举展示插件](/guide/plugin/enum.md)
