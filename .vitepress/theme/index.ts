import {h} from 'vue'
import type { App } from 'vue'
import Theme from 'vitepress/theme'
import './custom.css'

import TeamMembers from './components/TeamMembers.vue'
import SponsorSection from './components/SponsorSection.vue'

export default {
    ...Theme,
    Layout: () => {
        return h(Theme.Layout, null, {
        })
    },
    enhanceApp({app}: {app: App}) {
        app.component('TeamMembers', TeamMembers)
        app.component('SponsorSection', SponsorSection)
    }
}
