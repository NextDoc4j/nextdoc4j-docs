# 网关聚合插件

网关聚合插件用于在 **Spring Cloud Gateway** 场景下，自动聚合多个微服务的 OpenAPI 文档，并在 NextDoc4j UI 中按服务维度统一浏览与调试。

## UI 适配效果

配置插件后，UI 会自动进入聚合模式，展示服务选择器与按服务隔离的菜单：

![gateway-plugin-service-selector](/images/screenshots/guide/gateway-plugin-ui.png)
*▲ 主界面*

## 快速开始

### 1. 引入依赖（网关服务）

```xml
<dependency>
    <groupId>top.nextdoc4j</groupId>
    <artifactId>nextdoc4j-plugin-gateway</artifactId>
    <version>${latest.version}</version>
</dependency>
```

### 2. 配置网关路由

在 `spring.cloud.gateway.routes` 中定义服务路由，并建议配置 `metadata.nextdoc4j.name`：

```yaml
spring:
  cloud:
    gateway:
      server:
        webflux:
          routes:
            - id: user-service
              uri: lb://user-service
              predicates:
                - Path=/user/**
              filters:
                - StripPrefix=1
              metadata:
                nextdoc4j:
                  name: 用户服务

            - id: system-service
              uri: lb://system-service
              predicates:
                - Path=/system/**
              filters:
                - StripPrefix=1
              metadata:
                nextdoc4j.name: 系统服务
```

### 3. 启用网关聚合插件

```yaml
nextdoc4j:
  plugin:
    gateway:
      enabled: true
      auto-discovery: true
      name-resolve-strategy: AUTO
      doc-path-strategy: AUTO
```

### 4. 访问网关文档入口

```text
http://localhost:9000/doc.html
```

## 核心配置项

统一前缀：`nextdoc4j.plugin.gateway`

| 配置项（后缀）                             | 类型      | 默认值                      | 说明                                     |
|-------------------------------------|---------|--------------------------|----------------------------------------|
| `enabled`                           | boolean | `true`                   | 是否启用网关聚合插件                             |
| `auto-discovery`                    | boolean | `true`                   | 是否自动从网关路由发现服务                          |
| `doc-path`                          | string  | `/v3/api-docs`           | 微服务文档后缀                                |
| `exclude-routes`                    | list    | `[]`                     | 排除的路由 ID（支持 `*`）                       |
| `include-patterns`                  | list    | `[]`                     | 包含的路由模式（Ant 风格，匹配 routeId）             |
| `name-mappings`                     | map     | `{}`                     | 路由 ID 到显示名称的映射                         |
| `name-resolve-strategy`             | enum    | `AUTO`                   | 服务显示名解析策略                              |
| `doc-path-strategy`                 | enum    | `AUTO`                   | 文档地址解析策略                               |
| `services`                          | list    | `[]`                     | 手动补充服务列表（自动发现之外）                       |
| `security.global-schemes`           | map     | `{}`                     | 网关全局 SecurityScheme                    |
| `security.apply-global-requirement` | boolean | `true`                   | 服务无 `security` 时自动注入全局安全要求             |
| `context-path.metadata-key`         | string  | `nextdoc4j.context-path` | 从注册中心 metadata 读取服务 context-path 的 key |

## 解析策略说明

### `name-resolve-strategy`

| 值          | 说明                                                                                   |
|------------|--------------------------------------------------------------------------------------|
| `AUTO`     | 优先级：`nameMappings` > `metadata.nextdoc4j.name` > `metadata.name` > URI 服务名 > routeId |
| `METADATA` | 只从 metadata 解析（失败回退格式化 routeId）                                                      |
| `URI`      | 从 `lb://service-id` 提取服务名                                                            |
| `ROUTE_ID` | 直接使用 routeId（做格式化）                                                                   |

### `doc-path-strategy`

