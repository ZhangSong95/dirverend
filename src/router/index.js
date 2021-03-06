import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import mainPage from '@/components/mainPage'
import bindCar from '@/components/bindCar'
import carMessage from '@/components/carMessage'
import carList from '@/components/carList'
import endTask from '@/components/endTask'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/login', name: 'login', component: login},
    {path: '/mainPage', name: 'mainPage', component: mainPage},
    {path: '/bindCar', name: 'bindCar', component: bindCar},
    {path: '/carMessage', name: 'carMessage', component: carMessage},
    {path: '/carList', name: 'carList', component: carList},
    {path: '/endTask', name: 'endTask', component: endTask}
  ]
})
