<template>
  <div :class="['footer', { 'footer-black': isBlack }]" >
    <div :class="['footer_block', { 'footer_block-black': isBlack }]">
      <div class="footer_block-logo">
        <img class="footer-logo" src="/icons/logoBlack.svg" v-if="$route.path == '/'">
        <img class="footer-logo" src="/icons/logoWhite.svg" v-if="$route.path == '/services' || $route.path == '/projects' || $route.path == '/achievements'">
      </div>
    <div :class="['footer_block-item', { 'footer_block-item-black': isBlack }]">
      <div class="block-dubai">
        <p style="font-weight: bold">Dubai, UAE</p>
        <p>Sultan Business Centre,<br>Office 410.<br>Oud Metha,<br>Dubai</p>
      </div>
      <div class="block-turkey">
        <p style="font-weight: bold">Istanbul, Turkey</p>
        <p>Torn Business Center,<br>Office 74а/205,<br>Buyukdere Cd. Fulya mah,<br>Sisli/Istanbul</p>
      </div>
      <div class="block-turkmenistan">
        <p style="font-weight: bold">Ashgabat, Turkmenistan</p>
        <p>Paytagt Business Center,<br>6th Floor,<br>1945 street</p>
      </div>

      <div :class="['footer_block-item--mail', { 'footer_block-item--mail-black': isBlack }]">
        <p style="font-weight: bold">Contact Us</p>
        <p>Email:<a href="mailto: info@sman-group.com" :class="['footer_block-mail', { 'footer_block-mail-black': isBlack }]">info@sman-group.com></a></p>
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
@media screen and (max-width: 720px) {
  .footer_block {
    flex-direction: column;
  }
  .footer_block-item{
    flex-direction: column;
    width: 100%;
    text-align: center;
  }
  .footer_block-logo {
    text-align: center;
    width: 100%;
    padding: 30px;
  }
  .footer-logo {
    width: 50%;
  }
}
@media screen and (min-width: 720px) {
  .footer_block-item {
    width: 80%;
    display: flex;
    justify-content: space-around;
  }

  .footer_block-logo {
    height: 100%;
    width: 20%;
    padding: 20px;
  }
  .footer-logo {
    width: 100%;
  }
}

.block-dubai{
  padding: 30px;
}
.block-turkey{
  padding: 30px;
}
.block-turkmenistan{
  padding: 30px;
}
.footer_block-item--mail{
  text-align: center;
  padding: 30px;
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
