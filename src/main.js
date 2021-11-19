import { createApp } from "vue";
import router from "./router";
import store from "./store";
import axios from "axios";

import App from "./App.vue";

// set axios base URL

axios.defaults.baseURL = "https://test.firstbetng.com/api/v1/";

createApp(App).use(store).use(router).mount("#app");
