# NextDoc4j 快速开始

::: warning  ⚠️ 重要说明
**版本要求：** NextDoc4j 目前仅支持 **Spring Boot 3.4.x** 版本，请确保您的项目版本符合要求。

**适配说明：** 目前基于 [ContiNew Admin](https://continew.top/) 项目进行开发适配，部分 OpenAPI 3.1.x 特性可能尚未完全支持。
:::

## 三步快速集成

### 第一步：添加 Maven 依赖

在您的 `pom.xml` 文件中添加以下依赖：

```xml
<dependency>
    <groupId>top.nextdoc4j</groupId>
    <artifactId>nextdoc4j-springboot3-starter</artifactId>
    <version>1.0.0</version>
</dependency>
```

### 第二步：配置启用

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

---

## 技术支持

如在使用过程中遇到问题，请通过以下方式寻求帮助：

### 🐛 问题反馈
- **Issue 提交**：https://gitee.com/nextdoc4j/nextdoc4j/issues
- **问题类型**：功能异常、数据解析错误、显示问题等

### 🔄 更新说明
项目持续更新中，建议关注最新版本以获得更好的兼容性和稳定性。

> **💪 我们致力于提供更好的 API 文档解决方案，您的反馈是我们改进的动力！**
