import Vue from 'vue'
import App from './App.vue'

import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css'

Vue.use(Vuesax, {
    // options here
})


Vue.config.productionTip = false


// Styles: SCSS
import './assets/scss/main.scss'

// Tailwind
import '@/assets/css/main.css'


new Vue({
    render: h => h(App),
}).$mount('#app')
