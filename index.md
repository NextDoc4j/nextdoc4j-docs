---
layout: home

hero:
  name: "NextDoc4j"
  text: >
    现代化 API 文档 UI 工具

    全面替代 Swagger UI
  tagline: >
    专为 SpringDoc 和 OpenAPI 3 设计的现代化文档界面，更美观、更强大的开发体验。让 API 文档焕然一新。
  image:
    src: /logo/logo.png
    alt: NextDoc4j
  actions:
    - theme: brand
      text: "🚀 快速开始"
      link: /guide/
    - theme: alt
      text: "🎮 在线演示"
      link: https://demo.nextdoc4j.top/

features:
  - icon: 🎨
    title: "现代化设计"
    details: "基于现代 Web 技术栈构建，采用响应式设计理念。提供清晰直观的界面布局，支持暗色/亮色主题切换，为开发者带来舒适的文档浏览体验。"

  - icon: ✨
    title: "交互升级"
    details: "重新设计的用户交互流程，提供更直观的操作体验。改进了参数输入、请求测试、响应查看等核心功能，让 API 调试工作更加顺手"

  - icon: 🔧
    title: "深度集成"
    details: "专为 SpringDoc 深度优化，无缝替换 Swagger UI。提供完整的 Maven/Gradle 集成方案，一行配置即可升级您的 API 文档界面。"

  - icon: 🛠️
    title: "高度定制"
    details: "支持品牌logo定制、主题色彩配置、布局样式调整。提供丰富的配置选项，满足企业级项目的个性化需求。"
---

## 🌟 为什么选择 NextDoc4j？

**告别传统 Swagger UI 的局限性**，拥抱现代化的 API 文档体验。NextDoc4j 不仅仅是一个 UI 替换工具，更是为 Java 开发者量身定制的文档解决方案。

### ✨ 核心优势

<div class="advantages-grid">
  <div class="advantage-item">
    <div class="advantage-icon">🔄</div>
    <h4>零学习成本</h4>
    <p>完全兼容 SpringDoc 和 OpenAPI 3 规范，无缝迁移现有项目</p>
  </div>
  <div class="advantage-item">
    <div class="advantage-icon">🎯</div>
    <h4>企业级定制</h4>
    <p>支持品牌化定制和主题配置，满足企业级项目需求</p>
  </div>
  <div class="advantage-item">
    <div class="advantage-icon">👨‍💻</div>
    <h4>开发者友好</h4>
    <p>提供直观的 API 调试界面和便捷的参数测试功能</p>
  </div>
  <div class="advantage-item">
    <div class="advantage-icon">🌟</div>
    <h4>体验焕新</h4>
    <p>告别传统界面束缚，享受现代化的 API 文档浏览体验</p>
  </div>
</div>

## 🚀 三步即刻体验

::: warning 📋 版本要求
**NextDoc4j 1.3.0 支持 Spring Boot 3 / 4 双轨**  
推荐使用：`Spring Boot 3.5.x` 或 `Spring Boot 4.0.x`
:::

### 第一步：引入依赖（最简方式）

::: code-group

```xml [Spring Boot 3]
<dependency>
    <groupId>top.nextdoc4j</groupId>
    <artifactId>nextdoc4j-springboot3-starter</artifactId>
    <version>1.3.1</version>
</dependency>
```

```xml [Spring Boot 4]
<dependency>
    <groupId>top.nextdoc4j</groupId>
    <artifactId>nextdoc4j-springboot4-starter</artifactId>
    <version>1.3.1</version>
</dependency>
```

:::

::: details 推荐方式（可选）：使用 BOM 统一版本管理

```xml [Spring Boot 3]
<!-- 放到 dependencyManagement > dependencies 中 -->
<dependency>
    <groupId>top.nextdoc4j</groupId>
    <artifactId>nextdoc4j-bom-springboot3</artifactId>
    <version>1.3.1</version>
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
    <version>1.3.1</version>
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

### 第二步：添加配置

在 `application.yml` 或 `application.properties` 中添加配置：

::: code-group

```yaml [application.yml]
nextdoc4j:
  enabled: true # 是否启用 NextDoc4j，默认 false
```

```properties [application.properties]
nextdoc4j.enabled=true
```

:::

### 第三步：访问文档

启动应用后，在浏览器中访问：

```
http://localhost:端口/doc.html
```

::: tip 💡 提示

- 默认端口通常是 `8080`
- 完整地址示例：`http://localhost:8080/doc.html`
- 启用全局鉴权的项目需要配置路径白名单：/doc.html 和 /nextdoc/\*\*
:::

### 主界面预览

<div class="home-preview-grid">
  <figure>
    <img src="/images/screenshots/guide/detail-workbench.png" alt="NextDoc4j 接口详情工作台" />
    <figcaption>接口详情：参数、响应结构与多响应示例集中查看</figcaption>
  </figure>
  <figure>
    <img src="/images/screenshots/guide/debug-panel-placeholder.png" alt="NextDoc4j 在线调试面板" />
    <figcaption>在线调试：参数编辑、请求发送与响应结果同屏完成</figcaption>
  </figure>
</div>

::: details 🎯 界面功能说明

- **顶部 Tab 切换**：同一接口下通过 `接口详情` 与 `在线调试` 两个 Tab 快速切换
- **接口详情**：集中展示请求信息、认证方式、参数说明、响应结构与多响应示例
- **在线调试**：支持 Path / Query / Header / Cookie / Body 参数编辑、请求发送与响应查看
- **调试结果**：支持实时响应、响应头、实际请求等结果页签，便于定位接口问题
  :::

## 快速链接

<div class="home-quick-links">
  <section>
    <h3>社区</h3>
    <a href="/more/join-group">加入讨论群</a>
    <a href="/more/contribute">贡献指南</a>
    <a href="/more/team/team">社区团队</a>
  </section>
  <section>
    <h3>帮助</h3>
    <a href="/guide/start/started">快速开始</a>
    <a href="/more/faq">常见问题</a>
    <a href="/more/changelog">更新日志</a>
  </section>
  <section>
    <h3>关于</h3>
    <a href="/guide/">项目简介</a>
    <a href="/development/">开发指南</a>
    <a href="https://demo.nextdoc4j.top/" target="_blank" rel="noopener noreferrer">在线演示</a>
  </section>
</div>
