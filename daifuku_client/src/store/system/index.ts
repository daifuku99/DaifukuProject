import { createModule, createMutations, createActions } from 'direct-vuex'
import { ApplicationPropertyForCustomer } from '../../domain/auth'
import { SystemState } from '../types'

/**
 * initialize system modules
 */
/*const initialState: SystemState = {
    applicationProperty: {} as ApplicationPropertyForCustomer,
}

const mutations = createMutations<SystemState>()({
    initialize() {
        Object.assign(state, initialState)
    }
})

const actions = createActions({})

export const systemModule = createModule({
    namespaced: true,
    state: { ...initialState },
    mutations,
    actions
})