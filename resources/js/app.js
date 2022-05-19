import { createApp } from "vue";
import App from "./app.vue";
import router from "./router/index.js";

require('./bootstrap');

const app = createApp(App);
app.use(router);
app.mount("#vue-app");
