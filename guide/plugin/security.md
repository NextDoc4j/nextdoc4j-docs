# NextDoc4j 认证展示插件使用手册

认证展示插件是 nextdoc4j 的核心插件之一，用于在 API 文档中展示权限校验信息。通过解析 Sa-Token 等权限框架的注解，自动生成权限和角色的可视化展示，提升 API 文档的可读性和开发效率。

## 快速开始

### 1. 引入依赖

```xml
<!-- 核心模块（必须） -->
<dependency>
    <groupId>top.nextdoc4j</groupId>
    <artifactId>nextdoc4j-plugin-security-core</artifactId>
    <version>${nextdoc4j.version}</version>
</dependency>

        <!-- Sa-Token 集成模块（可选，根据使用的权限框架选择） -->
<dependency>
<groupId>top.nextdoc4j</groupId>
<artifactId>nextdoc4j-plugin-security-satoken</artifactId>
<version>${nextdoc4j.version}</version>
</dependency>
```

### 2. 在 `application.yml` 中配置：

```yaml
nextdoc4j:
  plugin:
    security:
      enabled: true
```

### 3. 在 Controller 中使用权限注解

```java
@RestController
public class UserController {

    @SaCheckPermission("user:read")
    @GetMapping("/api/user/{id}")
    public User getUserById(@PathVariable Long id) {
        // 查询用户信息
    }

    @SaCheckRole("admin")
    @PostMapping("/api/user")
    public User createUser(@RequestBody User user) {
        // 创建用户
    }

    @SaCheckPermission(value = {"user:update", "user:delete"}, mode = SaMode.OR)
    @PutMapping("/api/user/{id}")
    public User updateUser(@PathVariable Long id, @RequestBody User user) {
        // 更新用户
    }

    @SaIgnore
    @GetMapping("/api/user/public")
    public User getPublicUser() {
        // 公开接口，无需权限校验
    }
}
```

## 模块结构

### 核心模块 (nextdoc4j-plugin-security-core)

核心模块提供统一的权限信息展示能力，包括：

- **配置管理**：`NextDoc4jSecurityProperties` - 控制插件启用状态
- **数据模型**：`NextDoc4jSecurityMetadata` - 存储权限和角色信息
- **扩展接口**：`NextDoc4jSecurityMetadataResolver` - 支持自定义权限框架
- **自动配置**：`NextDoc4jSecurityAutoConfiguration` - 统一管理权限解析器

### Sa-Token 模块 (nextdoc4j-plugin-security-satoken)

Sa-Token 集成模块提供对 Sa-Token 注解的完整支持：

- **注解解析器**：`NextDoc4jSaTokenAnnotationResolver` - 解析 Sa-Token 权限注解
- **路径排除器**：`NextDoc4JSaTokenExcluderNextDoc4j` - 自动识别并排除忽略校验的路径
- **常量定义**：`NextDoc4jSaTokenConstant` - 存储 Sa-Token 注解类引用

## 配置说明

### 基本配置

```yaml
nextdoc4j:
  plugin:
    security:
      enabled: true  # 是否启用安全认证展示插件
```

| 配置项     | 类型      | 默认值  | 说明           |
|---------|---------|------|--------------|
| enabled | boolean | true | 是否启用安全认证展示插件 |

## 使用示例

### 基础权限校验

#### 单个权限校验

```java
@RestController
public class OrderController {

    @SaCheckPermission("order:read")
    @GetMapping("/api/order/{id}")
    public Order getOrder(@PathVariable Long id) {
        // 需要 order:read 权限
        return orderService.getById(id);
    }
}
```

#### 角色校验

```java
@RestController
public class AdminController {

    @SaCheckRole("admin")
    @GetMapping("/api/admin/users")
    public List<User> getAllUsers() {
        // 需要 admin 角色
        return userService.list();
    }

    @SaCheckRole({"manager", "supervisor"})
    @GetMapping("/api/admin/reports")
    public List<Report> getReports() {
        // 需要 manager 或 supervisor 角色（AND 模式）
        return reportService.list();
    }
}
```

## 生成的文档效果

配置完成后，访问 nextdoc4j 将看到增强的权限文档：

![security-plugin-1.png](../../public/images/screenshots/guide/security-plugin-1.png)
*▲ @SaCheckPermission 注解展示*

![security-plugin-2.png](../../public/images/screenshots/guide/security-plugin-2.png)
*▲ @SaCheckRole 注解展示*

### OpenAPI 扩展字段

权限信息通过 OpenAPI 扩展字段 `x-nextdoc4j-security` 展示：

