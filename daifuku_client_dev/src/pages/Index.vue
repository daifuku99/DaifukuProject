<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md q-gutter-sm">
      <q-btn
        label="Let's Tamatebako"
        color="primary"
        @click="confirm = true"
      />
      <q-dialog
        v-model="confirm"
        persistent
      >
        <q-card>
          <q-card-section class="row items-center">
            <q-avatar
              color="primary"
              text-color="white"
            />
            <span class="q-ml-sm">Can you permit to connect other web site to Google?</span>
          </q-card-section>

          <q-card-actions align="right">
            <q-btn
              flat
              label="Cancel"
              color="primary"
              v-close-popup
            />
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
    <div class="messageBtn">
      <q-btn
        @click="$q.notify('nyao')"
        color="primary"
        label="Today_Message"
      />
    </div>
  </q-page>
</template>

<script>
import { Notify } from 'quasar'

// ...
Notify.create('My message')

export default {
  // eslint-disable-next-line quotes
  name: "PageIndex",
  methods: {
    showNotification () {
      this.$q.notify('Some other message')
    },
    openWindow: function () {
      const url = 'https://google.com'
      window.open(url, '_blank', 'width=1024,height=768,scrollbars=yes,resizable=yes')
    }
  },
  data () {
    return {
      confirm: false,
      link: 'https://www.google.co.jp/'
    }
  }
  // eslint-disable-next-line semi
}
</script>
