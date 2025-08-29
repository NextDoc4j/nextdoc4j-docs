import {h} from 'vue'
import Theme from 'vitepress/theme'
import './custom.css'

// 导入自定义组件
import TeamMembers from './components/TeamMembers.vue'
import SponsorSection from './components/SponsorSection.vue'

export default {
    ...Theme,
    Layout: () => {
        return h(Theme.Layout, null, {
        })
    },
    enhanceApp({app}) {
        // 注册团队成员组件
        app.component('TeamMembers', TeamMembers)
        // 注册赞助组件
        app.component('SponsorSection', SponsorSection)
    }
}
