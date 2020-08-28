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
            <p class="profiles__text--title">・Like languages </p>
                <q-tree
                  :nodes="language"
                  accordion
                  node-key="label"
                  :expanded.sync="expanded"
                />
            <p>◇server side : Java, Go, Python, Ruby. </p>
            <p>◇client side : javaScript, typeScript, HTML, css, scss, Json. </p>
            <p class="profiles__text--title">・Good at Flamework </p>
            <p>◇server side : SpringBoot, gin, pyramid, onRails. </p>
            <p>◇client side : Vue.js, quasar, bootStrap. </p>
            <br>
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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
            commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
            eveniet doloribus ullam aliquid.
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
          label: '・Like languages ',
          icon: 'check_circle',
          children: [{
            label: '◇server side :',
            icon: 'check_circle'
          }]
        }
      ]
    }
  }
}
</script>
