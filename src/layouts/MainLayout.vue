<template>
  <q-layout view="lHh Lpr lFf">
    <preloader-menu></preloader-menu>
    <header-dengo> </header-dengo>
    <q-page-container>
      <router-view />
    </q-page-container>
    <footer-dengo/>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import HeaderDengo from "components/HeaderDengo.vue";
import FooterDengo from "components/FooterDengo";
import PreloaderMenu from "components/PreloaderMenu.vue";

export default defineComponent({
  name: 'MainLayout',

  components: {
    FooterDengo,
    HeaderDengo,
    PreloaderMenu
  },
})
</script>

<style scoped>

</style>
