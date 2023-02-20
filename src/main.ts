import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/style.css";
import VueScrollTo from "vue-scrollto";

const app = createApp(App);

app.use(VueScrollTo);

app.use(router);

app.mount("#app");