```json
{
  "paths": {
    "/api/user/{id}": {
      "get": {
        "summary": "获取用户信息",
        "operationId": "getUserById",
        "x-nextdoc4j-security": {
          "permissions": [
            {
              "values": ["user:read"],
              "mode": "AND",
              "type": "permission"
            }
          ],
          "roles": [],
          "ignore": false
        }
      }
    },
    "/api/admin/users": {
      "get": {
        "summary": "获取所有用户",
        "operationId": "getAllUsers",
        "x-nextdoc4j-security": {
          "permissions": [],
          "roles": [
            {
              "values": ["admin"],
              "mode": "AND",
              "type": "role"
            }
          ],
          "ignore": false
        }
      }
    },
    "/api/public/info": {
      "get": {
        "summary": "获取公开信息",
        "operationId": "getPublicInfo",
        "x-nextdoc4j-security": {
          "ignore": true
        }
      }
    }
  }
}
```

## 支持的权限框架

### Sa-Token

nextdoc4j 对 Sa-Token 提供了完整的支持，包括：

| 注解                   | 说明   | 示例                                 |
|----------------------|------|------------------------------------|
| `@SaCheckPermission` | 权限校验 | ("user:read `@SaCheckPermission")` |
| `@SaCheckRole`       | 角色校验 | `@SaCheckRole("admin")`            |
| `@SaIgnore`          | 忽略校验 | `@SaIgnore`                        |

#### 注解属性说明

**@SaCheckPermission / @SaCheckRole**

- `value`: 权限或角色值，支持数组
- `mode`: 校验模式（`SaMode.AND` / `SaMode.OR`），默认 AND
- `type`: 类型说明，默认为空
- `orRole`: 或角色数组（仅权限注解支持）

#### 支持的校验模式

| 模式           | 说明       | 示例                               |
|--------------|----------|----------------------------------|
| `SaMode.AND` | 所有条件必须满足 | `["user:read", "user:update"]`   |
| `SaMode.OR`  | 满足任一条件即可 | `["user:delete", "user:update"]` |

## 高级特性

### 自定义权限框架

nextdoc4j 提供了扩展接口，允许集成其他权限框架：

```java
@Component
public class CustomSecurityResolver implements NextDoc4jSecurityMetadataResolver {

    @Override
    public void resolve(HandlerMethod handlerMethod, Operation operation, NextDoc4jSecurityMetadata metadata) {
        // 解析自定义注解
        CustomSecurity annotation = handlerMethod.getMethodAnnotation(CustomSecurity.class);
        if (annotation != null) {
            metadata.addPermission(annotation.permissions(), "AND", "custom", annotation.orRoles());
        }
    }

    @Override
    public boolean supports(HandlerMethod handlerMethod) {
        // 判断是否支持处理该方法
        return handlerMethod.hasMethodAnnotation(CustomSecurity.class);
    }

    @Override
    public int getOrder() {
        // 解析器优先级，数值越小优先级越高
        return 200;
    }

    @Override
    public String getName() {
        return "CustomSecurityResolver";
    }
}
```

### 全局认证展示路径排除器

自动识别标记为 `@SaIgnore` 的接口，并从 OpenAPI 文档中排除全局请求头：

```java
@RestController
public class HealthController {

    @SaIgnore
    @GetMapping("/actuator/health")
    public Health health() {
        // 自动排除此路径
        return healthService.get();
    }
}
```

生成的 OpenAPI 文档中，该接口的在线调试请求头将被完全排除。

#### 自定义全局认证展示路径排除器

如果需要自定义排除逻辑，可以实现 `NextDoc4jPathExcluder` 接口：

```java
@Component
public class CustomPathExcluder implements NextDoc4jPathExcluder {

    @Override
    public Set<String> getExcludedPaths() {
        Set<String> paths = new HashSet<>();
        paths.add("/user/**");
        paths.add("/user/add");
        return paths;
    }

    @Override
    public int getOrder() {
        // 优先级，数值越小优先级越高
        return 200;
    }
}
```

::: tip 排除器执行顺序
- 数值越小优先级越高
- Sa-Token 模块的排除器优先级为 100
- 自定义排除器建议使用 200 及以上的数值
  :::


### 注解优先级

- **方法级别注解** > **类级别注解**
- **@SaIgnore** 优先级最高，可以覆盖其他所有注解

### 错误处理

- 注解解析过程中出现的异常会被捕获并忽略
- 单个解析器的异常不会影响其他解析器的执行
- 解析失败的方法将不会显示权限信息，但不会导致文档生成失败
