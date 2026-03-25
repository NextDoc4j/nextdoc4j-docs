import { h } from "vue";
import type { App } from "vue";
import Theme from "vitepress/theme";
import "./custom.css";
import "photoswipe/style.css";

import TeamMembers from "./components/TeamMembers.vue";
import SponsorSection from "./components/SponsorSection.vue";
import CommunityPlatforms from "./components/CommunityPlatforms.vue";

let removeImageClickListener: (() => void) | null = null;

const getVisibleImages = () => {
  if (typeof window === "undefined") {
    return [] as HTMLImageElement[];
  }
  return Array.from(
    document.querySelectorAll<HTMLImageElement>(".vp-doc img:not(.no-zoom)")
  ).filter((img) => img.offsetParent !== null);
};

const getImageSize = (img: HTMLImageElement) => {
  const width =
    img.naturalWidth ||
    Number(img.getAttribute("width")) ||
    Math.max(img.clientWidth, 800);
  const height =
    img.naturalHeight ||
    Number(img.getAttribute("height")) ||
    Math.max(img.clientHeight, 600);
  return { width, height };
};

const openPhotoSwipe = async (targetImg: HTMLImageElement) => {
  const images = getVisibleImages();
  const index = images.findIndex((img) => img === targetImg);
  if (index < 0) {
    return;
  }

  const dataSource = images.map((img) => {
    const { width, height } = getImageSize(img);
    return {
      src: img.currentSrc || img.src,
      width,
      height,
      alt: img.alt || "",
    };
  });

  const { default: PhotoSwipe } = await import("photoswipe");
  const pswp = new PhotoSwipe({
    dataSource,
    index,
    showHideAnimationType: "zoom",
    bgOpacity: 0.92,
    wheelToZoom: true,
    pinchToClose: true,
    closeOnVerticalDrag: true,
    maxZoomLevel: 4,
  } as any);
  pswp.init();
};

const installImageClickListener = () => {
  if (typeof window === "undefined") {
    return;
  }

  removeImageClickListener?.();

  const onClick = (event: MouseEvent) => {
    const target = event.target as Element | null;
    if (!target) {
      return;
    }

    const img = target.closest(".vp-doc img:not(.no-zoom)") as HTMLImageElement | null;
    if (!img || img.offsetParent === null) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();
    void openPhotoSwipe(img);
  };

  document.addEventListener("click", onClick, true);
  removeImageClickListener = () => {
    document.removeEventListener("click", onClick, true);
  };
};

export default {
  ...Theme,
  Layout: () => {
    return h(Theme.Layout, null, {});
  },
  enhanceApp({ app, router }: { app: App; router: any }) {
    app.component("TeamMembers", TeamMembers);
    app.component("SponsorSection", SponsorSection);
    app.component("CommunityPlatforms", CommunityPlatforms);
    installImageClickListener();
    router?.onAfterRouteChanged?.(() => {
      installImageClickListener();
    });
  },
};
