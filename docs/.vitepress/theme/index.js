import ui from "ui";
import DefaultTheme from "vitepress/theme";
import DemoContainer from "./DemoContainer.vue";

import "./compat.scss";
import "./style.scss";

/** @type {import('vitepress').Theme} */
export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    ctx.app.use(ui);
    ctx.app.component("DemoContainer", DemoContainer);
  },
};
