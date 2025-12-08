# 常见问题 FAQ

- [Spring Boot 版本兼容性](#spring-boot-版本兼容性)
- [实体对象参数在文档中显示为空](#实体对象参数在文档中显示为空)
- [入参展示不稳定/部分入参不显示](#入参展示不稳定/部分入参不显示)

## Spring Boot 版本兼容性

 启动时 ClassNotFoundException 错误

::: danger 问题现象
启动 Spring Boot 应用时出现以下错误：

```
java.lang.ClassNotFoundException: org.springframework.web.servlet.resource.LiteWebJarsResourceResolver
```
:::

完整错误信息

```log
Error starting ApplicationContext. To display the condition evaluation report re-run your application with 'debug' enabled.
2025-09-11 10:32:59 ERROR [main] org.springframework.boot.SpringApplication - Application run failed
java.lang.IllegalStateException: Error processing condition on org.springdoc.webmvc.ui.SwaggerConfig.springWebProvider
...
Caused by: java.lang.ClassNotFoundException: org.springframework.web.servlet.resource.LiteWebJarsResourceResolver
```

问题原因

::: warning 版本兼容性问题
这是由于 **Spring Boot 版本过低** 导致的兼容性问题。

`LiteWebJarsResourceResolver` 是 Spring Boot 3.4.x 引入的新特性，NextDoc4j 依赖此特性来优化资源加载性能。
:::

版本要求

| 组件              | 最低版本    | 推荐版本       | 备注       |
|-----------------|---------|------------|----------|
| **Spring Boot** | `3.4.0` | `3.4.x 最新` | 🔴 硬性要求  |
| **SpringDoc**   | `2.8.0` | `2.8.11+`  | ✅ 推荐     |
| **Java**        | `17`    | `21+`      | ✅ LTS 版本 |

::: tip 版本兼容性说明
- ✅ Spring Boot 3.4.x + SpringDoc 2.8.x = 完全兼容
- ❌ Spring Boot 3.3.x + SpringDoc 2.8.x = 不兼容
- ❌ 无法通过配置或依赖调整来规避版本要求
  :::

## 实体对象参数在文档中显示为空

接口参数是实体对象,但在 API 文档中不显示对象内的属性

::: danger 问题现象
定义了一个接口,入参是自定义对象:

```java
@PostMapping("/user/save")
public Result saveUser(UserDTO userDTO) {
    // ...
}
```

但在 API 文档中,参数列表为空或只显示对象名称,看不到 `UserDTO` 内部的字段(如 `name`、`age` 等)。
:::

**问题原因**

::: warning 缺少平铺配置
SpringDoc 默认不会自动展开对象参数的内部字段。需要通过配置或注解明确告知框架"将对象参数平铺展示"。
:::

**解决方案**

### 方式一:全局配置(推荐)

在 `application.yml` 或 `application.properties` 中添加配置：

::: code-group

```yml
springdoc:
  # 设置对象型参数的展示形式
  # true: 将对象内的属性平铺展示(推荐)
  # false: 对象参数嵌套显示(默认)
  default-flat-param-object: true
```

```properties
# 设置对象型参数的展示形式
# true: 将对象内的属性平铺展示(推荐)
# false: 对象参数嵌套显示(默认)
springdoc.default-flat-param-object=true
```

:::

::: tip 适用场景
- 项目中大部分接口都使用对象作为参数
- 希望统一所有接口的文档展示风格
- 避免在每个 DTO 类上重复添加注解
  :::

### 方式二:单个类配置

如果只想对特定的 DTO 类生效,可以在类或者接口上添加 `@ParameterObject` 注解:

```java
# 类上添加注解
import org.springdoc.core.annotations.ParameterObject;

@ParameterObject  // 👈 添加此注解
public class UserDTO {
    private String name;
    private Integer age;
    private String email;
    // getter/setter...
}

# 接口上添加注解
@PostMapping("/user/save")
public Result saveUser(@ParameterObject UserDTO userDTO) {
    // ...
}
```

::: tip 适用场景
- 只有少数接口需要平铺显示
- 不同 DTO 需要不同的展示方式
- 更精细的控制粒度
  :::

## 入参展示不稳定/部分入参不显示
### 问题现象

在定义接口后，访问 SpringDoc / Swagger UI 文档时，会出现以下异常情况：

* 入参列表 **不显示**
* 入参展示 **不全**
* 入参展示 **偶尔正常、偶尔缺失**（表现不稳定）

---

### 问题原因

Java 默认不会保留方法参数名

Java 编译器 **默认不会**在 `.class` 文件中保存方法参数名。
要保留参数名，必须显式开启：

```
-parameters
```

SpringDoc 在生成 API 文档时，需要从字节码中读取以下内容：

* 方法参数的真实名称
* `@RequestParam`
* `@RequestBody`
* `@Parameter`
* `@PathVariable`
  等参数注解

➡️ **如果参数名未保留，SpringDoc 将无法正确推断参数，导致展示异常或不稳定。**

> ⚠️ Spring Boot 2.2+ 官方明确要求：
> 若要正确展示方法入参信息，必须确保编译时加入 `-parameters`。

---

### 解决方案

在 `maven-compiler-plugin` 中添加 `-parameters`，确保编译时保留参数名：

```xml
<!-- 编译插件 -->
<plugin>
    <groupId>org.apache.maven.plugins</groupId>
    <artifactId>maven-compiler-plugin</artifactId>
    <configuration>
        <encoding>${project.build.sourceEncoding}</encoding>
        <!-- 保留方法参数名以确保 SpringDoc 入参正常展示 -->
        <compilerArgument>-parameters</compilerArgument>
    </configuration>
</plugin>
```
