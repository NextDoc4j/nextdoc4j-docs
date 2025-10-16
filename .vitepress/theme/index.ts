import { h } from "vue";
import type { App } from "vue";
import Theme from "vitepress/theme";
import "./custom.css";

import "viewerjs/dist/viewer.min.css";
import imageViewer from "vitepress-plugin-image-viewer";

import TeamMembers from "./components/TeamMembers.vue";
import SponsorSection from "./components/SponsorSection.vue";
import { useRoute } from "vitepress";

export default {
  ...Theme,
  setup() {
    // 获取路由
    const router = useRoute();
    // 设置图片查看器
    imageViewer(router);
  },
  Layout: () => {
    return h(Theme.Layout, null, {});
  },
  enhanceApp({ app }: { app: App }) {
    app.component("TeamMembers", TeamMembers);
    app.component("SponsorSection", SponsorSection);
  },
};
