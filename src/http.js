import axios from 'axios'
import { Toast } from 'vant';

// 请求前的拦截
axios.interceptors.request.use(config => {
    return config
}, error => {
    return Promise.reject(error)
})

// http响应拦截器
axios.interceptors.response.use(data => { // 响应成功关闭loading
  if (data.data) {
    if (!data.data.success) {
        Toast(data.data.message)
    }
    return data.data
  } else {
    return Promise.reject(data)
  }
}, error => {
  if (error.response && error.response) {
    return Promise.reject(error.response.statusText)
  };
})
export default axios