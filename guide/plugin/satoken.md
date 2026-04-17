# Sa-Token 权限码插件

Sa-Token 权限码插件用于解析 `@SaCheckPermission`、`@SaCheckRole`、`@SaIgnore` 注解，在接口调试时动态展示权限元数据。

## UI 适配效果

配置插件后 UI 会在接口详情显示权限码：

![satoken-plugin-1](/images/screenshots/guide/security-plugin-1.png)
*▲ 权限码展示*

![satoken-plugin-2](/images/screenshots/guide/security-plugin-2.png)
*▲ 角色码展示*

## 快速开始

### 1. 引入依赖

::: code-group

```xml [Spring Boot 3]
<dependency>
    <groupId>top.nextdoc4j</groupId>
    <artifactId>nextdoc4j-plugin-security-satoken-springboot3</artifactId>
</dependency>
<dependency>
    <groupId>cn.dev33</groupId>
    <artifactId>sa-token-core</artifactId>
</dependency>
```

```xml [Spring Boot 4]
<dependency>
    <groupId>top.nextdoc4j</groupId>
    <artifactId>nextdoc4j-plugin-security-satoken-springboot4</artifactId>
</dependency>
<dependency>
    <groupId>cn.dev33</groupId>
    <artifactId>sa-token-core</artifactId>
</dependency>
```

:::

> 建议先在 `dependencyManagement` 中引入 `nextdoc4j-bom-springboot3/4`，这样这里无需单独写版本号。

### 2. 启用插件

```yaml
nextdoc4j:
  plugin:
    security:
      enabled: true
```

### 3. 使用权限注解

```java
@RestController
public class UserController {

    @SaCheckPermission(value = {"user-add", "user-all", "user-delete"}, mode = SaMode.OR, orRole = "admin")
    @PostMapping("/api/user")
    public User createUser(@RequestBody User user) {}

    @SaCheckRole(value = {"admin", "test"})
    @PutMapping("/api/user/{id}")
    public User updateUser(@PathVariable Long id, @RequestBody User user) {}

    @SaCheckPermission("user:read")
    @GetMapping("/api/user/{id}")
    public User getUserById(@PathVariable Long id) {}

    @SaIgnore
    @GetMapping("/api/user/public")
    public User getPublicUser() {}
}
```

## 支持的注解

| 注解                   | 说明   |
|----------------------|------|
| `@SaCheckPermission` | 权限校验 |
| `@SaCheckRole`       | 角色校验 |
| `@SaIgnore`          | 忽略校验 |

## OpenAPI 输出效果

解析后的权限信息会添加到 OpenAPI 扩展字段：

```json
{
  "paths": {
    "/api/user/{id}": {
      "get": {
        "x-nextdoc4j-security": {
          "permissions": [
            { "values": ["user:read"], "mode": "AND", "type": "permission" }
          ],
          "roles": [],
          "ignore": false
        }
      }
    }
  }
}
```

NextDoc4j UI 会读取 `x-nextdoc4j-security` 扩展字段，在调试时显示权限码输入框，并动态拼接权限码参数。

## 自定义权限框架

如果你使用的是非 Sa-Token 的鉴权框架，可实现 `NextDoc4jSecurityMetadataResolver` 接口：

```java
@Component
public class CustomSecurityResolver implements NextDoc4jSecurityMetadataResolver {

    @Override
    public void resolve(Class<?> beanType, Method method, NextDoc4jSecurityMetadata metadata) {
        CustomSecurity annotation = method.getAnnotation(CustomSecurity.class);
        if (annotation == null) {
            return;
        }
        metadata.addPermission(annotation.permissions(), "AND", "custom", null);
    }

    @Override
    public boolean supports(Class<?> beanType, Method method) {
        return method.isAnnotationPresent(CustomSecurity.class);
    }

    @Override
    public int getOrder() {
        return 200;
    }

    @Override
    public String getName() {
        return "CustomSecurityResolver";
    }
}
```
