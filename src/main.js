import Vue from 'vue'
import App from './App.vue'

import VueResource from 'vue-resource'
import VueMaterial from 'vue-material';
import VueScrollReveal from 'vue-scroll-reveal';
// import { MdButton, MdDrawer } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.use(VueResource)
Vue.use(VueMaterial)
Vue.use(VueScrollReveal, {
  class: 'v-scroll-reveal', 
  duration: 1800,
  scale: 1,
  distance: '100px',
});

// Vue.use(MdButton)
// Vue.use(MdDrawer)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
