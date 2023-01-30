<template>
  <q-layout view="lHh Lpr lFf">
    <header-dengo> </header-dengo>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import HeaderDengo from "components/HeaderDengo.vue";

export default defineComponent({
  name: 'MainLayout',

  components: {
    HeaderDengo,
  },
})
</script>

<style scoped>

</style>
