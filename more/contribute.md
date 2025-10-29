# 贡献指南

NextDoc4j 致力于为 Java 开发者提供强大而易用的文档生成工具。作为开源社区项目，我们的初衷是希望通过开源协作模式，提升技术透明度、放大集体智慧、共创优秀实践，为 Java 文档自动化生成提供持续助力。

我们诚挚邀请广大社区用户为 NextDoc4j 项目贡献力量，包括但不限于 Issue 排查、测试验证、代码开发与重构、文档完善等。每一份贡献，都是推动项目进步的重要力量。

::: tip 💡 提示
选择您熟悉的代码托管平台，提交您的贡献，让 NextDoc4j 更加强大！
:::
<CommunityPlatforms></CommunityPlatforms>

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
