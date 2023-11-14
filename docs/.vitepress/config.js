import { resolve } from "path";
import svgLoader from "vite-svg-loader";

/** @type {import('vitepress').SiteConfig} */
export default {
  title: "Erb3/ui",
  description: "Erb3's personal bag of Vue components!",
  head: [["link", { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]],
  themeConfig: {
    logo: { src: "/favicon.svg", width: 24, height: 24 },
    socialLinks: [{ icon: "github", link: "https://github.com/erb3/ui" }],
    search: {
      provider: "local",
    },
    sidebar: [
      {
        items: [
          { text: "Introduction", link: "/" },
          { text: "Setup", link: "/setup" },
        ],
      },
      {
        text: "Components",
        items: [
          { text: "Avatar", link: "/components/avatar" },
          { text: "Badge", link: "/components/badge" },
          { text: "Button", link: "/components/button" },
          { text: "Card", link: "/components/card" },
          { text: "Checkbox", link: "/components/checkbox" },
          { text: "Chips", link: "/components/chips" },
          { text: "File Input", link: "/components/file-input" },
          { text: "Drop Area", link: "/components/drop-area" },
          { text: "Icons", link: "/components/icons" },
          { text: "Pagination", link: "/components/pagination" },
          { text: "Modal", link: "/components/modal" },
          { text: "Dropdown Select", link: "/components/dropdown-select" },
          { text: "Popout Menu", link: "/components/popout-menu" },
          { text: "Overflow Menu", link: "/components/overflow-menu" },
          { text: "Project Card", link: "/components/project-card" },
          { text: "Environment Indicator", link: "/components/environment-indicator" },
          { text: "Categories", link: "/components/categories" },
          { text: "Animated Logo", link: "/components/animated-logo" },
          { text: "Text Logo", link: "/components/text-logo" },
          { text: "Slider", link: "/components/slider" },
          { text: "Text Inputs", link: "/components/text-inputs" },
          { text: "Number Inputs", link: "/components/number-inputs" },
          { text: "Search Filter", link: "/components/search-filter" },
          { text: "Toggle", link: "/components/toggle" },
          { text: "Promotion", link: "/components/promotion" },
          { text: "Markdown", link: "/components/markdown" },
          { text: "Markdown Editor", link: "/components/markdown-editor" },
          { text: "Copy Code", link: "/components/copy-code" },
          { text: "Notifications", link: "/components/notifications" },
          { text: "Share Modal", link: "/components/share-modal" },
          { text: "Analytics", link: "/components/analytics" },
          { text: "Search dropdown", link: "/components/search-dropdown" },
        ],
      },
    ],
    footer: {
      message:
        'Released under the <a href="https://github.com/erb3/ui/blob/main/LICENSE">AGPLv3 License</a>.',
    },
  },
  vite: {
    plugins: [
      svgLoader({
        svgoConfig: {
          plugins: [
            {
              name: "preset-default",
              params: {
                overrides: {
                  removeViewBox: false,
                },
              },
            },
          ],
        },
      }),
    ],
    resolve: {
      alias: {
        "@": resolve(__dirname, "../../lib"),
        ui: resolve(__dirname, "../../lib"),
      },
      dedupe: ["vue"],
    },
  },
};