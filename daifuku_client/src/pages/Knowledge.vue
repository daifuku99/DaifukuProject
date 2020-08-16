<template>
  <q-page>
  <div>
    <q-splitter
      v-model="splitterModel"
      style="height: 500px"
    >

      <template v-slot:before>
        <q-tabs
          v-model="tab"
          vertical
          class="text-teal"
        >
          <q-tab name="clientside" icon="dvr" label="CLIENT SIDE" />
          <q-tab name="serverside" icon="router" label="SERVER SIDE" />
          <q-tab name="tech" icon="engineering" label="TECH" />
          <q-tab name="mails" icon="mail" label="MAIL" />
        </q-tabs>
      </template>

      <template v-slot:after>
        <q-tab-panels
          v-model="tab"
          animated
          swipeable
          vertical
          transition-prev="jump-up"
          transition-next="jump-up"
        >
          <q-tab-panel name="clientside">
            <div class="text-h4 q-mb-md">CLIENT SIDE</div>
            <p><b>No.1: paging</b></p>
            <q-btn :loading="loading1" color="black" label="check" @click="paging" />
            <p>No.2: xxxx</p>
          </q-tab-panel>

          <q-tab-panel name="serverside">
            <div class="text-h4 q-mb-md">SERVER SIDE</div>
            <p>No.1: xxxx</p>
            <p>No.2: xxxx</p>
          </q-tab-panel>

          <q-tab-panel name="tech">
            <div class="text-h4 q-mb-md">TECH</div>
            <p><b>No.1: xxxx</b></p>
            <p>No.2: xxxx</p>
          </q-tab-panel>
        </q-tab-panels>
      </template>
    </q-splitter>
  </div>
    <router-view/>
  </q-page>
</template>

<script>
export default {
  methods: {
    paging () {
      this.$router.push({ path: '/Knowledge/paging' })
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
