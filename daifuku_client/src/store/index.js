import Vue from 'vue'
import Vuex from 'vuex'
import example from './example'

Vue.use(Vuex)

export default function () {
  const Store = new Vuex.Store({
    modules: {
      example
    },
    strict: process.env.DEV
  })
  return Store
}
