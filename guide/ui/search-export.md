# 全局搜索与导出

本页聚焦前端的全局效率能力：**全局搜索、全局参数管理、文档导出**。

## 1. 全局搜索

### 能力说明

- 支持按路径、接口名称、关键字检索。
- 支持结果高亮与方法标签展示。
- 支持网关聚合场景下跨服务搜索。

### 使用建议

1. 优先用路径关键段检索（例如 `/user`、`/file/upload`）。
2. 在聚合模式下先选择目标服务，再做精确搜索。
3. 配合标签分组缩小搜索范围，减少同名接口干扰。

![global-search-url](/images/screenshots/guide/global-search-url.png)
*▲ 输入 URL 关键字 `/api/user` 的搜索结果*

![global-search-description](/images/screenshots/guide/global-search-description.png)
*▲ 输入接口描述关键字后的搜索结果*

## 2. 全局参数管理

### 能力说明

- 支持统一维护常用请求参数。
- 支持在导出 / 调试流程中复用 Header / Query 参数，减少重复填写。
- 支持按作用域隔离全局参数，并统一控制调试缓存开关。

![global-params-panel](/images/screenshots/guide/global-params-placeholder.png)
*▲ 全局配置页：调试缓存 + 全局 Header / Query 参数管理*

## 3. 文档导出

### 能力说明

- 支持按分组 / 接口范围导出文档。
- 支持 Markdown / HTML / OpenAPI JSON / `docx` / PDF 多格式导出。
- 支持实时预览、附加品牌信息 / 其它文档，并兼容聚合服务导出。

![export-doc-panel](/images/screenshots/guide/export-doc-placeholder.png)
*▲ 导出中心：范围选择、实时预览与多格式导出*
