import { createApp } from "vue";
import App from "./App.vue";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import "./style.css";
import PlayAround from "./components/PlayAround.vue";

const app = createApp(App);
// const app = createApp(PlayAround);
app.use(Toast, {
  transition: "Vue-Toastification__fade",
  maxToasts: 20,
  newestOnTop: true,
});
app.mount("#app");
