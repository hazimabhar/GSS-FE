import './index.css'
import '@fortawesome/fontawesome-free/css/all.css';
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

const option = {
  transition: "Vue-Toastification__bounce",
  maxToasts: 20,
  newestOnTop: true
}

const app = createApp(App)

app.use(router)
app.use(Toast, option)

app.mount('#app')
