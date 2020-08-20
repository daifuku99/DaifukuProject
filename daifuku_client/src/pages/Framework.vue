<template>
  <q-page>
    <p>What framework</p>
    <router-view/>
  </q-page>
</template>

<script>
export default {
  methods: {
    paging () {
      this.$router.push('/paging')
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
