import { RootState } from './types'
import { createMutations } from 'direct-vuex'

const mutation = createMutations<RootState>()({
  showHeader (state, payload: boolean) {
    state.showHeader = payload
  },
  toggleDrawerMenu (state, payload?: boolean) {
    if (payload == null) {
      state.drawerMenu = !state.drawerMenu
    } else {
      state.drawerMenu = payload
    }
  }
})

export const mutations = {
  ...mutation
}
