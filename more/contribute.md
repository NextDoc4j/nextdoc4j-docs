# 贡献指南

NextDoc4j 致力于为 Java 开发者提供强大而易用的文档生成工具。作为开源社区项目，我们的初衷是希望通过开源协作模式，提升技术透明度、放大集体智慧、共创优秀实践，为 Java 文档自动化生成提供持续助力。

我们诚挚邀请广大社区用户为 NextDoc4j 项目贡献力量，包括但不限于 Issue 排查、测试验证、代码开发与重构、文档完善等。每一份贡献，都是推动项目进步的重要力量。

::: tip 💡 提示
选择您熟悉的代码托管平台，提交您的贡献，让 NextDoc4j 更加强大！
:::
<div class="community-platforms">
  <div class="platform-row gitee-row">
    <div class="platform-info">
      <div class="platform-logo">
        <svg viewBox="0 0 24 24">
          <path d="M11.984 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.016 0zm6.09 5.333c.328 0 .593.266.592.593v1.482a.594.594 0 0 1-.593.592H9.777c-.982 0-1.778.796-1.778 1.778v5.63c0 .327.266.592.593.592h5.63c.982 0 1.778-.796 1.778-1.778v-.296a.593.593 0 0 0-.592-.593h-4.15a.592.592 0 0 1-.592-.592v-1.482a.593.593 0 0 1 .593-.592h6.815c.327 0 .593.265.593.592v3.408a4 4 0 0 1-4 4H5.926a.593.593 0 0 1-.593-.593V9.778a4.444 4.444 0 0 1 4.445-4.444h8.296z" fill="currentColor"/>
        </svg>
      </div>
      <span class="platform-title">Gitee</span>
    </div>
    <div class="platform-links">
      <a href="https://gitee.com/nextdoc4j/nextdoc4j" class="repo-button backend" target="_blank">
        <span class="button-text">后端</span>
        <span class="button-repo">nextdoc4j</span>
      </a>
      <a href="https://gitee.com/nextdoc4j/nextdoc4j-ui" class="repo-button frontend" target="_blank">
        <span class="button-text">前端</span>
        <span class="button-repo">nextdoc4j-ui</span>
      </a>
    </div>
  </div>
  <div class="platform-row github-row">
    <div class="platform-info">
      <div class="platform-logo">
        <svg viewBox="0 0 24 24">
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" fill="currentColor"/>
        </svg>
      </div>
      <span class="platform-title">GitHub</span>
    </div>
    <div class="platform-links">
      <a href="https://github.com/nextdoc4j/nextdoc4j" class="repo-button backend" target="_blank">
        <span class="button-text">后端</span>
        <span class="button-repo">nextdoc4j</span>
      </a>
      <a href="https://github.com/nextdoc4j/nextdoc4j-ui" class="repo-button frontend" target="_blank">
        <span class="button-text">前端</span>
        <span class="button-repo">nextdoc4j-ui</span>
      </a>
    </div>
  </div>
  <div class="platform-row gitcode-row">
    <div class="platform-info">
      <div class="platform-logo">
            <svg class="social-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <image
                  href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAA/UExURQAAANsgQNogP9sgPdogPtogP9ogPtogP9ogP9ogPtsgQN8gQNsgPtogPt0gPtggPdsgPtwgQNogPtogPv///3+ZkFoAAAATdFJOUwAgUHCfz9+/r4BAEO9gb3CQMM9sefpCAAAAAWJLR0QUkt/JNQAAAAd0SU1FB+gLFw4SAP63MKEAAAM4SURBVGje7VrdmqMwCFUT8+9sHN//XdfWWasBEhL124td7mbaniMHAoS26/4561d7BngQclTLjyltrPP3gQu5Qx9tlMMd6FYvtAXpLqH7KYf+I9fUHBRvQxF+c6OJggv/prD1ER8UG34TqjK0Ze1TMzU6ffHVOej0i61+bIB/meRFoh8b8dejx2Ho66KbBKKMP7fI/7FiMl3EX8aSPhfxlyVfmy7pv1k2V30tfpzBv2SOQNbB6/XshhqCryp49Vb7GziVCUDyVpMTTE+E05kml+L5zp1bZVDq/bcyYv7zIZES0CVvQt/qrB5f0EbgTd6xQwAzlFd+z3Vd0R+CGTSzCM4u0BHoAf7CnBfsIUiZSoQcAW4T3Bl0RlTEATZB109SaymyMZuWZol4hp2pO4dch+CrOx3Aqpy8Dvt3FbrVAfuwA51+2IHuaQfmpx0Yqk+xn6xcy8NmMlrh5tzQCGOcPWQev7UFHQXxXLJGofzFJxisRMIHyihUHL2Ruw4YPRZaUFvCxyhAodC0A7zZzxY+FEn8mYW/zlQnDcDL9ADrmARnEYAHdIy5HpxVAAT0wOL594chQ5ApRJws2kx9wgDOQZcx/hX3k0qyhqDrrRlZQgX6ocq3Xe8GYddylz0We67gczXbXmu82QkDCPZEArnHG3sBUSr1XpN9SlC5miG13l9Iq11sJEhPyS51yly6rpMmCQJQYVpXopYgAAXANhJE6jnTsxwaCb4pFKBRWx4l+X4o2UCj0BSFRIhjWwFFMjbgp6uIY0EAZ61BpPSed+7soKKG2noBbvLnR4TXzEoGgJ9Oh0gjYS9aV3OgRaSNHeu2kZ1LcNUEp08BCbgrb2TTHZCegs7MunwdRzfRmLzESrPwDYcz2IfweiwWwjQx+PeTxB8qEM+UG0le14v9GuP7QURNzxZk6Mp799ferji0RDodrm9+l3xDvINBZZPiOoMqTFVXGUr4VxnK+E1fcVXhdzWXgMQ0tzpObTJVTDt95VcJb3nq1pTVTvCbxx6JGgpGWUd0YlM0wW9CMVI2mEs74j7mS6wW13+dsPYVnETF6bbfPngnrNHjuxesPUHLOM33/bDivz1pvwFpJhpiuTDDXwAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyNC0xMS0yM1QxNDoxODowMCswMDowMJCjfg0AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjQtMTEtMjNUMTQ6MTg6MDArMDA6MDDh/saxAAAAKHRFWHRkYXRlOnRpbWVzdGFtcAAyMDI0LTExLTIzVDE0OjE4OjAwKzAwOjAwtuvnbgAAAABJRU5ErkJggg=="
                  width="24"
                  height="24"
              />
            </svg>
      </div>
      <span class="platform-title">GitCode</span>
    </div>
    <div class="platform-links">
      <a href="https://gitcode.com/NextDoc4j/nextdoc4j" class="repo-button backend" target="_blank">
        <span class="button-text">后端</span>
        <span class="button-repo">nextdoc4j</span>
      </a>
      <a href="https://gitcode.com/NextDoc4j/nextdoc4j-ui" class="repo-button frontend" target="_blank">
        <span class="button-text">前端</span>
        <span class="button-repo">nextdoc4j-ui</span>
      </a>
    </div>
  </div>
