# 🎨 NextDoc4j 品牌配置

通过品牌定制功能，您可以轻松自定义文档界面的外观，包括 Logo、标题和页脚，打造专属的文档风格。

## 快速开始

### 基础配置
```yaml
nextdoc4j:
  extension:
    enabled: true
    brand:
      logo: classpath:brand/logo/logo.png
      title: "xx API 文档"
      footer-text: "Copyright © 2024 xxx 公司"
```

### 效果预览
- **认证页**：显示自定义 Logo 和标题
![认证页](/images/screenshots/guide/login-logo.png)


- **文档主页**：展示完整的品牌元素（Logo、标题、页脚）
![主页](/images/screenshots/guide/home-logo.png)


## 配置详解

### 配置参数一览

| 参数            | 类型     | 说明               |
|---------------|--------|------------------|
| `logo`        | string | 自定义 Logo 文件路径    |
| `title`       | string | 项目标题（认证页和文档页标题）  |
| `footer-text` | string | 页脚文本，支持 Markdown |


## Logo 配置

### 基本设置
```yaml
nextdoc4j:
  extension:
    brand:
      logo: classpath:brand/logo/logo.png
```

### Logo 要求
- **格式**：PNG、JPG、SVG 等
- **尺寸**：建议宽度 120-200px，高度 40-60px
- **位置**：推荐放在 `src/main/resources/brand/logo/` 目录

```
src/main/resources/
└── brand/
    └── logo/
        └── logo.png
```


## 标题配置

```yaml
nextdoc4j:
  extension:
    brand:
      title: "我的 API 文档系统"
```

**标题优先级**：自定义标题 → SpringDoc 标题 → 默认标题


## 页脚配置

### 基础页脚
```yaml
nextdoc4j:
  extension:
    brand:
      footer-text: "Copyright © 2024 我的公司"
```

### 支持变量替换

| 变量                            | 说明    | 示例                          |
|-------------------------------|-------|-----------------------------|
| `${application.name}`         | 应用名称  | MyAPI                       |
| `${application.version}`      | 应用版本  | 1.0.0                       |
| `${application.contact.name}` | 联系人姓名 | 张三                          |
| `${application.contact.url}`  | 联系人网址 | https://github.com/zhangsan |
| `${application.url}`          | 应用官网  | https://myapi.com           |

### 页脚样式示例

**带链接的版权信息**
```yaml
footer-text: 'Copyright © 2024 [我的公司](https://mycompany.com)'
```

**完整信息展示**
```yaml
footer-text: 'Copyright © 2024 [${application.contact.name}](${application.contact.url}) ⋅ [${application.name}](${application.url}) v${application.version}'
```
