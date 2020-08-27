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
          <q-tab name="framework" icon="engineering" label="FRAMEWORK" />
          <q-tab name="infra" icon="fas fa-tools" label="INFRASTRUCTURE" />
          <q-tab name="tools" icon="fas fa-tools" label="TOOLS" />
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

          <q-tab-panel name="framework">
            <div class="text-h4 q-mb-md">FRAME WORK</div>
             <div class="q-pa-md row items-start q-gutter-md">
                <q-card class="knowledge__card">
                  <i class="q-pa-md knowledge__card--icon fas fa-seedling fa-5x"></i>
                  <q-card-section>
                    <div class="text-h6">SPRING BOOT</div>
                    <div class="q-pa-md text-subtitle2">Three Years and more</div>
                    <q-btn color="black" :loading="loading1" label="check" @click="paging" />
                  </q-card-section>
                </q-card>
                <q-card class="knowledge__card">
                  <i class="q-pa-md knowledge__card--icon fab fa-quora fa-5x"></i>
                  <q-card-section>
                    <div class="text-h6">quasar</div>
                    <div class="q-pa-md text-subtitle2">One Years and more</div>
                    <q-btn color="black" :loading="loading1" label="check" @click="paging" />
                  </q-card-section>
                </q-card>
                <q-card class="knowledge__card">
                  <i class="q-pa-md knowledge__card--icon fab fa-android fa-5x"></i>
                  <q-card-section>
                    <div class="text-h6">CORDOVA</div>
                    <div class="q-pa-md text-subtitle2">One Months and more</div>
                    <q-btn color="black" :loading="loading1" label="check" @click="paging" />
                  </q-card-section>
                </q-card>
                <q-card class="knowledge__card">
                  <i class="q-pa-md knowledge__card--icon fab fa-stripe-s fa-5x"></i>
                  <q-card-section>
                    <div class="text-h6">STRUTS</div>
                    <div class="q-pa-md text-subtitle2">One Years and more</div>
                    <q-btn color="black" :loading="loading1" label="check" @click="paging" />
                  </q-card-section>
                </q-card>
                <q-card class="knowledge__card">
                  <i class="q-pa-md knowledge__card--icon fas fa-cocktail fa-5x"></i>
                  <q-card-section>
                    <div class="text-h6">Gin</div>
                    <div class="q-pa-md text-subtitle2">Now Studing</div>
                    <q-btn color="black" :loading="loading1" label="check" @click="paging" />
                  </q-card-section>
                </q-card>
             </div>
          </q-tab-panel>

          <q-tab-panel name="infra">
            <div class="text-h4 q-mb-md">INFRASTRUCTURE</div>
             <div class="q-pa-md row items-start q-gutter-md">
                <q-card class="knowledge__card">
                  <i class="q-pa-md knowledge__card--icon fab fa-aws fa-5x"></i>
                  <q-card-section>
                    <div class="text-h6">AWS</div>
                    <div class="q-pa-md text-subtitle2">Two Years and more</div>
                    <q-btn color="black" :loading="loading1" label="check" @click="paging" />
                  </q-card-section>
                </q-card>
                <q-card class="knowledge__card">
                  <i class="q-pa-md knowledge__card--icon fab fa-linux fa-5x"></i>
                  <q-card-section>
                    <div class="text-h6">LINUX</div>
                    <div class="q-pa-md text-subtitle2">Three Years and more</div>
                    <q-btn color="black" :loading="loading1" label="check" @click="paging" />
                  </q-card-section>
                </q-card>
                <q-card class="knowledge__card">
                  <i class="q-pa-md knowledge__card--icon fas fa-box fa-5x"></i>
                  <q-card-section>
                    <div class="text-h6">MYSQL</div>
                    <div class="q-pa-md text-subtitle2">One Months and more</div>
                    <q-btn color="black" :loading="loading1" label="check" @click="paging" />
                  </q-card-section>
                </q-card>
                <q-card class="knowledge__card">
                  <i class="q-pa-md knowledge__card--icon fas fa-inbox fa-5x"></i>
                  <q-card-section>
                    <div class="text-h6">ORACLE</div>
                    <div class="q-pa-md text-subtitle2">Two Years and more</div>
                    <q-btn color="black" :loading="loading1" label="check" @click="paging" />
                  </q-card-section>
                </q-card>
                <q-card class="knowledge__card">
                  <i class="q-pa-md knowledge__card--icon fas fa-cocktail fa-5x"></i>
                  <q-card-section>
                    <div class="text-h6">Gin</div>
                    <div class="q-pa-md text-subtitle2">Now Studing</div>
                    <q-btn color="black" :loading="loading1" label="check" @click="paging" />
                  </q-card-section>
                </q-card>
             </div>
          </q-tab-panel>

          <q-tab-panel name="tools">
            <div class="text-h4 q-mb-md">TOOLS</div>
             <div class="q-pa-md row items-start q-gutter-md">
                <q-card class="knowledge__card">
                  <i class="q-pa-md knowledge__card--icon fab fa-github fa-5x"></i>
                  <q-card-section>
                    <div class="text-h6">GIT</div>
                    <div class="q-pa-md text-subtitle2">Three Years and more</div>
                    <q-btn color="black" :loading="loading1" label="check" @click="paging" />
                  </q-card-section>
                </q-card>
                <q-card class="knowledge__card">
                  <i class="q-pa-md knowledge__card--icon fab fa-quora fa-5x"></i>
                  <q-card-section>
                    <div class="text-h6">quasar</div>
                    <div class="q-pa-md text-subtitle2">One Years and more</div>
                    <q-btn color="black" :loading="loading1" label="check" @click="paging" />
                  </q-card-section>
                </q-card>
                <q-card class="knowledge__card">
                  <i class="q-pa-md knowledge__card--icon fab fa-android fa-5x"></i>
                  <q-card-section>
                    <div class="text-h6">CORDOVA</div>
                    <div class="q-pa-md text-subtitle2">One Months and more</div>
                    <q-btn color="black" :loading="loading1" label="check" @click="paging" />
                  </q-card-section>
                </q-card>
                <q-card class="knowledge__card">
                  <i class="q-pa-md knowledge__card--icon fab fa-stripe-s fa-5x"></i>
                  <q-card-section>
                    <div class="text-h6">STRUTS</div>
                    <div class="q-pa-md text-subtitle2">One Years and more</div>
                    <q-btn color="black" :loading="loading1" label="check" @click="paging" />
                  </q-card-section>
                </q-card>
                <q-card class="knowledge__card">
                  <i class="q-pa-md knowledge__card--icon fas fa-cocktail fa-5x"></i>
                  <q-card-section>
                    <div class="text-h6">Gin</div>
                    <div class="q-pa-md text-subtitle2">Now Studing</div>
                    <q-btn color="black" :loading="loading1" label="check" @click="paging" />
                  </q-card-section>
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
      tab: 'clientside',
      splitterModel: 20,
      loading1: false
    }
  }
}
</script>
