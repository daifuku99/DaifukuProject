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
                  <i class="q-pa-md knowledge__card--icon fab fa-vuejs fa-5x"></i>
                  <q-card-section>
                    <div class="text-h6">Vue.js</div>
                    <div class="q-pa-md text-subtitle2">Two Years and more</div>
                    <q-btn color="black" :loading="loading1" label="check" @click="paging" />
                  </q-card-section>
                </q-card>
                <q-card class="knowledge__card">
                  <i class="q-pa-md knowledge__card--icon fab fa-js fa-5x"></i>
                  <q-card-section>
                    <div class="text-h6">JavaScript,TypeScript</div>
                    <div class="q-pa-md text-subtitle2">Two Years and more</div>
                    <q-btn color="black" :loading="loading1" label="check" @click="paging" />
                  </q-card-section>
                </q-card>
                <q-card class="knowledge__card">
                  <i class="q-pa-md knowledge__card--icon fab fa-html5 fa-5x"></i>
                  <q-card-section>
                    <div class="text-h6">HTML, CSS</div>
                    <div class="q-pa-md text-subtitle2">Two Years and more</div>
                    <q-btn color="black" :loading="loading1" label="check" @click="paging" />
                  </q-card-section>
                </q-card>
                <q-card class="knowledge__card">
                  <i class="q-pa-md knowledge__card--icon fab fa-swift fa-5x"></i>
                  <q-card-section>
                    <div class="text-h6">Swift</div>
                    <div class="q-pa-md text-subtitle2">Two Months and more</div>
                    <q-btn color="black" :loading="loading1" label="check" @click="paging" />
                  </q-card-section>
                </q-card>
                <q-card class="knowledge__card">
                  <i class="q-pa-md knowledge__card--icon fab fa-korvue fa-5x"></i>
                  <q-card-section>
                    <div class="text-h6">Kotlin</div>
                    <div class="q-pa-md text-subtitle2">Two Months and more</div>
                    <q-btn color="black" :loading="loading1" label="check" @click="paging" />
                  </q-card-section>
                </q-card>
              </div>
          </q-tab-panel>

          <q-tab-panel name="serverside">
            <div class="text-h4 q-mb-md">SERVER SIDE</div>
             <div class="q-pa-md row items-start q-gutter-md">
                <q-card class="knowledge__card">
                  <i class="q-pa-md knowledge__card--icon fab fa-java fa-5x"></i>
                  <q-card-section>
                    <div class="text-h6">Java</div>
                    <div class="q-pa-md text-subtitle2">Three Years and more</div>
                    <q-btn color="black" :loading="loading1" label="check" @click="paging" />
                  </q-card-section>
                </q-card>
                <q-card class="knowledge__card">
                  <i class="q-pa-md knowledge__card--icon fab fa-google fa-5x"></i>
                  <q-card-section>
                    <div class="text-h6">Go</div>
                    <div class="q-pa-md text-subtitle2">Now Studing</div>
                    <q-btn color="black" :loading="loading1" label="check" @click="paging" />
                  </q-card-section>
                </q-card>
                <q-card class="knowledge__card">
                  <i class="q-pa-md knowledge__card--icon fab fa-php fa-5x"></i>
                  <q-card-section>
                    <div class="text-h6">PHP</div>
                    <div class="q-pa-md text-subtitle2">Now Studing</div>
                    <q-btn color="black" :loading="loading1" label="check" @click="paging" />
                  </q-card-section>
                </q-card>
             </div>
          </q-tab-panel>

          <q-tab-panel name="tech">
            <div class="text-h4 q-mb-md">FRAME WORK</div>
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
