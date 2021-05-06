import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import './style.less'
import router from './router'
// import axios from 'axios';
import axios from './http.js';
// axios.defaults.withCredentials = false; // 跨域设置，false忽略跨域cookies（Access-Control-Allow-Headers:*）
// axios.defaults.timeout = 10000; // 等待时间，ms
import Vant from 'vant';
import 'vant/lib/index.css';

const app = createApp(App)
app.config.globalProperties.$axios=axios
app.use(router)
app.use(Vant);
app.mount('#app')
