import { axiosInstance } from 'boot/axios'

export default ({ router, store, Vue }) => {
  router.beforeEach((to, from, next) => {
    to.mached.some(async (record) => {
      if (!record.meta.requiresAuth) {
        next()
      } else {
        const postData = new FormData()
        postData.append('name', 'value')

        await axiosInstance.post('endpoint', postData)
          .then(response => {
            next()
          })
          .catch(error => {
            if (error.response.status === 401) {
              next({ name: 'login' })
            } else {
              next({ name: 'home' })
            }
          })
          .finally(() => {
            // finally
          })
      }
    })
  })
}
