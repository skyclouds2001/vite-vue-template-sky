import axios from 'axios'
import { SERVER_HOST } from '@/config'

const instance = axios.create({
  baseURL: SERVER_HOST,
  timeout: 10000,
  withCredentials: true,
})

instance.interceptors.request.use(
  (config) => config,
  async (error) => await Promise.reject(error)
)

instance.interceptors.response.use(
  (result) => result,
  async (error) => await Promise.reject(error)
)

export default instance
