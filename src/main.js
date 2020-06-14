// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { Form, Field, Button, Checkbox, CheckboxGroup, Uploader, Dialog, NavBar } from 'vant'
import './assets/less/styles.less'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Meta from 'vue-meta'

Vue.use(Form).use(Field).use(Button).use(Checkbox).use(CheckboxGroup)
Vue.use(Uploader).use(ElementUI).use(Dialog).use(NavBar).use(Meta)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  render: h => h(App)
})
