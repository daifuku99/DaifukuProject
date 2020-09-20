import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import example from './example'

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
      messages: state => state.users
    },
    mutations: {
      messagesList (state, payload) {
        state.users = payload.users
      }
    },
    actions: {
      async messagesList ({ commit }, messages) {
        let paracnt = 0
        const params = new URLSearchParams()
        if (messages.messageId !== '') {
          paracnt++
          params.append('messages', Number(messages.userId))
        }

        console.log('https params = ', params.toString())

        let urlGet = 'http://localhost:8080/api/v1/messages'
        if (paracnt) {
          urlGet = urlGet + '?' + params.toString()
        }

        console.log('== url ==', urlGet)

        axios
          .get(urlGet, {
            mode: 'cors'
          })
          .then(async response => {
            console.log('response data', response.data)
            this.users = response.data
            commit('messagesList', {
              users: this.messages
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
