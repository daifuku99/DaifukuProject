import Vue from 'vue'
import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'http://example.com',
  'Content-Type': 'application/json',
  Accept: 'application/json'
})

Vue.prototype.$axios = axiosInstance
export { axiosInstance }
