import { createApp } from "vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import '@/assets/scss/_index.scss';
import App from "@/components/App.vue";
import Router from "@/router/router.js";
import store from "@/srore/store.js";
import YmapPlugin from 'vue-yandex-maps'
import VueTheMask from 'vue-the-mask'
import Toaster from "@meforma/vue-toaster";

const app = createApp(App);

app.use(Router)
app.use(store)
app.use(YmapPlugin, {
    apiKey: '',
    lang: 'ru_RU',
    coordorder: 'latlong',
    enterprise: false,
    version: '2.1'
})
app.use(VueTheMask)
app.use(Toaster)
app.mount("#app");
