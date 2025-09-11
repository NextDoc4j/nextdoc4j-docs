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
## 文档集成效果

集成的 Markdown 文档会在左侧导航栏中显示：

![NextDoc4j Markdown 文档集成](/images/screenshots/guide/markdown.png)

*▲ 集成 Markdown 文档后的导航界面*

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

