<template>
  <q-page>
    <p>How to paging </p>
    <q-btn @click="paging">BACK</q-btn>
    <router-view/>
  </q-page>
</template>

<script>
export default {
  methods: {
    paging () {
      this.$router.back('/')
    }
  },
  data () {
    return {
      tab: 'mails',
      splitterModel: 20,
      loading1: false
    }
  }
}
</script>
