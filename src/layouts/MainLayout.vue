<template>
  <q-layout view="lHh Lpr lFf">
    <preloader-menu></preloader-menu>
    <header-dengo> </header-dengo>
    <q-page-container>
      <router-view />
    </q-page-container>
    <footer-dengo class="footer" v-if="showFooter"/>
  </q-layout>
</template>
<script>
import { defineComponent, ref, onMounted, nextTick } from 'vue'
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
  setup() {
    const showFooter = ref(false)

    const handleScroll = () => {
      const body = document.body
      const html = document.documentElement
      const height = Math.max( body.scrollHeight, body.offsetHeight,
        html.clientHeight, html.scrollHeight, html.offsetHeight );

      if (window.pageYOffset + window.innerHeight >= height) {
        showFooter.value = true
        nextTick(() => {
          scrollDown()
        })
      }
    }

    const scrollDown = () => {
      if (window.innerWidth > 720) {
        const footer = document.querySelector('.footer')
        const start = window.pageYOffset
        const end = footer.offsetTop + footer.offsetHeight
        const duration = 300
        let startTime = null

        const step = (timestamp) => {
          if (!startTime) startTime = timestamp
          const progress = timestamp - startTime
          window.scrollTo(0, easeInOutQuad(progress, start, end, duration))
          if (progress < duration) {
            window.requestAnimationFrame(step)
          }
        }
        window.requestAnimationFrame(step)
      }
    }

    const easeInOutQuad = (t, b, c, d) => {
      t /= d/2
      if (t < 1) return c/2*t*t + b
      t--
      return -c/2 * (t*(t-2) - 1) + b
    }


    onMounted(() => {
      window.addEventListener('scroll', handleScroll)
    })

    return {
      showFooter,
      scrollDown
    }
  },
})
</script>
<style scoped>
  @media  screen and (min-width: 720px) {
    .footer {
      animation: slide-down 0.2s ease-in-out;
    }

    @keyframes slide-down {
      0% {
        z-index: -999;
        transform: translateY(-100%);
      }
      100% {
        z-index: 1;
        transform: translateY(0%);
      }
    }
  }
</style>
