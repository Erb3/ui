import * as components from "./components/index.js";
import FloatingVue from "floating-vue";
import "./assets/ui.scss";

const plugin = (app) => {
  for (const key in components) {
    app.component(key, components[key]);
  }
  app.use(FloatingVue);
};

export * from "./components/index.js";
export default plugin;
