import { createPinia } from "pinia";
import Router from "./router/init";
import { createApp } from "vue";
import App from "./App.vue";

import "./css/base.css";

createApp(App).use(createPinia()).use(Router).mount("#app");
