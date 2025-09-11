# 常见问题 FAQ

- [Spring Boot 版本兼容性](#spring-boot-版本兼容性)

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
