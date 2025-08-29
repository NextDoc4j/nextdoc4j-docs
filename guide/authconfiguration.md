# 🔐 NextDoc4j 简单认证配置

NextDoc4j 支持密码认证，保护您的API文档不被未授权访问。

## 认证配置项

| 配置项                       | 类型      | 默认值       | 说明                |
|---------------------------|---------|-----------|-------------------|
| `nextdoc4j.auth.enabled`  | boolean | `false`   | 是否启用认证功能          |
| `nextdoc4j.auth.password` | string  | `UUID 密码` | 访问密码非必填,不填则默认生成密码 |

## 配置示例

```yaml
nextdoc4j:
  auth:
    enabled: true           # 启用认证
    password: nextdoc2431   # 设置访问密码
```

## 认证功能详解

### 启用认证
当设置 `enabled: true` 时，用户访问文档前必须通过身份验证。

### 密码设置
- **自定义密码**：通过 `password` 配置项设置
- **自动生成**：不设置 `password` 时系统自动生成 UUID 密码
- **查看密码**：系统启动时会在日志中显示当前使用的密码

## 认证流程

启用认证后，用户首次访问文档时会看到登录界面：

![NextDoc4j 登录界面](/public/images/screenshots/guide/login.png)

*▲ NextDoc4j 认证登录界面*

### 认证步骤
1. 用户访问文档 URL
2. 系统检测认证状态
3. 未认证用户跳转到登录页面
4. 输入正确密码后进入文档界面
5. 认证信息保存到浏览器

## 不同环境的认证配置

### 开发环境
```yaml
nextdoc4j:
  auth:
    enabled: false          # 开发时可关闭认证
    # password: dev123       # 或使用简单密码
```

### 测试环境
```yaml
nextdoc4j:
  auth:
    enabled: true
    password: test_env_2024  # 中等强度密码
```

### 生产环境
```yaml
nextdoc4j:
  auth:
    enabled: true
    password: Prod_Secure_Pass_2024!  # 强密码
```

## 安全建议

> 🔒 **安全提示**：
> - 请使用强密码，避免使用简单或默认密码
> - 生产环境中建议定期更换访问密码
> - 认证信息会存储到浏览器中，重启项目后需重新认证
> - 建议在生产环境中始终启用认证功能

### 强密码规范
- 长度至少 12 位字符
- 包含大小写字母、数字和特殊字符
- 避免使用常见单词或个人信息
- 定期更换密码

### 安全注意事项
- 不要在代码中硬编码密码
- 使用环境变量或配置文件管理密码
- 定期审查访问日志
- 及时更新认证配置
