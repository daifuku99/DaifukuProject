<template>
  <q-page class="index flex flex-center">
  <div class="q-pa-md">
    <div class="q-gutter-md">
      <q-carousel
        v-model="slide"
        transition-prev="scale"
        transition-next="scale"
        swipeable
        animated
        control-color="white"
        navigation
        padding
        arrows
        height="500px"
        class="index__carousel bg-dark text-white shadow-1 rounded-borders"
      >
        <q-carousel-slide name="style" class="column flex-center">
          <q-icon name="account_box" size="100px" />
          <div class="index__carousel--text q-mt-md text-center">
            {{ Slide1 }}
            <div class="q-pa-md messageBtn">
              <q-btn :loading="loading1" color="blue" label="Profiles" @click="Profiles"/>
            </div>
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="tv" class="index__carousel column no-wrap flex-center">
          <q-icon name="mood" size="100px" />
          <div class="index__carousel--text q-mt-md text-center">
            {{ Slide2 }}
             <div class="q-pa-md messageBtn">
              <q-btn :loading="loading1" color="blue" label="Knowledge" @click="Knowledge"/>
            </div>
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="layers" class="index__carousel column no-wrap flex-center">
          <q-icon name="sms" size="100px" />
          <div class="index__carousel--text q-mt-md text-center">
            {{ Slide3 }}
                <div class="q-pa-md q-gutter-sm">
                  <q-btn label="Let's Tamatebako" color="blue" @click="confirm = true" />
                    <q-dialog v-model="confirm" persistent>
                      <q-card>
                        <q-card-section class="row items-center">
                          <q-icon name="warning" size="50px" color="red"/>
                            <span class="q-ml-sm">Can you permit to connect other web site to Google?</span>
                        </q-card-section>
                        <q-card-actions align="right">
                          <q-btn flat label="Cancel" color="primary" v-close-popup />
                          <q-btn
                            flat
                            label="Let's Go"
                            color="primary"
                            v-close-popup,
                            v-on:click="openWindow"
                          />
                        </q-card-actions>
                      </q-card>
                    </q-dialog>
                </div>
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="map" class="column no-wrap flex-center">
          <q-icon name="terrain" size="100px" />
          <div class="index__carousel--text q-mt-md text-center">
            {{ Slide4 }}
            <div class="q-pa-md messageBtn">
              <q-btn v-on:click="showNotif" color="blue" label="Today_Message" />
            </div>
          </div>
        </q-carousel-slide>
      </q-carousel>
    </div>
  </div>
  </q-page>
</template>

<script>
import { mapState } from 'vuex'
import * as types from '../store/mutation-types'

export default {
  name: 'PageIndex',
  methods: {
    showNotification () {
      this.$q.notify('Some other message')
    },
    openWindow: function () {
      const url = 'https://google.com'
      window.open(
        url,
        '_blank',
        'width=1024,height=768,scrollbars=yes,resizable=yes'
      )
    },
    showNotif () {
      this.$q.notify({
        message: this.$store.getters.getMessageByMessageId(1),
        color: 'black'
      })
      console.log('getters:', this.$store.getters.getMessageByMessageId(1))
    },
    Profiles () {
      this.$router.push('/Profiles')
    },
    Knowledge () {
      this.$router.push('/Knowledge')
    }
  },
  data () {
    return {
      confirm: false,
      loading1: false,
      link: 'https://www.google.co.jp/',
      slide: 'style',
      Slide1: 'This  Website  is  Daifuku  HomePages.  Who  is  Daifuku?',
      Slide2: 'Here  is  My  Knowledge.  :)   Teach  me  everything  .  ;)',
      Slide3: 'Tamatebako makes you to search other keywords not use in life. Try It!!',
      Slide4: 'Please tap  the  button  ,  return  Todays  message  !!'
    }
  },
  computed: {
    ...mapState(['messages'])
  },
  mounted () {
    this.$store.dispatch(types.GET_TODAY_MESSAGE)
  }
}
</script>
