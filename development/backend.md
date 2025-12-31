# NextDoc4j 后端开发指南

## 环境要求

### 必需环境
- **JDK**: 17 或更高版本
- **Maven**: 3.8.x 或更高版本
- **Git**: 用于版本控制

### 推荐开发工具
- IntelliJ IDEA 2023.x 或更高版本
- Visual Studio Code (配合 Java 扩展包)

## 技术栈

| 技术                   | 版本     | 说明         |
|----------------------|--------|------------|
| SpringBoot           | 3.5.x  | 应用框架       |
| Spring Cloud Gateway | 2024.x | 网关支持       |
| SpringDoc OpenAPI    | 2.x    | OpenAPI 集成 |
| Sa-Token             | 1.xx.x | 权限认证       |
| Hutool               | 5.x    | 工具库        |

## 项目架构

NextDoc4j 采用多模块 Maven 项目结构，主要包含以下模块：

```
nextdoc4j/ (根项目)
├── nextdoc4j-bom/                      # BOM 依赖管理
├── nextdoc4j-dependencies/             # 依赖版本管理
├── nextdoc4j-core/                     # 核心模块
├── nextdoc4j-ui/                       # 前端 UI 资源
├── nextdoc4j-springboot3-starter/      # Spring Boot 3 自动配置
└── nextdoc4j-plugin/                   # 插件模块
    ├── nextdoc4j-plugin-enums/         # 枚举信息展示插件
    ├── nextdoc4j-plugin-security/      # 认证信息展示插件
    │   ├── nextdoc4j-plugin-security-core/     # 核心模块
    │   └── nextdoc4j-plugin-security-satoken/  # Sa-Token 适配器
    └── nextdoc4j-plugin-gateway/       # Gateway 聚合文档插件
```

## 模块详细说明

### 1. nextdoc4j-dependencies
**作用**: 统一管理所有外部依赖版本

**主要依赖**:
- SpringBoot 3.5.x
- Spring Cloud 2023.x
- SpringDoc OpenAPI 2.x
- Sa-Token 1.xx.x
- Hutool 5.x

### 2. nextdoc4j-bom
**作用**: 提供统一的依赖版本管理（Bill of Materials）

**主要功能**:
- 统一管理项目所有模块的版本
- 简化依赖声明
- 避免版本冲突

### 3. nextdoc4j-core
**作用**: 项目核心功能模块，包含配置、扩展机制和 OpenAPI 定制器

**主要包结构**:
```
top.nextdoc4j.core/
├── configuration/              # 配置相关
│   ├── NextDoc4jProperties.java         # 主配置属性
│   ├── NextDoc4jExtension.java          # 扩展配置主类
│   ├── constant/
│   │   ├── NextDoc4jConstants.java      # 基础常量
│   │   ├── NextDoc4jFilterConstant.java # 过滤器常量
│   │   └── NextDoc4jOpenApiExtensionConstants.java  # OpenAPI 扩展常量
│   └── extension/           # 扩展配置
│       ├── NextDoc4jBasicAuth.java      # 基础认证配置
│       ├── NextDoc4jBrand.java          # 品牌配置
│       └── NextDoc4jMarkdown.java       # Markdown 配置
├── extension/               # 扩展功能
│   ├── NextDoc4jExtensionOpenApiCustomizer.java  # OpenAPI 定制器
│   └── NextDoc4jExtensionResolver.java           # 扩展解析器
└── util/                   # 工具类
    ├── NextDoc4jResourceUtils.java   # 资源工具类
    └── NextDoc4jPathMatcherUtils.java # 路径匹配工具类
```

**核心配置属性** (`NextDoc4jProperties`):
| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `enabled` | boolean | false | 是否启用 NextDoc4j |
| `cors` | boolean | false | 是否开启跨域 |
| `production` | boolean | false | 是否生产环境 |
| `auth` | AuthConfig | - | 认证配置 |
| `extension` | ExtensionConfig | - | 扩展功能配置 |

### 4. nextdoc4j-springboot3-starter
**作用**: Spring Boot 3 自动配置模块，整合 core、UI 和 SpringDoc

**主要包结构**:
```
top.nextdoc4j.springboot/
├── configuration/         # 自动配置
│   ├── NextDoc4jAutoConfiguration.java      # 主配置类
│   └── NextDoc4jFilterConfiguration.java    # 过滤器配置
└── filter/               # 过滤器
    ├── NextDoc4jBasicAuthFilter.java        # 基础认证过滤器
    ├── NextDoc4jProductionFilter.java       # 生产环境过滤器
    └── NextDoc4jResourceFilter.java         # 资源过滤器
```

### 5. nextdoc4j-ui
**作用**: 前端 UI 资源模块，提供现代化文档界面

**资源结构**:
```
resources/
├── doc.html              # 文档主页面
├── doclogin.html         # 登录页面
└── nextdoc/              # UI 资源
    ├── css/              # 样式文件
    ├── js/               # JavaScript 文件
    ├── assets/           # 静态资源
    ├── ttf/              # 字体文件
    └── favicon.ico       # 网站图标
```

