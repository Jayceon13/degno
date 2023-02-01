<template>
  <q-page class="">
    <q-parallax :height="700" class="parallax">
      <template v-slot:media>
        <video :height="1200"  class="video-background" poster="https://cdn.quasar.dev/img/polina.jpg" playsinline autoplay loop muted>
          <source type="video/mp4" src="/video/videobgInd.mp4">
        </video>
      </template>
      <p style="color: white">We offer a range of services, including consulting, agency and project management, to help clients and partners grow their businesses effectively. </p>
      <div class="arrow-block">
        <img src="/icons/Arrow.svg"/>
      </div>
    </q-parallax>
    <div class="services-page">
      <div class="first-block">
      <p>Our highly skilled team has global expertise and can support the successful execution of projects, regardless of their complexity.
        Our company, SMAN, is adaptable in negotiations and provides expert guidance in business decision making. With a presence in Dubai, Moscow, Istanbul, and Ashgabat, we offer comprehensive regional coverage.
      </p>
      </div>
      <div class="second-block">
      <p>Our key element is the high level of support towards the client, that is why we offer:</p>
        <li>Meetings & negotiations</li>
        <li>Supplier & contractor search</li>
        <li>Project implementation, support & coordination</li>
        <li>Marketing, development & brand adaptation</li>
        <li>Project and client search</li>
        <li>Design, delivery & commissioning</li>
        <li>Search for alternative solutions & adaptations</li>
        <li>Risk Assessment</li>
        <p>Supporting and guiding your requirement from the beginning to the very end. </p>
        </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ServicesPage'
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

.services-page{
  display: flex;
}
</style>
