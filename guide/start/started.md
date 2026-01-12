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
    <version>1.1.6</version>
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

如在使用过程中遇到问题或有改进建议，欢迎通过以下方式参与和反馈：

### 问题反馈

NextDoc4j 在 **GitHub、Gitee、GitCode** 三大平台均有同步维护的仓库，  
您可以在任意平台的对应仓库中提交 **Issue** 进行反馈，或通过 **Pull Request** 提交修复和优化。

项目主要包含以下仓库：

- **nextdoc4j**：核心后端模块
- **nextdoc4j-ui**：可视化前端界面
- **nextdoc4j-demo**：基于 SpringDoc 的使用示例，展示常见集成与扩展方式

::: warning  ⚠️ 提示
如文档或示例描述不清晰，您可以直接在示例仓库中提交 PR,
我们会在合并后第一时间同步适配接口。
:::



---

### 更新说明

NextDoc4j 项目持续迭代中，多个平台仓库保持同步更新。  
建议关注最新版本以获得更好的兼容性和稳定性。

> 💪 我们致力于提供更高效、更智能的 API 文档解决方案，  
> 您的反馈与支持是我们不断前进的动力！

