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
    <div class="achieve-page">
    <div class="block-achieve-1">
      <h3>1</h3>
      <p>Signing of the Memorandum of Understanding between KSB Group and UNDP Turkmenistan</p>
      <h3>2</h3>
      <p>Opening of the official KSB Group Showroom and Service Center in Ashgabat</p>
    </div>
    <div class="block-achieve-2">
      <h3>3</h3>
      <p>Implementation of the production of Sulphur-Bentonite based on IPCO technology in Turkmenistan</p>
      <h3>4</h3>
      <p>Organization of export deliveries of polymer products from Turkmenistan to China and Turkey</p>
    </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AchievementsPage'
})
</script>

<style scoped>
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
.achieve-page{
  display: flex;
  justify-content: center;
  background: white;
  width: 100%;
  height: 100%;
  padding: 100px;
}
h3{
  text-align: center;
}
.block-achieve-1{
  width: 40%;
  margin-right: 30px;
}
.block-achieve-2{
  width: 40%;
}

@media (max-width: 736px) {
  .achieve-page{
    display: flex;
    justify-content: center;
    flex-flow: column;
  }
  h3{
    text-align: center;
  }
  .block-achieve-1{
    width: 100%;
    margin: 0;
  }
  .block-achieve-2{
    width: 100%;
  }
  p{
    text-align: center;
  }
}
</style>
