# 📚 NextDoc4j 文档集成配置

NextDoc4j 支持集成额外的 Markdown 文档，为您的 API 文档提供更丰富的内容支持。

::: warning 📋 关于图片路径
在 Markdown 中插入图片时，可以使用：

1. **相对路径（相对于项目静态资源根目录）**
    - 例如 `/img/test.png`。
    - 不需要 Markdown 文件与图片在同一目录。
    - 需要后端静态资源映射正确（如 Spring Boot `src/main/resources/static` 或 `WebMvcConfigurer` 中的映射）。
    - Markdown-it 渲染时会根据静态资源 URL 显示图片。

2. **完整路径（URL）**
    - 例如 `https://example.com/img/test.png`。
    - 无需额外处理。

> ⚠️ 如果图片路径不符合静态资源映射，浏览器将显示 404。
:::

## 文档集成配置项

| 配置项                            | 类型     | 说明              |
|--------------------------------|--------|-----------------|
| `nextdoc4j.extension.markdown` | array  | Markdown 文档配置列表 |
| `group`                        | string | 文档分组名称          |
| `location`                     | string | 文档文件路径，支持通配符    |

## 基础配置示例

```yaml
nextdoc4j:
  extension:
    enabled: true
    markdown:
      - group: openapi                    # API 规范分组
        location: classpath:markdown/openapi/OpenApi 接口和验签规范.md
      - group: docker                     # Docker 文档分组
        location: classpath:markdown/docker/**  # 支持通配符匹配多个文件
```

## 文档路径配置

### 单个文件配置
```yaml
markdown:
  - group: api-guide
    location: classpath:markdown/api/quick-start.md
```

### 多个文件配置（通配符）
```yaml
markdown:
  - group: tutorials
    location: classpath:markdown/tutorials/**
```

### 支持的路径格式

| 路径格式                     | 说明      | 示例                                |
|--------------------------|---------|-----------------------------------|
| `classpath:path/file.md` | 单个文件    | `classpath:markdown/guide.md`     |
| `classpath:path/**`      | 目录下所有文件 | `classpath:markdown/tutorials/**` |
| `classpath:path/*.md`    | 指定扩展名文件 | `classpath:markdown/*.md`         |

## 文档组织结构

### 推荐目录结构
```
src/main/resources/
├── markdown/
│   ├── api/                    # API 相关文档
│   │   ├── quick-start.md     # 快速开始
│   │   ├── authentication.md  # 认证说明
│   │   └── rate-limiting.md   # 频率限制
│   ├── deployment/            # 部署相关文档
│   │   ├── docker.md         # Docker 部署
│   │   ├── kubernetes.md     # K8s 部署
│   │   └── nginx.md          # Nginx 配置
│   ├── troubleshooting/       # 故障排除
│   │   ├── common-issues.md  # 常见问题
│   │   └── error-codes.md    # 错误码说明
│   └── changelog/             # 变更日志
│       ├── v1.0.0.md
│       └── v1.1.0.md
```

## 完整配置示例

### 多分组文档配置
```yaml
nextdoc4j:
  extension:
    enabled: true
    markdown:
      # API 使用指南
      - group: api-guide
        location: classpath:markdown/api/**
      
      # 部署文档
      - group: deployment
        location: classpath:markdown/deployment/**
      
      # 开发指南
      - group: development
        location: classpath:markdown/dev/**
      
      # 故障排除
      - group: troubleshooting
        location: classpath:markdown/troubleshooting/**
      
      # 变更日志
      - group: changelog
        location: classpath:markdown/changelog/**
```

### 混合配置示例
```yaml
nextdoc4j:
  extension:
    enabled: true
    markdown:
      # 单个重要文件
      - group: getting-started
        location: classpath:markdown/README.md
      
      # 整个目录
      - group: user-guide
        location: classpath:markdown/user-guide/**
      
      # 特定文件类型
      - group: specifications
        location: classpath:markdown/specs/*.md
```

## 文档分组管理

### 分组命名建议

| 分组名称              | 用途     | 示例内容      |
|-------------------|--------|-----------|
| `getting-started` | 入门指南   | 快速开始、安装配置 |
| `api-reference`   | API 参考 | 接口规范、认证说明 |
| `user-guide`      | 用户指南   | 功能介绍、使用教程 |
| `deployment`      | 部署指南   | 环境配置、部署方案 |
| `development`     | 开发指南   | 开发环境、代码规范 |
| `troubleshooting` | 故障排除   | 常见问题、错误处理 |
| `changelog`       | 变更日志   | 版本更新、新增功能 |
| `examples`        | 示例代码   | 代码示例、最佳实践 |


## 文档集成效果

集成的 Markdown 文档会在左侧导航栏中显示：

![NextDoc4j Markdown 文档集成](/public/images/screenshots/guide/markdown.png)

*▲ 集成 Markdown 文档后的导航界面*
