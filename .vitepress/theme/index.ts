import {h} from 'vue'
import Theme from 'vitepress/theme'
import './custom.css'

export default {
    ...Theme,
    Layout: () => {
        return h(Theme.Layout, null, {
        })
    },
    enhanceApp({app}) {
    }
}
