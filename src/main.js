import Vue from 'vue'
import App from './App.vue'

import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css'

Vue.use(Vuesax, {
    // options here
})

import 'material-icons/iconfont/material-icons.css';

Vue.config.productionTip = false

// Styles: SCSS
import './assets/scss/main.scss'

// Tailwind
import '@/assets/css/main.css'

import store from './store/index'

new Vue({
    store,
    render: h => h(App),
}).$mount('#app')
