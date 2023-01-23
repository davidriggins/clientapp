import { createApp, Vue } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

Object.assign(window, { Vue });
webix.require(
  ["https://desktopqa/libs/webix-forms/scripts/webix-vue.js"],
  _main_
);

async function _main_() {
  let app = createApp(App);

  app.use(createPinia());
  app.use(router);

  app.mount("#app");
}
