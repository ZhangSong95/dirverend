// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { Form, Field, Button, Checkbox, CheckboxGroup } from 'vant'
import './assets/less/styles.less'

Vue.use(Form).use(Field).use(Button).use(Checkbox).use(CheckboxGroup)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
