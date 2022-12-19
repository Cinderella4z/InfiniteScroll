import { createApp } from 'vue'
import App from './App.vue'
import scroll from './v-infinite-scroll'
const app=createApp(App)

app.directive('infinite-scroll',scroll)

app.mount('#app')
