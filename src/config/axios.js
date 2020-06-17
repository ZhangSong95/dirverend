import axios from 'axios'
import qs from 'qs'
const API = require('@/config/vuex/state/api').state
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded' // Form Data 模式
// 定义fetch函数，config为配置
export function fetch (config, base) {
  // 返回promise对象
  return new Promise((resolve, reject) => {
    // 创建axios实例，把基本的配置放进去
    const instance = axios.create({
      // 定义请求文件类型
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      },
      // 请求超时
      timeout: 5000
    })
    // 请求成功后执行的函数
    instance(config).then(res => {
      console.log(res)
      resolve(res)
      if (res.data.code === 401) {
        window.localStorage.clear()
        window.vm.$router.push({path: 'login'})
        console.error('用户未登录')
      }
      // 失败后执行的函数
    }).catch(err => {
      console.log('错误')
      console.log(err)
      reject(err)
    })
  })
}

// 封装调用的接口 getData
export function $axios (url, data, type = 'post', host) {
  let baseURL = host ? API[host] : API.host
  axios.defaults.headers.common['Authorization'] =  window.localStorage.getItem('token')
  // 判断是否登录
  if (type === 'post' && !data) {
    data = {}
  } else if (type === 'get' && !data) {
    data = ''
  }
  return fetch({
    url: type === 'post' ? baseURL + url : baseURL + url + data,
    method: type || 'post',
    data: qs.stringify(data)
  })
}
