import { resolve } from "path";
import svgLoader from "vite-svg-loader";

/** @type {import('vitepress').SiteConfig} */
export default {
  title: "Erb3/ui",
  description: "Erb3's personal bag of Vue components!",
  head: [["link", { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]],
  themeConfig: {
    logo: { src: "/favicon.svg", width: 24, height: 24 },
    socialLinks: [{ icon: "github", link: "https://github.com/Erb3/ui" }],
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
          { text: "Button", link: "/components/button" },
          { text: "Card", link: "/components/card" },
          { text: "Checkbox", link: "/components/checkbox" },
          { text: "Chips", link: "/components/chips" },
          { text: "Copy Code", link: "/components/copy-code" },
          { text: "Drop Area", link: "/components/drop-area" },
          { text: "Dropdown Select", link: "/components/dropdown-select" },
          { text: "File Input", link: "/components/file-input" },
          { text: "Icons", link: "/components/icons" },
          { text: "Modal", link: "/components/modal" },
          { text: "Navigation", link: "/components/navigation" },
          { text: "Notifications", link: "/components/notifications" },
          { text: "Overflow Menu", link: "/components/overflow-menu" },
          { text: "Pagination", link: "/components/pagination" },
          { text: "Popout Menu", link: "/components/popout-menu" },
          { text: "Search dropdown", link: "/components/search-dropdown" },
          { text: "Slider", link: "/components/slider" },
          { text: "Text Inputs", link: "/components/text-inputs" },
          { text: "Toggle", link: "/components/toggle" },
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