### 6. nextdoc4j-plugin-enums
**作用**: 枚举信息展示插件，支持将枚举字段 kv 形式展示

**主要包结构**:
```
top.nextdoc4j.enums/
├── configuration/
│   ├── NextDoc4jEnumAutoConfiguration.java  # 自动配置类
│   └── NextDoc4jEnumProperties.java         # 配置属性
├── core/
│   └── EnumValue.java        # 枚举值接口
├── handler/
│   └── NextDoc4jEnumParameterHandler.java   # 枚举参数处理器
├── model/
│   └── NextDoc4jEnumMetadata.java           # 枚举元数据
├── resolver/
│   ├── EnumMetadataResolver.java            # 元数据解析器接口
│   └── DefaultEnumMetadataResolver.java     # 默认实现
└── util/
    └── NextDoc4jEnumUtils.java              # 枚举工具类
```

### 7. nextdoc4j-plugin-security
**作用**: 认证信息展示插件

#### 7.1 nextdoc4j-plugin-security-core
**核心模块**: 提供认证信息展示的核心功能

**主要包结构**:
```
top.nextdoc4j.security.core/
├── autoconfigure/
│   ├── NextDoc4jSecurityAutoConfiguration.java   # 自动配置类
│   ├── NextDoc4jSecurityProperties.java          # 配置属性
│   └── NextDoc4jSpringDocProperties.java         # SpringDoc 属性
├── customizer/
│   ├── NextDoc4jSecurityCustomizer.java          # 安全定制器
│   └── NextDoc4jSecurityMetadataCustomizer.java  # 元数据定制器
├── enhancer/
│   ├── NextDoc4jPathExcluder.java                # 路径排除器
│   └── NextDoc4jSecurityMetadataResolver.java    # 元数据解析器
└── model/
    └── NextDoc4jSecurityMetadata.java            # 安全元数据模型
```

#### 7.2 nextdoc4j-plugin-security-satoken
**Sa-Token 适配器**: 集成 Sa-Token 认证框架

**主要包结构**:
```
top.nextdoc4j.security.satoken/
├── autoconfigure/
│   └── NextDoc4jSaTokenAutoConfiguration.java    # 自动配置类
├── constant/
│   └── NextDoc4jSaTokenConstant.java             # 常量定义
├── excluder/
│   └── NextDoc4JSaTokenExcluderNextDoc4j.java    # NextDoc4j 排除器
├── resolver/
│   └── NextDoc4jSaTokenAnnotationResolver.java   # Sa-Token 注解解析器
└── .../
```

### 8. nextdoc4j-plugin-gateway
**作用**: Spring Cloud Gateway 聚合文档插件，自动聚合网关下所有微服务的 API 文档

**主要包结构**:
```
top.nextdoc4j.plugin.gateway/
├── configuration/
│   ├── GatewayDocAutoConfiguration.java      # 自动配置类
│   ├── GatewayDocProperties.java             # 配置属性
│   └── GatewayDocWebFluxConfigurer.java      # WebFlux 配置
├── constant/
│   └── GatewayMetadataConstants.java         # 元数据常量
├── customizer/
│   ├── GatewayAggregationCustomizer.java     # 聚合定制器
│   └── GatewaySwaggerConfigCustomizer.java   # Swagger 配置定制器
├── enums/
│   ├── DocPathStrategy.java                  # 文档路径策略
│   └── NameResolveStrategy.java              # 名称解析策略
├── filter/
│   ├── NextDoc4jDefaultGatewayRouteFilter.java   # 默认路由过滤器
│   └── NextDoc4jGatewayRouteFilter.java          # 网关路由过滤器
├── model/
│   ├── GatewayAggregationInfo.java           # 聚合信息模型
│   └── ServiceConfig.java                    # 服务配置
├── provider/
│   └── GatewayRouteDocProvider.java          # 路由文档提供者
└── resolver/
    ├── NextDoc4jGatewayRouteMetadataResolver.java    # 路由元数据解析器
    └── NextDoc4jDefaultGatewayRouteMetadataResolver.java  # 默认实现
```

## 开发环境搭建

### 1. 克隆项目
```bash
git clone https://github.com/NextDoc4j/nextdoc4j.git
cd nextdoc4j
```

### 2. 验证环境
```bash
# 检查 Java 版本
java -version

# 检查 Maven 版本
mvn -version
```

### 3. 构建项目
```bash
# 清理并编译
mvn clean compile

# 运行测试
mvn test

# 打包
mvn clean package
```

### 4. 代码规范
项目使用 Spotless 插件进行代码格式化：
```bash
# 自动格式化代码
mvn spotless:apply

# 检查代码格式
mvn spotless:check
```

## 模块依赖关系

```
                    nextdoc4j-bom
                         |
        +----------------+----------------+
        |                |                |
nextdoc4j-core   nextdoc4j-ui   nextdoc4j-plugin-*
        |                |
        +----+----+------+
             |
             v
nextdoc4j-springboot3-starter
(整合 core + ui + springdoc-openapi-starter-webmvc-ui)
```

本开发指南将根据项目发展持续更新，欢迎贡献和建议！
