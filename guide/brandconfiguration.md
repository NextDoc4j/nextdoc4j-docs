# 🎨 NextDoc4j 品牌配置

品牌定制功能允许您自定义文档界面的 Logo、标题和页脚信息，打造专属的文档风格。

## 品牌配置项

| 配置项                                     | 类型     | 说明                                                    |
|-----------------------------------------|--------|-------------------------------------------------------|
| `nextdoc4j.extension.brand.logo`        | string | 自定义 Logo 文件路径                                         |
| `nextdoc4j.extension.brand.title`       | string | 项目标题 同时也是登录界面标题,<br>为空则获取 springdoc 的title <br>再为空则默认 |
| `nextdoc4j.extension.brand.footer-text` | string | 自定义页脚文本，支持变量替换和 HTML                                  |

## 配置示例

```yaml
nextdoc4j:
  extension:
    enabled: true
    brand:
      logo: classpath:brand/logo/222.png
      title: nextDoc 接口文档
      footer-text: 'Copyright © 2022-present [${application.contact.name}](${application.contact.url})&nbsp;⋅&nbsp;[${application.name}](${application.url}) v${application.version}'
```

## Logo 配置

### Logo 文件配置
```yaml
nextdoc4j:
  extension:
    brand:
      logo: classpath:brand/logo/logo.png
```

### Logo 配置说明

- **支持格式**：PNG、JPG、SVG 等常见图片格式
- **建议尺寸**：宽度 120-200px，高度 40-60px
- **文件位置**：建议放在 `src/main/resources/brand/logo/` 目录下
- **路径格式**：使用 `classpath:` 前缀指向类路径下的资源

### 推荐目录结构
```
src/main/resources/
└── brand/
    └── logo/
        ├── logo.png          # 主 Logo
```

## 标题配置

### 标题设置
```yaml
nextdoc4j:
  extension:
    brand:
      title: "我的 API 文档系统"
```

### 标题优先级
1. `nextdoc4j.extension.brand.title` - 自定义标题
2. SpringDoc 配置中的 `title`
3. 默认标题 "NextDoc4j"

## 页脚配置

### 页脚文本设置
```yaml
nextdoc4j:
  extension:
    brand:
      footer-text: 'Copyright © 2024 [我的公司](https://mycompany.com) v${application.version}'
```

### 页脚变量支持

页脚文本支持以下变量替换：

| 变量                            | 说明     | 示例                          |
|-------------------------------|--------|-----------------------------|
| `${application.name}`         | 应用名称   | MyAPI                       |
| `${application.version}`      | 应用版本   | 1.0.0                       |
| `${application.contact.name}` | 联系人姓名  | 张三                          |
| `${application.contact.url}`  | 联系人网址  | https://github.com/zhangsan |
| `${application.url}`          | 应用官网地址 | https://myapi.com           |

### 页脚样式示例

#### 简单版权信息
```yaml
footer-text: 'Copyright © 2024 我的公司'
```

#### 带链接的版权信息
```yaml
footer-text: 'Copyright © 2024 [我的公司](https://mycompany.com)'
```

#### 完整信息展示
```yaml
footer-text: 'Copyright © 2024 [${application.contact.name}](${application.contact.url}) ⋅ [${application.name}](${application.url}) v${application.version}'
```

## 品牌效果展示

配置品牌定制后的文档界面效果：

![NextDoc4j 品牌定制效果](/images/screenshots/guide/login.png)

*▲ 自定义 Logo 和页脚的文档界面*

## 完整品牌配置示例

### 企业级配置
```yaml
nextdoc4j:
  extension:
    enabled: true
    brand:
      logo: classpath:brand/logo/company-logo.png
      title: "企业 API 开发平台"
      footer-text: 'Copyright © 2024 [科技有限公司](https://tech-company.com) ⋅ 内部文档系统 v${application.version}'
```

### 开源项目配置
```yaml
nextdoc4j:
  extension:
    enabled: true
    brand:
      logo: classpath:brand/logo/project-logo.svg
      title: "开源项目 API 文档"
      footer-text: 'MIT License © 2024 [${application.contact.name}](${application.contact.url}) ⋅ [GitHub](https://github.com/username/project)'
```

### 个人项目配置
```yaml
nextdoc4j:
  extension:
    enabled: true
    brand:
      logo: classpath:brand/logo/personal-logo.png
      title: "个人 API 项目"
      footer-text: 'Made with ❤️ by [开发者](https://developer-blog.com) ⋅ v${application.version}'
```

## 品牌配置最佳实践

1. **Logo 设计**：
    - 保持简洁明了
    - 适配不同尺寸屏幕

2. **标题设计**：
    - 简短而有意义
    - 体现项目或产品特色
    - 保持专业性

3. **页脚设计**：
    - 包含必要的版权信息
    - 提供有用的链接
    - 保持信息更新

4. **品牌一致性**：
    - 与公司或项目整体风格保持一致
    - 色彩搭配协调
    - 字体风格统一