</div>

## 贡献必读

如果您是开源贡献新手，建议先阅读以下文档，了解参与开源项目的流程与最佳实践：

| 文档                                                                                       | 简介                              |
|------------------------------------------------------------------------------------------|---------------------------------|
| [《开源项目礼节》](https://developer.mozilla.org/zh-CN/docs/MDN/Community/Open_source_etiquette) | 涵盖开源协作中的最佳实践，帮助您在社区中获得尊重并保持高效协作 |
| [《如何为开源做贡献》](https://opensource.guide/zh-hans/how-to-contribute/)                        | 专为初学者准备的开源贡献指南，从基础知识到实践步骤一应俱全   |

## 分支说明

NextDoc4j 项目采用清晰的分支策略，确保开发与维护有序进行。提交 PR 前，请确认目标分支是否处于活跃维护状态：

| 分支     | 说明                                                 |
|--------|----------------------------------------------------|
| master | 开发分支，用于下个大版本的 SNAPSHOT 开发，接受新功能或功能优化 PR            |
| x.x.x  | 维护分支，用于特定版本（如 vx.x.x）的 bug 修复，仅接受已有功能的修复 PR，不接受新功能 |

## 贡献代码

若您希望提交新功能或优化现有代码，请遵循以下步骤：

1. 在 GitHub 上将项目 fork 到您的个人仓库
2. 将 fork 的项目克隆到本地开发环境
3. 基于当前维护的分支（如 dev）创建新分支（如 feat/newFeature），请勿直接修改源分支（源分支仅做同步 NextDoc4j 最新代码用）
4. 在新分支上进行代码修改，完成后提交并 push 到您的远程仓库
5. 在 GitHub 上创建 pull request (PR)，选择正确的源分支和目标分支，按模板填写说明信息（参考已合并的 PR 可提高合并率）
6. 提交 PR 后，系统会提示签署 CLA（贡献者协议）。请确保 commit 使用的邮箱与 GitHub 绑定邮箱一致（如果不一致，可以在本地通过 `git reset --soft HEAD~1` 回退，然后使用正确邮箱重新提交，最后 `git push -f` 即可，不需要重新创建 PR），然后使用该邮箱签署即可
7. 耐心等待维护者审核并合并您的 PR（建议通过 Issue 或讨论区进行沟通）
8. PR 合并后，下次贡献前请先同步最新代码，再重复步骤 3 开始

以下是向 NextDoc4j 项目提交 PR 的简化流程：

```
1. your-org/nextdoc4j -> fork -> your-github/nextdoc4j
2. git clone your-github/nextdoc4j.git
3. git checkout -b feat/newFeature
4. 在 feat/newFeature 分支开发并 git push -u origin feat/newFeature
5. 提交 PR: your-github/nextdoc4j:feat/newFeature -> your-org/nextdoc4j:master
6. 阅读并签署 CLA
7. PR 合并后，git branch -d feat/newFeature
8. 下次：从 your-org/nextdoc4j 同步最新代码到 your-github/nextdoc4j，然后重复步骤 3...
```

::: warning 温馨提示 为了确保项目质量和协作效率，请注意以下事项：

1. **代码规范**：
    - **nextdoc4j-后端**：代码和配置文件请参考已有风格，遵循清晰的结构与命名规范，提供完善的注释（包括 JavaDoc 和参数示例），Java 代码请符合阿里巴巴《Java开发手册》中的代码规范
    - **nextdoc4j-前端**：项目基于 [Vue Vben Admin](https://github.com/vbenjs/vue-vben-admin) 进行二次开发，请遵循以下规范：
        - 使用 TypeScript 进行开发，确保类型安全
        - 遵循 Vue 3 Composition API 最佳实践
        - 组件命名采用 PascalCase，文件名使用 kebab-case
        - 样式使用 Tailwind CSS，避免内联样式
        - 请参考项目中已有的组件结构和编码风格
2. **代码格式化**：
    - **nextdoc4j-后端**：提交代码前请关闭所有代码窗口，执行 `mvn compile` 命令进行代码格式化（NextDoc4j 项目编译时会自动执行插件进行代码格式修正）。编译通过后请勿再次打开代码窗口，避免不同 IDE 配置导致的格式差异
    - **nextdoc4j-前端**：项目已配置 ESLint 和 Prettier，提交前请执行 `npm run lint:fix` 和 `npm run format` 进行代码格式化
3. **提交规范**：请按照 [Angular 提交规范](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-angular) 编写 commit message，格式如：
    - `feat: 添加新的文档生成器`
    - `fix: 修复注解解析问题`
    - `style: 优化前端页面布局`
    - `refactor: 重构用户管理模块` 
:::
