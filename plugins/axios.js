import Vue from 'vue'
import axios from 'axios'
/**
 * axios全局配置
 */
axios.defaults.timeout = 100000;
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
axios.defaults.baseURL = 'http://127.0.0.1:8022'; //本地服务器接口
axios.defaults.withCredentials = true;


/**
 * axios全局配置请求拦截
 */
axios.interceptors.request.use((res) => {
  return res
})

/**
 * axios全局配置响应拦截
 */
axios.interceptors.response.use((req) => {
  return req
  // console.log(req)
  // if (req.status == 200) {
  //   switch (req.data.code) {
  //     case 200:
  //       return req.data;
  //       break
  //     case 401:
  //       vm.$router.push('/login')
  //       return Promise.reject(req.data.msg);
  //       break
  //     case 500:
  //       vm.$router.push('/error500')
  //       return Promise.reject(req.data.msg);
  //       break
  //     default:
  //       return req.data;
  //       break
  //   }
  // }
}, error => {
  console.log(error)
  // this.$Message.error('服务器错误')
});
Vue.prototype.$http = axios;