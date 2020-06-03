import Vue from 'vue'
import App from './App.vue'
import router from './router'
import hljs from 'highlight.js'

import '@/assets/style/bootstrap.css'
import '@/assets/style/main.css'
import 'highlight.js/styles/googlecode.css'
import '@/assets/style/github-markdown.css'

Vue.config.productionTip = false

Vue.directive('highlight',function (el) {
  let blocks = el.querySelectorAll('pre code');
  blocks.forEach((block)=>{
    hljs.highlightBlock(block)
  })
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
