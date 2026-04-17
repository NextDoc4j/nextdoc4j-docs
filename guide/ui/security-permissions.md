# 认证与权限界面

本页聚焦前端中的认证与权限展示能力。

## 1. 全局认证输入

### 能力点

- 自动读取 `securitySchemes` 并生成独立的全局认证配置页。
- 支持接口调试自动携带认证头。
- 支持折叠/展开与多方案展示。

### 推荐实践

- 团队统一使用固定命名（如 `Authorization`）。
- 在示例文档中明确 token 规则，降低误填率。

![authentication-plugin-ui](/images/screenshots/guide/authentication-plugin-ui.png)
*▲ 全局认证配置页*

## 2. 权限元数据展示（含 Sa-Token）

### 能力点

- 展示接口权限码与角色要求。
- 支持 `@SaCheckPermission`、`@SaCheckRole`、`@SaIgnore` 对应的界面提示。

### 适用场景

- 前后端联调时快速确认权限差异。

![satoken-plugin-1](/images/screenshots/guide/security-plugin-1.png)
*▲ 权限码展示*

![satoken-plugin-2](/images/screenshots/guide/security-plugin-2.png)
*▲ 角色码展示*
