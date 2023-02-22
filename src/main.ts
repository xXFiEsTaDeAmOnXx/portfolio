import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/style.css";
import VueScrollTo from "vue-scrollto";
import AOS from 'aos'
import 'aos/dist/aos.css'

const app = createApp(App);
AOS.init()
app.use(VueScrollTo);

app.use(router);

app.mount("#app");
