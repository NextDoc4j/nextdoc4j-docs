# 认证展示插件

认证展示插件用于在 API 文档中读取 `springdoc.components.security-schemes` 配置，并在 NextDoc4j 中生成独立的全局认证配置页，同时在在线调试时自动携带认证信息。

## UI 适配效果

配置插件后，UI 会新增“全局认证”页面，并在在线调试时自动注入对应请求头：

![authentication-plugin-ui](/images/screenshots/guide/authentication-plugin-ui.png)
*▲ 全局认证配置页*

![authentication-plugin-ui-2.png](/images/screenshots/guide/authentication-plugin-ui-2.png)
*▲ 在线调试 Headers 中自动注入全局请求头*

## 快速开始

### 1. 引入依赖

::: code-group

```xml [Spring Boot 3]
<dependency>
    <groupId>top.nextdoc4j</groupId>
    <artifactId>nextdoc4j-plugin-security-schemes-springboot3</artifactId>
</dependency>
```

```xml [Spring Boot 4]
<dependency>
    <groupId>top.nextdoc4j</groupId>
    <artifactId>nextdoc4j-plugin-security-schemes-springboot4</artifactId>
</dependency>
```

:::

> 建议先在 `dependencyManagement` 中引入 `nextdoc4j-bom-springboot3/4`，这样这里无需单独写版本号。

### 2. 配置 `springdoc` 鉴权方案

```yaml
springdoc:
  components:
    security-schemes:
      Authorization:
        type: HTTP
        in: HEADER
        name: Authorization
        scheme: Bearer
        description: "请输入 Bearer Token，格式：Bearer {token}"
```

### 3. 启用插件

```yaml
nextdoc4j:
  plugin:
    security:
      enabled: true
```

NextDoc4j UI 会读取 `securitySchemes` 配置，在调试时显示认证输入框。

## 路径排除

通过 `NextDoc4jPathExcluder` 接口自定义排除路径：

```java
@Component
public class CustomPathExcluder implements NextDoc4jPathExcluder {

    @Override
    public Set<String> getExcludedPaths() {
        Set<String> paths = new HashSet<>();
        paths.add("/actuator/**");
        paths.add("/public/**");
        return paths;
    }

    @Override
    public int getOrder() {
        return 200;  // 数值越小优先级越高
    }
}
```
