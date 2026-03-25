# NextDoc4j 后端开发指南

## 适用范围

- 主仓：`nextdoc4j`
- 演示仓：`nextdoc4j-demo`（用于验证 SB3/SB4、单体/网关两种运行形态）

## 环境要求

### 必需环境

- **JDK**: 17 或更高版本
- **Maven**: 3.9.x 或更高版本
- **Git**: 用于版本管理

### 推荐开发工具

- IntelliJ IDEA 2023.x 或更高版本
- Visual Studio Code（Java 扩展包）

## 当前后端模块总览（以 `nextdoc4j` 为准）

```text
nextdoc4j/
├── nextdoc4j-bom/
│   ├── nextdoc4j-bom-springboot3
│   └── nextdoc4j-bom-springboot4
├── nextdoc4j-core
├── nextdoc4j-plugin/
│   ├── nextdoc4j-plugin-enum/
│   │   ├── nextdoc4j-plugin-enum-core
│   │   ├── nextdoc4j-plugin-enum-springboot3
│   │   └── nextdoc4j-plugin-enum-springboot4
│   ├── nextdoc4j-plugin-gateway/
│   │   ├── nextdoc4j-plugin-gateway-core
│   │   ├── nextdoc4j-plugin-gateway-springboot3
│   │   └── nextdoc4j-plugin-gateway-springboot4
│   └── nextdoc4j-plugin-security/
│       ├── nextdoc4j-plugin-security-core
│       ├── nextdoc4j-plugin-security-schemes-springboot3
│       ├── nextdoc4j-plugin-security-schemes-springboot4
│       ├── nextdoc4j-plugin-security-satoken-springboot3
│       └── nextdoc4j-plugin-security-satoken-springboot4
├── nextdoc4j-starter/
│   ├── nextdoc4j-springboot3-starter
│   ├── nextdoc4j-springboot3-gateway-starter
│   ├── nextdoc4j-springboot4-starter
│   └── nextdoc4j-springboot4-gateway-starter
└── nextdoc4j-ui
```

## 模块职责

### 1. `nextdoc4j-bom`

负责依赖版本对齐，并拆分为 SB3 / SB4 两套 BOM：

- `nextdoc4j-bom-springboot3`
- `nextdoc4j-bom-springboot4`

当前 BOM 中统一管理了 Spring Boot、Spring Cloud、SpringDoc、Sa-Token、Swagger、Hutool 以及 NextDoc4j 自身各模块版本。

### 2. `nextdoc4j-core`

核心中立层（不绑定 Spring Boot 版本），主要提供：

- 基础配置模型：`NextDoc4jProperties`、`NextDoc4jExtension`
- 通用常量：`NextDoc4jConstants`、`NextDoc4jFilterConstant`
- 网关中立模型与枚举：`GatewaySecurityScheme`、`DocPathStrategy`、`NameResolveStrategy`
- 基础工具：路径匹配、基础认证工具、版本号提供器

### 3. `nextdoc4j-starter`

运行时装配层，负责自动配置、过滤器与资源暴露。分为四个 starter：

- `nextdoc4j-springboot3-starter`: WebMvc 单体场景
- `nextdoc4j-springboot4-starter`: WebMvc 单体场景
- `nextdoc4j-springboot3-gateway-starter`: WebFlux 网关场景
- `nextdoc4j-springboot4-gateway-starter`: WebFlux 网关场景

说明：

- 配置绑定桥接类 `NextDoc4jPropertiesMetadata` 在 starter 内，`core` 保持纯模型中立。
- 网关 starter 内置 `GatewayDocProperties` 的 `@ConfigurationProperties` 绑定与聚合能力装配。

### 4. `nextdoc4j-plugin`

插件分层统一为 `core + springboot3 + springboot4`：

- 枚举插件：`nextdoc4j-plugin-enum-*`
- 网关插件：`nextdoc4j-plugin-gateway-*`
- 安全插件：`nextdoc4j-plugin-security-*`

安全插件拆分为两类能力：

- `security-schemes`：解析/增强 OpenAPI `securitySchemes`
- `security-satoken`：解析 `@SaCheckPermission`、`@SaCheckRole`、`@SaIgnore` 元数据

### 5. `nextdoc4j-ui`

前端静态资源包，打包后放入 `META-INF/resources/`，供 starter 直接对外暴露：

- `doc.html`
- `doclogin.html`
- `/nextdoc/**` 资源

