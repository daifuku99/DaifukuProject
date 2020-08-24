<template>
  <q-page>
  <div>
    <q-splitter
      v-model="splitterModel"
      style="height: 800px"
    >

      <template v-slot:before>
        <q-tabs
          v-model="tab"
          vertical
          class="text-black"
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
             <div class="q-pa-md row items-start q-gutter-md">
                <q-card class="knowledge__card">
                  <img src="https://cdn.quasar.dev/img/mountains.jpg">
                  <q-card-section>
                    <div class="text-h6">◇No.1: paging</div>
                    <div class="text-subtitle2">How do paging</div>
                  </q-card-section>
                  <q-card-actions>
                    <q-btn :loading="loading1" label="check" @click="paging" />
                  </q-card-actions>
                </q-card>
                <q-card class="knowledge__card">
                  <img src="https://cdn.quasar.dev/img/mountains.jpg">
                  <q-card-section>
                    <div class="text-h6">◇No.2: framework</div>
                    <div class="text-subtitle2">What framework</div>
                  </q-card-section>
                  <q-card-actions>
                    <q-btn :loading="loading1" label="check" @click="framework" />
                  </q-card-actions>
                </q-card>
              </div>
          </q-tab-panel>

          <q-tab-panel name="serverside">
            <div class="text-h4 q-mb-md">SERVER SIDE</div>
             <div class="q-pa-md row items-start q-gutter-md">
                <q-card class="knowledge__card">
                  <img src="https://cdn.quasar.dev/img/mountains.jpg">
                  <q-card-section>
                    <div class="text-h6">◇No.1: xxxx</div>
                    <div class="text-subtitle2">xxxx</div>
                  </q-card-section>
                  <q-card-actions>
                    <q-btn :loading="loading1" label="check" @click="paging" />
                  </q-card-actions>
                </q-card>
                <q-card class="knowledge__card">
                  <img src="https://cdn.quasar.dev/img/mountains.jpg">
                  <q-card-section>
                    <div class="text-h6">◇No.2: xxxx</div>
                    <div class="text-subtitle2">xxxx</div>
                  </q-card-section>
                  <q-card-actions>
                    <q-btn :loading="loading1" label="check" @click="framework" />
                  </q-card-actions>
                </q-card>
             </div>
          </q-tab-panel>

          <q-tab-panel name="tech">
            <div class="text-h4 q-mb-md">TECH</div>
             <div class="q-pa-md row items-start q-gutter-md">
                <q-card class="knowledge__card">
                  <img src="https://cdn.quasar.dev/img/mountains.jpg">
                  <q-card-section>
                    <div class="text-h6">◇No.1: xxxx</div>
                    <div class="text-subtitle2">xxxx</div>
                  </q-card-section>
                  <q-card-actions>
                    <q-btn :loading="loading1" label="check" @click="paging" />
                  </q-card-actions>
                </q-card>
                <q-card class="knowledge__card">
                  <img src="https://cdn.quasar.dev/img/mountains.jpg">
                  <q-card-section>
                    <div class="text-h6">◇No.2: xxxx</div>
                    <div class="text-subtitle2">xxxx</div>
                  </q-card-section>
                  <q-card-actions>
                    <q-btn :loading="loading1" label="check" @click="framework" />
                  </q-card-actions>
                </q-card>
             </div>
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
    },
    framework () {
      this.$router.push({ path: '/Knowledge/framework' })
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
