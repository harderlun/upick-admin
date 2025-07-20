import axios from 'axios'

const request = axios.create({
  baseURL: 'http://localhost:5000', // Flask 后端地址
  timeout: 5000,
})

// 你也可以在这里设置请求/响应拦截器

export default request
