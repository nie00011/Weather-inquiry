// 配置axios

import axios from 'axios'

// 设置
var $http = axios.create({
  	baseURL : 'http://www.justbecoder.com'
})

export default $http
