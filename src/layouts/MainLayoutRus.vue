<template>
  <q-layout view="lHh Lpr lFf">
    <preloader-menu></preloader-menu>
    <header-dengo-rus> </header-dengo-rus>
    <q-page-container>
      <router-view />
    </q-page-container>
    <footer-dengo-rus class="footer"/>
  </q-layout>
</template>
<script>
import { defineComponent } from 'vue'
import HeaderDengoRus from "components/HeaderDengoRus.vue";
import FooterDengoRus from "components/FooterDengoRus.vue";
import PreloaderMenu from "components/PreloaderMenu.vue";

export default defineComponent({
  name: 'MainLayout',

  components: {
    FooterDengoRus,
    HeaderDengoRus,
    PreloaderMenu
  },
})
</script>
<style scoped>

</style>
