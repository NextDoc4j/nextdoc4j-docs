# 🔐 NextDoc4j 简单认证配置

为您的 API 文档添加密码保护，防止未授权访问。支持自定义密码和自动生成密码两种模式。

## 快速开始

### 启用认证（使用默认密码）
```yaml
nextdoc4j:
  auth:
    enabled: true
```
> 系统会自动生成 UUID 密码，并在启动日志中显示

### 启用认证（使用自定义密码）
```yaml
nextdoc4j:
  auth:
    enabled: true
    password: "my_secure_password_2025"
```

### 认证效果
启用后，用户访问文档需要先通过登录验证：

![NextDoc4j 登录界面](/public/images/screenshots/guide/login.png)


## 配置参数

| 参数         | 类型      | 默认值     | 说明        |
|------------|---------|---------|-----------|
| `enabled`  | boolean | `false` | 是否启用认证功能  |
| `password` | string  | `自动生成`  | 访问密码，可选配置 |

**密码生成规则**：
- 未设置 `password` 时，系统自动生成 UUID 格式密码
- 启动时会在控制台日志中输出当前使用的密码
- 认证信息存储在浏览器中，项目重启后需重新登录
