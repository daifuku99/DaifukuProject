<template>
  <q-page>
    <q-list bordered class="profiles rounded-borders q-pa-xl">
      <q-expansion-item
        expand-separator
        icon="perm_identity"
        label="Daifuku_Profiles"
        caption="Who is Daifuku?"
        class="profiles__label"
      >
        <q-card>
          <q-card-section class="profiles__text">
            <p>My name is daiki fukushima. </p>
            <p>Work as Engineer, mainly client side. </p>
              <p class="profiles__text--title">
                <q-tree
                  :nodes="language"
                  accordion
                  node-key="label"
                />
                <q-tree
                  :nodes="framework"
                  accordion
                  node-key="label"
                />
              </p>
            Nice to meet you!!! :)
          </q-card-section>
        </q-card>
      </q-expansion-item>

      <q-expansion-item
        expand-separator
        icon="drafts"
        label="request form"
        class="profiles__label"
      >
        <q-card>
          <q-card-section class="profiles__text">
            <p class="profiles__text--title">・My Email Address</p>
            <p class="profiles__text--address">{{ mailAdress }}</p>
            <p class="profiles__text--notion">Don't mess around //<br></p>
          </q-card-section>
        </q-card>
      </q-expansion-item>

      <q-expansion-item icon="assessment" label="Additional Information" disable>
        <q-card>
          <q-card-section>
            TODO: Additional Information
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </q-list>
    <router-view/>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      left: false,
      right: false,
      mailAdress: 'fukushima9952@gmail.com',
      language: [
        {
          label: 'Like languages ',
          icon: 'check_circle',
          children: [{
            label: '◇server side :',
            children: [
              { label: 'Java' },
              { label: 'Go' },
              { label: 'Python' },
              { label: 'Ruby' }
            ]
          },
          {
            label: '◇client side :',
            children: [
              { label: 'javaScript' },
              { label: 'typeScript' },
              { label: 'HTML' },
              { label: 'css' },
              { label: 'scss' },
              { label: 'JSON' }
            ]
          }]
        }
      ],
      framework: [
        {
          label: 'Good at Frameeork',
          icon: 'check_circle',
          children: [
            {
              label: '◇server side :',
              children: [
                { label: 'SpringBoot' },
                { label: 'Gin' },
                { label: 'pyramid' },
                { label: 'onRails' }
              ]
            }, {
              label: '◇client side :',
              children: [
                { label: 'Vue.js' },
                { label: 'quasar' },
                { label: 'bootStrap' }]
            }
          ]
        }
      ]
    }
  }
}
</script>
