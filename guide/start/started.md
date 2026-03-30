# NextDoc4j 快速开始

::: warning  ⚠️ 版本要求

- **JDK：** `17+`
- **Spring Boot：** `3.5.x` 或 `4.0.x`
  :::

## 三步快速集成（单体服务）

### 第一步：添加 Maven 依赖（最简方式）

::: code-group

```xml [Spring Boot 3]
<dependency>
    <groupId>top.nextdoc4j</groupId>
    <artifactId>nextdoc4j-springboot3-starter</artifactId>
    <version>1.2.0</version>
</dependency>
```

```xml [Spring Boot 4]
<dependency>
    <groupId>top.nextdoc4j</groupId>
    <artifactId>nextdoc4j-springboot4-starter</artifactId>
    <version>1.2.0</version>
</dependency>
```

:::

::: details 推荐方式（可选）：使用 BOM 统一版本

```xml [Spring Boot 3]
<!-- 放到 dependencyManagement > dependencies 中 -->
<dependency>
    <groupId>top.nextdoc4j</groupId>
    <artifactId>nextdoc4j-bom-springboot3</artifactId>
    <version>1.2.0</version>
    <type>pom</type>
    <scope>import</scope>
</dependency>

<!-- 放到 dependencies 中 -->
<dependency>
    <groupId>top.nextdoc4j</groupId>
    <artifactId>nextdoc4j-springboot3-starter</artifactId>
</dependency>
```

```xml [Spring Boot 4]
<!-- 放到 dependencyManagement > dependencies 中 -->
<dependency>
    <groupId>top.nextdoc4j</groupId>
    <artifactId>nextdoc4j-bom-springboot4</artifactId>
    <version>1.2.0</version>
    <type>pom</type>
    <scope>import</scope>
</dependency>

<!-- 放到 dependencies 中 -->
<dependency>
    <groupId>top.nextdoc4j</groupId>
    <artifactId>nextdoc4j-springboot4-starter</artifactId>
</dependency>
```

:::

### 第二步：配置启用

在 `application.yml` 或 `application.properties` 中添加配置：

::: code-group

```yaml
nextdoc4j:
  enabled: true
```

```properties
nextdoc4j.enabled=true
```

:::

### 第三步：启动并访问

在浏览器中打开以下地址：

```text
http://localhost:8080/doc.html
```

> 💡 **提示**：请将 `8080` 替换为您实际的应用端口号。

## 网关场景快速引入

如果当前服务是 **Spring Cloud Gateway**，请使用网关 starter：

::: code-group

```xml [Spring Boot3]
<dependency>
    <groupId>top.nextdoc4j</groupId>
    <artifactId>nextdoc4j-springboot3-gateway-starter</artifactId>
</dependency>
```

```xml [Spring Boot4]
<dependency>
    <groupId>top.nextdoc4j</groupId>
    <artifactId>nextdoc4j-springboot4-gateway-starter</artifactId>
</dependency>
```

:::

然后在配置中启用：

```yaml
nextdoc4j:
  enabled: true
  gateway:
    auto-discovery: true
```

## 技术支持

如在使用过程中遇到问题或有改进建议，欢迎通过以下方式参与和反馈：

- **nextdoc4j**：核心后端模块
- **nextdoc4j-ui**：可视化前端界面
- **nextdoc4j-demo**：基于 SpringDoc 的使用示例，展示常见集成与扩展方式

::: warning  ⚠️ 提示
如文档或示例描述不清晰，您可以直接在示例仓库中提交 PR，
我们会在合并后第一时间同步适配接口。
:::

## 更新说明

NextDoc4j 项目持续迭代中，多个平台仓库保持同步更新。
建议关注最新版本以获得更好的兼容性和稳定性。
