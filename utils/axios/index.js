// src/utils/axios.js

import axios from 'axios'

// 创建 axios 实例
const service = axios.create({
  baseURL: 'http://localhost:9421/tzb', // 配置基础 URL, 可以根据需求改成你的 API 地址
  timeout: 10000// 请求超时设置
})
// 封装请求方法，分别处理 GET、POST、PUT、DELETE 请求
const get = (url, params) => {
  console.log('wcnm')
  return service.get(url, { params })
}

const post = (url, data) => {
  return service.post(url, data)
}

const put = (url, data) => {
  return service.put(url, data)
}

const del = (url) => {
  return service.delete(url)
}

// 导出封装好的方法
export { get, post, put, del }
