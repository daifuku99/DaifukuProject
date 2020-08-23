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
            My name is daiki fukushima. <br>
            Work as Engineer, mainly server side. <br>
            <br>
            ・Like language is under <br>
            ◇server side : Java, Go, Python, Ruby. <br>
            ◇client side : javaScript, typeScript, HTML, css, scss, Json. <br>
            <br>
            ・Good at Flamework <br>
            ◇server side : SpringBoot, gin, pyramid, onRails. <br>
            ◇client side : Vue.js, quasar, bootStrap. <br>
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
            ・My Email Address <br>
            <br>
            fukushima9952@gmail.com <br>
            <br>
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
      right: false
    }
  }
}
</script>