## 依赖与装配链路

### 单体（WebMvc）链路

```text
业务应用
  -> nextdoc4j-springbootX-starter
      -> nextdoc4j-core
      -> nextdoc4j-ui
      -> springdoc-openapi-starter-webmvc-ui
```

### 网关（WebFlux）链路

```text
业务应用
  -> nextdoc4j-springbootX-gateway-starter
      -> nextdoc4j-core
      -> nextdoc4j-ui
      -> nextdoc4j-plugin-gateway-springbootX
      -> springdoc-openapi-starter-webflux-ui
```

### 可选插件接入

单体或网关应用可按需追加：

- 枚举插件：`nextdoc4j-plugin-enum-springbootX`
- 认证展示插件：`nextdoc4j-plugin-security-schemes-springbootX`
- Sa-Token 权限插件：`nextdoc4j-plugin-security-satoken-springbootX`

## 配置模型归属（当前实现）

| 配置前缀 | 模型类 | 所在模块 | 说明 |
|---|---|---|---|
| `nextdoc4j` | `NextDoc4jProperties` | `nextdoc4j-core` | 通用主配置模型 |
| `nextdoc4j` | `NextDoc4jPropertiesMetadata` | `nextdoc4j-starter/*` | 配置元数据桥接（用于自动配置绑定展开） |
| `nextdoc4j.auth` | `NextDoc4jBasicAuth` | `nextdoc4j-core` | 基础认证配置 |
| `nextdoc4j.extension` | `NextDoc4jExtension` | `nextdoc4j-core` | 品牌、Markdown 扩展配置 |
| `nextdoc4j.gateway` | `GatewayDocProperties` | `nextdoc4j-plugin-gateway-core` | 网关聚合与路由解析配置 |
| `nextdoc4j.plugin.enum` | `NextDoc4jEnumProperties` | `nextdoc4j-plugin-enum-springboot*` | 枚举插件开关 |
| `nextdoc4j.plugin.security` | `NextDoc4jSecurityProperties` | `nextdoc4j-plugin-security-core` | 安全插件开关 |

## 核心扩展点（SPI）

### 枚举扩展

- `EnumMetadataResolver`（`nextdoc4j-plugin-enum-core`）
- 作用：自定义枚举值、描述、OpenAPI `type/format` 与扩展元数据

### 安全扩展

- `NextDoc4jSecurityMetadataResolver`（`nextdoc4j-plugin-security-core`）
- 作用：将业务安全注解解析为统一安全元数据

- `NextDoc4jPathExcluder`（`nextdoc4j-plugin-security-core`）
- 作用：排除无需鉴权展示的路径（支持 Ant 风格）

### 网关扩展

- `NextDoc4jGatewayRouteFilter`（`nextdoc4j-plugin-gateway-springboot*`）
- 作用：按路由维度筛选是否参与聚合

- `NextDoc4jGatewayRouteMetadataResolver`（`nextdoc4j-plugin-gateway-springboot*`）
- 作用：自定义路由文档地址与显示名称解析规则

## 本地开发流程

### 1. 拉取与编译

```bash
git clone https://github.com/NextDoc4j/nextdoc4j.git
cd nextdoc4j
mvn clean compile
```

### 2. 定向编译某个模块

```bash
# 例：只编译 SB3 网关 starter 及其依赖
mvn -pl nextdoc4j-starter/nextdoc4j-springboot3-gateway-starter -am clean compile

# 例：只编译 SB4 Sa-Token 插件及其依赖
mvn -pl nextdoc4j-plugin/nextdoc4j-plugin-security/nextdoc4j-plugin-security-satoken-springboot4 -am clean compile
```

### 3. 联调演示仓（建议）

在 `nextdoc4j-demo` 中验证改动是否覆盖双版本与双形态：

- 单体入口：`http://127.0.0.1:8000/doc.html`（SB3）
- 网关入口：`http://127.0.0.1:9000/doc.html`（SB3）

## 开发新增模块建议

新增功能优先遵循当前分层方式：

1. 先放入中立 `core`（纯模型/SPI/工具）
2. 再提供 `springboot3` 与 `springboot4` 两个适配模块
3. 在适配模块中注册 `AutoConfiguration.imports`
4. 补充到对应 BOM 的 `dependencyManagement`

这样可以保证 SB3/SB4 能力对齐，并减少跨版本分叉维护成本。
