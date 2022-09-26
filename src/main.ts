import { createApp } from "vue";
import App from "./App.vue";
import GButton from "./components/GButton.vue";
import GModal from "./components/GModal.vue";
import GIcon from "./components/GIcon.vue";
import router from "./router/router";
import "./style.css";

const app = createApp(App);

// Global components
app.component("GButton", GButton);
app.component("GModal", GModal);
app.component("GIcon", GIcon);

app.use(router);
app.mount("#app");
