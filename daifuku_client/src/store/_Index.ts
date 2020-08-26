/*
import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import { createDirectStore } from 'direct-vuex'
import { systemModule } from './system'
import { RootState } from './types'
import { mutations } from './mutations'
import { actions } from './actions'

Vue.use(Vuex)

/**
 * Root State
 */
/*const state: RootState = {
  loadingCount: 0,
  timeoutID: null,
  errorQueue: [],
  errorOccuredInInquiry: false,
  showHeader: true,
  drawerMenu: true
}

/**
 * Target WebStorage persistence Modules
 */
/*export const persistsModules = [
  'systemModule'
]

const { store, rootActionContext, moduleActionContext } = createDirectStore({
  state,
  mutations,
  actions,
  modules: {
    systemModule,
  },
  plugins: [
    createPersistedState({
      paths: [...persistsModules],
      storage: window.sessionStorage
    })
  ]
})

export default store
export { rootActionContext, moduleActionContext }
export type AppStore = typeof store;

declare module 'vuex' {
    interface Store<S> {
        direct: AppStore
    }
}