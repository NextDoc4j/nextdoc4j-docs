# 📚 NextDoc4j 文档集成配置

NextDoc4j 支持集成额外的 Markdown 文档，为您的 API 文档提供更丰富的内容支持。

## 文档集成配置项

| 配置项 | 类型 | 说明 |
|--------|------|------|
| `nextdoc4j.extension.markdown` | array | Markdown 文档配置列表 |
| `group` | string | 文档分组名称 |
| `location` | string | 文档文件路径，支持通配符 |

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

| 路径格式 | 说明 | 示例 |
|---------|------|------|
| `classpath:path/file.md` | 单个文件 | `classpath:markdown/guide.md` |
| `classpath:path/**` | 目录下所有文件 | `classpath:markdown/tutorials/**` |
| `classpath:path/*.md` | 指定扩展名文件 | `classpath:markdown/*.md` |

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

| 分组名称 | 用途 | 示例内容 |
|---------|------|---------|
| `getting-started` | 入门指南 | 快速开始、安装配置 |
| `api-reference` | API 参考 | 接口规范、认证说明 |
| `user-guide` | 用户指南 | 功能介绍、使用教程 |
| `deployment` | 部署指南 | 环境配置、部署方案 |
| `development` | 开发指南 | 开发环境、代码规范 |
| `troubleshooting` | 故障排除 | 常见问题、错误处理 |
| `changelog` | 变更日志 | 版本更新、新增功能 |
| `examples` | 示例代码 | 代码示例、最佳实践 |

### 分组显示顺序
文档分组在导航中的显示顺序与配置顺序一致：

```yaml
markdown:
  - group: getting-started    # 第一个显示
  - group: api-reference     # 第二个显示
  - group: user-guide        # 第三个显示
```

## 文档集成效果

集成的 Markdown 文档会在左侧导航栏中显示：

![NextDoc4j Markdown 文档集成](/images/screenshots/guide/login.png)

*▲ 集成 Markdown 文档后的导航界面*

## 文档编写规范

### Markdown 语法支持
- 标准 Markdown 语法
- GitHub Flavored Markdown (GFM)
- 表格、代码块、链接
- 图片嵌入（建议使用相对路径）

### 文档结构建议
```markdown
# 文档标题

## 概述
简短介绍文档内容和用途

## 详细说明
具体的功能介绍或操作步骤

### 子章节
更详细的分类说明

## 示例
```yaml
# 配置示例
key: value
```

## 注意事项
重要提示和注意点
```

### 图片资源管理
```
src/main/resources/
├── markdown/
│   └── images/           # 文档图片目录
│       ├── api/         # API 文档图片
│       ├── deployment/  # 部署文档图片
│       └── common/      # 通用图片
```

## 高级配置示例

### 动态内容配置
```yaml
nextdoc4j:
  extension:
    enabled: true
    markdown:
      # 环境特定文档
      - group: environment
        location: classpath:markdown/env/${spring.profiles.active}/**
      
      # 版本特定文档  
      - group: version-docs
        location: classpath:markdown/v${application.version}/**
```

### 多语言文档支持
```yaml
nextdoc4j:
  extension:
    enabled: true
    markdown:
      # 中文文档
      - group: docs-zh
        location: classpath:markdown/zh/**
      
      # 英文文档
      - group: docs-en
        location: classpath:markdown/en/**
```

## 文档维护最佳实践

1. **内容组织**：
    - 按功能模块合理分组
    - 保持文档结构清晰
    - 使用统一的命名规范

2. **内容质量**：
    - 定期更新文档内容
    - 保持与代码同步
    - 添加清晰的示例

3. **用户体验**：
    - 提供完整的目录结构
    - 添加内部链接导航
    - 使用清晰的标题层级

4. **版本管理**：
    - 记录文档变更历史
    - 维护版本对应关系
    - 及时清理过期文档
