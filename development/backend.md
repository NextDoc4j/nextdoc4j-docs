# NextDoc4j 后端开发指南
## 环境要求

### 必需环境
- **JDK**: 17 或更高版本
- **Maven**: 3.8.x 或更高版本
- **Git**: 用于版本控制

### 推荐开发工具
- IntelliJ IDEA 2023.x 或更高版本
- Visual Studio Code (配合 Java 扩展包)

## 项目架构

NextDoc4j 采用多模块 Maven 项目结构，主要包含以下模块：

```
nextdoc4j/
├── nextdoc4j-bom/                 # BOM 依赖管理
├── nextdoc4j-core/                # 核心模块
├── nextdoc4j-dependencies/        # 依赖版本管理
├── nextdoc4j-plugin/              # 插件模块
├── nextdoc4j-springboot3-starter/ # Spring Boot 自动配置
└── nextdoc4j-ui/                  # 前端 UI 资源
```

## 模块详细说明

### 1. nextdoc4j-bom
**作用**: 提供统一的依赖版本管理（Bill of Materials）

**主要功能**:
- 统一管理项目所有模块的版本
- 简化依赖声明
- 避免版本冲突

### 2. nextdoc4j-core
**作用**: 项目核心功能模块

**主要包结构**:
```
dw.nextdoc4j.core/
├── configuration/          # 配置相关
│   ├── extension/         # 扩展配置
│   │   ├── NextDoc4jBasicAuth.java    # 基础认证配置
│   │   ├── NextDoc4jBrand.java        # 品牌配置
│   │   └── NextDoc4jMarkdown.java     # Markdown 配置
│   ├── NextDoc4jExtension.java        # 扩展配置主类
│   └── NextDoc4jProperties.java       # 属性配置
├── constant/              # 常量定义
│   ├── NextDoc4jBaseConstant.java     # 基础常量
│   └── NextDoc4jFilterConstant.java   # 过滤器常量
├── extension/             # 扩展功能
│   ├── NextDoc4jExtensionOpenApiCustomizer.java  # OpenAPI 定制器
│   └── NextDoc4jExtensionResolver.java           # 扩展解析器
└── util/                 # 工具类
    └── NextDoc4jResourceUtils.java    # 资源工具类
```

### 3. nextdoc4j-dependencies
**作用**: 管理第三方依赖版本

**主要功能**:
- 集中管理外部依赖版本
- 提供依赖版本升级的统一入口

### 4. nextdoc4j-plugin
**作用**: 插件功能支持

**子模块**:
- `nextdoc4j-plugin-enums`: 枚举插件支持

**主要包结构**:
```
dw.nextdoc4j.enums/
├── core/                  # 核心枚举
│   └── BaseEnum.java     # 基础枚举接口
├── handler/              # 处理器
│   └── BaseEnumParameterHandler.java  # 枚举参数处理器
└── util/                 # 工具类
    └── EnumsUtils.java   # 枚举工具类
```

### 5. nextdoc4j-springboot3-starter
**作用**: Spring Boot 3 自动配置模块

**主要包结构**:
```
dw.nextdoc4j.springboot/
├── configuration/         # 自动配置
│   ├── NextDoc4jAutoConfiguration.java      # 主配置类
│   └── NextDoc4jFilterConfiguration.java    # 过滤器配置
└── filter/               # 过滤器
    ├── NextDoc4jBasicAuthFilter.java        # 基础认证过滤器
    ├── NextDoc4jProductionFilter.java       # 生产环境过滤器
    └── NextDoc4jResourceFilter.java         # 资源过滤器
```

### 6. nextdoc4j-ui
**作用**: 前端 UI 资源模块

**资源结构**:
```
resources/
├── doc.html              # 文档页面
├── doclogin.html         # 登录页面
└── nextdoc/             # UI 资源
    ├── css/             # 样式文件
    ├── js/              # JavaScript 文件
    ├── assets/          # 静态资源
    └── ttf/             # 字体文件
```

## 开发环境搭建

### 1. 克隆项目
```bash
git clone <项目地址>
cd nextdoc4j
```

### 2. 验证环境
```bash
# 检查 Java 版本
java -version

# 检查 Maven 版本
mvn -version
```

### 3. 构建项目
```bash
# 清理并编译
mvn clean compile

# 运行测试
mvn test

# 打包
mvn clean package
```


---

本开发指南将根据项目发展持续更新，欢迎贡献和建议！
