<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="bg-black text-white">
        <q-btn
          flat
          round
          dense
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        >
        </q-btn>
        <q-toolbar-title>
          Daifuku Projects
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-10"
    >
      <q-list>
        <q-item-label header class="text-white">
          In Site Links
        </q-item-label>
        <InsiteLink
          v-for="link in insiteLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
      <q-list>
        <q-item-label header class="text-white">
          Outside Links
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'
import InsiteLink from 'components/InsiteLink.vue'
export default {
  name: 'MainLayout',
  components: {
    EssentialLink,
    InsiteLink
  },
  data () {
    return {
      leftDrawerOpen: false,
      insiteLinks: [
        {
          title: 'Home',
          caption: 'Home Page',
          icon: 'home',
          link: '/'
        },
        {
          title: 'Profiles',
          caption: 'Who is Daifuku?',
          icon: 'face',
          link: '/Profiles'
        },
        {
          title: 'Knowledge',
          caption: 'My Knowledge',
          icon: 'school',
          link: '/Knowledge'
        }
      ],
      essentialLinks: [
        {
          title: 'Github',
          caption: 'github.com/daifuku99/DaifukuProject',
          icon: 'code',
          link: 'https://github.com/daifuku99/DaifukuProject'
        },
        {
          title: 'Twitter',
          caption: '@99_daiki',
          icon: 'rss_feed',
          link: 'https://twitter.com/99_daiki'
        },
        {
          title: 'Quasar Awesome',
          caption: 'Community Quasar projects',
          icon: 'favorite',
          link: 'https://awesome.quasar.dev'
        }
      ]
    }
  }
}
</script>
