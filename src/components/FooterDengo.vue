<template>
  <div :class="['footer', { 'footer-black': isBlack }]" >
    <div :class="['footer_block', { 'footer_block-black': isBlack }]">
      <div class="main-block">
      <div class="first-block">
      <div class="footer_block-logo">
        <img class="footer-logo" src="/icons/logoBlack.svg" v-if="$route.path == '/'">
        <img class="footer-logo-black" src="/icons/logoWhite.svg" v-if="$route.path == '/services' || $route.path == '/projects' || $route.path == '/achievements'">
      </div>
      <div :class="['footer_block-item', { 'footer_block-item-black': isBlack }]">
        <div class="block-dubai" @click="goToDubai">
          <p style="font-weight: bold">Dubai, UAE</p>
          <p>Office No. 078,<br>Alothman BLDG -<br>Eyal Nasser 5<br>Dubai, UAE</p>
        </div>
      </div>
    </div>
      <div class="second-block">
<!--    <div :class="['footer_block-item', { 'footer_block-item-black': isBlack }]">
      <div class="block-turkmenistan" @click="goToTurkmenistan">
        <p style="font-weight: bold">Ashgabat, Turkmenistan</p>
        <p>Paytagt Business Center,<br>6th Floor,<br>1945 street</p>
      </div>
    </div>-->
        <div :class="['footer_block-item--mail', { 'footer_block-item--mail-black': isBlack }]">
          <p style="font-weight: bold">Contact Us</p>
          <p>Email:<a href="mailto: info@degno-group.com" :class="['footer_block-mail', { 'footer_block-mail-black': isBlack }]">info@degno-group.com</a></p>
        </div>
      </div>
      </div>

  </div>
    <div class="block-rights">
      <p style="margin: 0">© Degno Group | All Rights Reserved 2022</p>
    </div>
  </div>
</template>

<script>
import {onMounted, watch} from 'vue'

export default {
  data() {
    return {
      isBlack: false
    }
  },
  methods: {
    goToDubai() {
      window.location.href = 'https://www.google.com/maps/place/Sultan+Business+Centre/@25.233556,55.3087118,17z/data=!3m1!4b1!4m5!3m4!1s0x3e5f42cc28ba49af:0x57bbd7cd1311987e!8m2!3d25.233556!4d55.3087118?hl=ru&authuser=0'
    },
    goToTurkey() {
      window.location.href = 'https://www.google.com/maps/place/Torun+Center/@41.0655397,28.9638999,14z/data=!4m10!1m2!2m1!1sIstanbul,+Turkey++Torn+Business+Center,+Office+74а%2F205,+Buyukdere+Cd.+Fulya+mah,+Sisli%2FIstanbul!3m6!1s0x14cab6ff113a5661:0x41e9a778a4dd953b!8m2!3d41.0655397!4d28.9989188!15sCmBJc3RhbmJ1bCwgVHVya2V5ICBUb3JuIEJ1c2luZXNzIENlbnRlciwgT2ZmaWNlIDc00LAvMjA1LCBCdXl1a2RlcmUgQ2QuIEZ1bHlhIG1haCwgU2lzbGkvSXN0YW5idWxaXCJaaXN0YW5idWwgdHVya2V5IHRvcm4gYnVzaW5lc3MgY2VudGVyIG9mZmljZSA3NNCwIDIwNSBidXl1a2RlcmUgY2QgZnVseWEgbWFoIHNpc2xpIGlzdGFuYnVskgEQY29ycG9yYXRlX29mZmljZZoBI0NoWkRTVWhOTUc5blMwVkpRMEZuU1VOb05Fb3lURVpSRUFF4AEA!16s%2Fg%2F11q4c621wc'
    },
    goToTurkmenistan() {
      window.location.href = 'https://www.google.com/maps/place/Бизнес+центр+%22Пайтагт%22/@37.9181577,58.3546466,13z/data=!4m10!1m2!2m1!1sAshgabat,+Turkmenistan++Paytagt+Business+Center,+1945+street!3m6!1s0x3f6ffd262d2b4961:0xfeeb495406a8d1c4!8m2!3d37.8941058!4d58.3897555!15sCjxBc2hnYWJhdCwgVHVya21lbmlzdGFuICBQYXl0YWd0IEJ1c2luZXNzIENlbnRlciwgMTk0NSBzdHJlZXSSAQ9idXNpbmVzc19jZW50ZXLgAQA!16s%2Fg%2F11k_ns9d94?hl=ru&authuser=0'
    }
  },
  props: {
    black: {
      type: Boolean,
      default: false
    }
  },
  onMounted() {
    this.isBlack = this.black;
  },
  watch: {
    $route(to, from) {
      if (to.path === '/services' || to.path === '/projects' || to.path === '/achievements') {
        this.isBlack = true;
      } else {
        this.isBlack = this.black;
      }
    }
  }
}
</script>

