<template>
  <q-page class="">
    <q-parallax :height="700" class="parallax">
      <template v-slot:media>
        <video :height="1200"  class="video-background" poster="https://cdn.quasar.dev/img/polina.jpg" playsinline autoplay loop muted>
          <source type="video/mp4" src="/video/videobgInd.mp4">
        </video>
      </template>
      <p style="color: white">Welcome to Sman Group
        We are leading oil & gas and chemical industry specialists</p>
      <div class="arrow-block">
        <img src="/icons/Arrow.svg"/>
      </div>
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
  name: 'ContactsPage'
})
</script>

<style scoped>
p {
  font-size: 20px;
}
.parallax{
  z-index: -1;
  width: 100vw;
  height: 100vh;
}
.arrow-block{
  height: 40px;
  position: relative;
}
.arrow-block img{
  height: 17px;
  position: absolute;
  bottom: 0;
  animation: moveImage 3s linear infinite;
}
@keyframes moveImage{
  0%{
    opacity: 0;
    bottom: 40px;
  }
  25%{
    opacity: 1;
  }
  75%{
    opacity: 1;
  }
  100%{
    opacity: 0;
    bottom: 0;
  }
}
</style>
