import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

createApp(App).use(store).use(router).mount('#app')
window.Kakao.init('acd1fbf528494f3880f4436da8e375e4')
