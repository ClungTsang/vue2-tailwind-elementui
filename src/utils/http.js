import axios from 'axios'
// import Cookies from 'js-cookie'
// import qs from 'qs'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  // headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  timeout: 300000,
})


const whiteList = ['/validateLogon']
// 設置 request 攔截器
service.interceptors.request.use((config) => {
  console.log('config.url :>> ', config.url);
  if(!whiteList.includes(config.url)){
    // const token = JSON.parse(Cookies.get('userInfo').token)
    // token本身是會過期的，需要返回狀態查詢是不是過期
    // token && (config.headers.Authorization = token)
  }
  return config
})


// 設置 response 攔截器

service.interceptors.response.use(
  (response) => {
    // 如果回應200表示正常連線，可以返回資料結果，反之reject
    if (response.status === 200) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(response);
    }
  },

  // 根據不同的回應碼來訂製不同的錯誤訊息
  (error) => {
    if (error && error.response) {
      switch (error.response.status) {
        case 400:
          error.message = 'Request Error!'
          break
        case 401:
          error.message = 'No permission, need login.'
          break
        case 403:
          error.message = 'Access denied!'
          break
        case 404:
          // 自動帶入 request 地址的寫法
          error.message = `Address not exist: ${error.response.config.url}`
          break
        case 408:
          error.message = 'Request timeout!'
          break
        case 500:
          error.message = 'Server inside error!'
          break
        case 501:
          error.message = 'Service not allowed!'
          break
        case 502:
          error.message = 'Bad gateway!'
          break
        case 503:
          error.message = 'No service!'
          break
        case 504:
          error.message = 'Gateway timeout!'
          break
        case 505:
          error.message = 'http version not supported!'
          break
        default:
          break
      }
    }
    // this.$message.error(error)
    console.log('error', error)
    return Promise.reject(error)
  }
)
// return service(config)

export default service
