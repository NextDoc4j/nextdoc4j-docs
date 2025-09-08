# 🚀 NextDoc4j 快速开始

## 📋 版本要求
::: warning  ⚠️
 NextDoc4j 目前仅支持 **Spring Boot 3.4.x** 版本，请确保您的项目版本符合要求。
:::

## 🛠️ 三步快速集成

### 第一步：添加 Maven 依赖

在您的 `pom.xml` 文件中添加以下依赖：

```xml
<dependency>
    <groupId>dw.nextdoc4j</groupId>
    <artifactId>nextdoc4j-springboot3-starter</artifactId>
    <version>1.0.0</version>
</dependency>
```

### 第二步：配置启用

在您的配置文件中启用 NextDoc4j：

在 `application.yml` 或 `application.properties` 中添加配置：

::: code-group

```yaml [application.yml]
nextdoc4j:
  enabled: true  # 是否启用 NextDoc4j，默认 false
```

```properties [application.properties]
nextdoc4j.enabled=true
```

:::

### 第三步：启动并访问

   在浏览器中打开以下地址：
   ```
   http://localhost:8080/doc.html
   ```

   > 💡 **提示**：请将 `8080` 替换为您实际的应用端口号
   

## 📋 重要提示
::: tip 💡 提示
### 适配基础
目前所有的 SpringDoc 和 OpenAPI 3.x 适配功能均基于作者维护的另一个项目 [ContiNew](https://continew.top/) 进行开发和适配。

### 问题反馈
如果您在使用过程中遇到以下问题：
- 数据无法正确解析
- 数据不显示或展示异常
- 其他功能性问题

请及时提交 Issue 到项目仓库：
**📍 Issue 提交地址：** https://gitee.com/nextdoc4j/nextdoc4j/issues

### 技术支持
我们会及时响应并处理您提交的问题，以确保 OpenAPI 3.x 适配功能的稳定性和可用性。

---

> **注意：** 为了更好地解决问题，建议在提交 Issue 时详细描述遇到的问题、使用环境和重现步骤。
:::