| 值                 | 说明                                                                                       |
|-------------------|------------------------------------------------------------------------------------------|
| `AUTO`            | 优先级：`metadata.nextdoc4j.doc-path` > `metadata.springdoc.path` > Path 谓词 > URI/routeId 推断 |
| `METADATA`        | 仅使用 metadata 中文档路径                                                                       |
| `ROUTE_PREDICATE` | 从路由 Path 谓词提取前缀，再拼接 `doc-path`                                                           |
| `MANUAL_ONLY`     | 仅使用 `services` 手动配置，不做路由自动发现                                                             |

## 路由 metadata 配置（推荐）

插件同时支持 metadata 的扁平与嵌套写法：

```yaml
metadata:
  nextdoc4j.name: 文件服务
  nextdoc4j.doc-path: /file/v3/api-docs
```

```yaml
metadata:
  nextdoc4j:
    name: 文件服务
    doc-path: /file/v3/api-docs
```

也兼容：

```yaml
metadata:
  springdoc.path: /file/v3/api-docs
```

## `context-path` 自动发现

当微服务配置了 `server.servlet.context-path` 时，网关聚合插件会自动解析并拼接到文档地址中。

解析优先级：

1. 注册中心实例 metadata（Reactive/阻塞 DiscoveryClient）  
2. 路由 metadata  
3. 本地缓存

默认识别的 metadata key 包括：

- `nextdoc4j.context-path`（默认）
- `server.servlet.context-path`
- `context-path` / `contextPath` / `context_path`

### 微服务侧建议

微服务仅需正常配置 `server.servlet.context-path`，并使用 `nextdoc4j-springboot3-starter`。  
starter 会自动将该 context-path 注入注册中心 metadata（key: `nextdoc4j.context-path`）。

```yaml
server:
  servlet:
    context-path: /bdca
```

## 自动发现 + 手动补充（混合模式）

适用于部分服务无法被网关路由发现、或需要接入外部文档地址的场景：

```yaml
nextdoc4j:
  plugin:
    gateway:
      auto-discovery: true
      services:
        - name: 外部支付服务
          url: /pay/v3/api-docs
        - name: 第三方文档
          url: https://api.example.com/v3/api-docs
```

## 网关全局鉴权合并

插件会在 OpenAPI 响应改写阶段合并 `securitySchemes`：

1. 将 `security.global-schemes` 合并到 `components.securitySchemes`  
2. 若服务文档未声明 `security` 且 `apply-global-requirement=true`，自动注入全局安全要求  
3. 根据当前请求路径修正 `servers.url`，保证在线调试请求路径正确

示例：

```yaml
nextdoc4j:
  plugin:
    gateway:
      security:
        apply-global-requirement: true
        global-schemes:
          Authorization:
            type: HTTP
            in: HEADER
            name: Authorization
            scheme: Bearer
            description: "请输入 Bearer Token，格式：Bearer {token}"
```

## 扩展点

### 1. 自定义路由过滤逻辑

实现 `NextDoc4jGatewayRouteFilter`，按业务规则决定哪些路由进入聚合列表：

```java
@Bean
public NextDoc4jGatewayRouteFilter customGatewayRouteFilter() {
    return (route, props) -> {
        String routeId = route.getId();
        return routeId != null && routeId.startsWith("biz-");
    };
}
```

### 2. 自定义 metadata 解析逻辑

实现 `NextDoc4jGatewayRouteMetadataResolver`，可自定义服务名与文档地址提取策略：

```java
@Bean
public NextDoc4jGatewayRouteMetadataResolver customMetadataResolver(
        GatewayDocProperties properties,
        NextDoc4jGatewayServiceContextPathResolver contextPathResolver) {
    return new NextDoc4jDefaultGatewayRouteMetadataResolver(properties, contextPathResolver) {
        @Override
        public String resolveDisplayName(RouteDefinition route) {
            return "业务-" + super.resolveDisplayName(route);
        }
    };
}
```

## OpenAPI 扩展字段示例

插件会在网关 `/v3/api-docs` 注入聚合标记：

```json
{
  "x-nextdoc4j-aggregation": {
    "aggregation": true,
    "docPath": "/v3/api-docs"
  }
}
```

前端据此自动进入聚合模式并渲染服务选择器。
