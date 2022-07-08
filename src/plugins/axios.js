import axios from 'axios'

/**
 * @instance axios 實體，方便進行 config 及攔截器的管理
 */
const request = axios.create({
  baseURL: '/',
  timeout: 30 * 1000,
})

const handleError = (error) => {
  return {
    data: false,
    error: true,
    msg: error.toString(),
  }
}

request.interceptors.request.use(function (config) {
  return config
}, handleError)

request.interceptors.response.use(
  function (response) {
    return response.data
  },
  handleError,
)

export default request
