# 🚀 NextDoc4j 快速开始

## 📋 版本要求

> ⚠️ **重要提示**：NextDoc4j 目前仅支持 **Spring Boot 3.4.x** 版本，请确保您的项目版本符合要求。

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

**方式一：使用 application.yml**

```yaml
nextdoc4j:
  enabled: true  # 是否启用 NextDoc4j，默认为 false
```

**方式二：使用 application.properties**

```properties
nextdoc4j.enabled=true
```

### 第三步：启动并访问

1. **启动应用**
   ```bash
   mvn spring-boot:run
   ```

2. **访问文档页面**

   在浏览器中打开以下地址：
   ```
   http://localhost:8080/doc.html
   ```

   > 💡 **提示**：请将 `8080` 替换为您实际的应用端口号

## 🎉 恭喜

到这里，您已经成功集成了 NextDoc4j！现在可以享受现代化的API文档体验了。

如需了解更多高级功能和配置选项，请查阅详细文档或访问官方仓库。
