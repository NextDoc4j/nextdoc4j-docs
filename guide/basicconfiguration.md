# 🔧 NextDoc4j 基础配置

基础配置控制 NextDoc4j 的核心功能开关和基本行为。

## 配置项说明

| 配置项 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| `nextdoc4j.enabled` | boolean | `false` | 是否启用 NextDoc4j 文档功能 |
| `nextdoc4j.cors` | boolean | `false` | 是否启用跨域支持，便于前后端分离项目调试 |
| `nextdoc4j.production` | boolean | `false` | 是否为生产环境，启用后会隐藏某些调试功能 |

## 配置示例

```yaml
nextdoc4j:
  enabled: true          # 启用文档功能
  cors: true            # 启用跨域支持
  production: false     # 开发环境模式
```

## 配置说明

### enabled
- **作用**：控制 NextDoc4j 功能的总开关
- **建议**：开发和测试环境设置为 `true`，生产环境根据需要决定

### cors
- **作用**：启用跨域资源共享支持
- **适用场景**：前后端分离项目开发调试时
- **建议**：开发环境启用，生产环境根据实际需求决定

### production
- **作用**：控制是否为生产环境模式
- **生产模式特性**：
    - 完全禁用 NextDoc4j 和 SpringDoc 相关的一切 URL 访问地址
    - 提升安全性

## 环境配置建议

### 开发环境
```yaml
nextdoc4j:
  enabled: true
  cors: true
  production: false
```

### 测试环境
```yaml
nextdoc4j:
  enabled: true
  cors: false
  production: false
```

### 生产环境
```yaml
nextdoc4j:
  enabled: true
  cors: false
  production: true
```

> 💡 **开发建议**：开发环境建议设置 `production: false` 以获得完整的调试功能，生产环境建议设置为 `true` 以提升安全性。