<style scoped>
.footer {
  display: flex;
  align-items: center;
  background-color: white;
  flex-direction: column;
}
.footer_block {
  display: flex;
  justify-content: center;
  color: black;
  width: 100%;
  border-bottom: solid 1px black;
}
.main-block {
  display: flex;
  justify-content: space-around;
}
.first-block{
  display: flex;
}
.footer_block-item{
  justify-content: end;
}
@media screen and (max-width: 920px) {
  .footer_block{
    width: 100%;
    display: flex;
    flex-flow: column;
  }
  .footer_block-black{
    width: 100%;
    display: flex;
    flex-flow: column;
  }
  .main-block{
    display: flex;
    width: 100%;
  }
  .footer_block-item{
    text-align: center;
  }
  .footer_block-item-black{
    text-align: center;
  }
  .footer_block-logo {
    text-align: center;
    padding: 30px;
    height: 197px;
    width: 50%;
  }
  .footer-logo {
  }
  .footer_block-item--mail{
    align-self: center;
  }
  .footer_block-item--mail-black{
    align-self: center;
  }
  .first-block{
    width: 100%;
  }
  .footer-logo-black{
    width: 100%;
  }
}
@media screen and (max-width: 427px) {
  .footer_block-logo {
    display: flex;
    align-items: center;
    height: 218px;
  }
  .footer-logo-black{
    width: 100%;
  }
  .footer-logo{
    width: 100%;
  }
}
@media screen and (max-width: 429px) {
  .footer_block-logo {
    height: 218px;
    width: 50%;
  }
  .main-block{
    flex-flow: column;
  }
}

@media screen and (min-width: 920px) {
  .footer_block-item {
    display: flex;
  }
  .footer_block-item-black {
    display: flex;
  }
  .footer_block{
    display: flex;
  }
  .footer_block-black{
    display: flex;
  }
  .main-block{
    text-align: center;
    align-self: center;
  }
  .footer_block-logo {
    height: 218px;
    padding: 20px;
  }
  .first-block{
    display: flex;
  }
  .second-block{
    display: flex;
  }
  .footer-logo {
    height: 130px;
  }
  .footer-logo-black {
    height: 130px;
  }
  .footer_block-item--mail-black{
    width: min-content;
  }
}

.block-dubai{
  padding: 30px;
  cursor: pointer;
  text-align: left;
}
.block-turkey{
  cursor: pointer;
  padding: 30px;
  text-align: left;
}
.block-turkmenistan{
  padding: 30px;
  cursor: pointer;
  text-align: left;
}
.footer_block-item--mail{
  padding: 30px;
  text-align: left;
}
.footer_block-item--mail-black{
  padding: 30px;
  text-align: left;
}
.block-rights{
  height: 50px;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
}
.footer_block-mail{
  text-decoration: none;
  color: black;
}
.footer_block-mail-black{
  text-decoration: none;
  color: white;
}
.footer-black {
  background-color: black;
  color: white;
}
.footer_block-black{
  color: white;
  border-bottom: solid 1px white;
}
.footer_block-item-black{
  color: white;
}
.footer_block-item--mail-black{
  color: white;
}
</style>
