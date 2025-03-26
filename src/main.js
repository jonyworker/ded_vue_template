import { createApp } from 'vue'
import './style/globals.scss'
import './tailwind.css'
import App from './App.vue'
import icons from "./assets/icons/icons.js";
import router from './router'

const app = createApp(App);
app.provide("icons", icons);
app.use(router);
app.mount("#app");