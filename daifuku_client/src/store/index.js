import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import example from './example'
import * as types from './mutation-types'

Vue.use(Vuex)

export default function () {
  const Store = new Vuex.Store({
    state: {
      messages: [
        {
          form: [
            {
              formName: '',
              formId: ''
            }
          ],
          messageId: '',
          messageName: ''
        }
      ]
    },
    getters: {
      getMessageByMessageId: (state) => (id) => {
        //        return state.messages.find(message => message.messageId === id)
        return state.messages[id - 1].messageName
      }
    },
    mutations: {
      [types.GET_TODAY_MESSAGE] (state, payload) {
        state.messages = payload.messages
        console.log('state.messages', state.messages)
      }
    },
    actions: {
      async [types.GET_TODAY_MESSAGE] ({ commit }) {
        const params = new URLSearchParams()
        console.log('https params = ', params.toString())

        const urlGet = 'http://localhost:8001/api/v1/messages'

        console.log('== url ==', urlGet)

        axios
          .get(urlGet, {
            mode: 'cors'
          })
          .then(async response => {
            console.log('response data', response.data)
            this.messages = response.data.messagesList
            console.log('this.messages : ', this.messages)
            commit(types.GET_TODAY_MESSAGE, {
              messages: this.messages
            })
          })
          .catch(error => {
            return error.response
          })
      }
    },
    modules: {
      example
    },
    strict: process.env.DEV
  })
  return Store
}
