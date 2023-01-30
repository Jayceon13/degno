<template>
  <q-page class="">
    <q-parallax :height="700" class="parallax">
      <template v-slot:media>
        <video :height="1200"  class="video-background" poster="https://cdn.quasar.dev/img/polina.jpg" playsinline autoplay loop muted>
          <source type="video/mp4" src="/video/videobgInd.mp4">
        </video>
      </template>


    </q-parallax>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage'
})
</script>

<style scoped>
  .parallax{
    z-index: -1;
    width: 100vw;
    height: 100vh;
  }
  .video-background{

  }
</style>
