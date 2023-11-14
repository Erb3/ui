import * as components from "./components/index.js";
import FloatingVue from "floating-vue";
import "./assets/ui.scss";

export const plugin = (app) => {
  for (const key in components) {
    app.component(key, components[key]);
  }
  app.use(FloatingVue);
};

export * from "./components/index.js";
