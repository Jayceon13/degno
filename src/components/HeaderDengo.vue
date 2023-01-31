<template>
  <div class="header">
    <div class="hamburger hamburger--elastic">
      <div class="hamburger-box" @click="blockBurgerMenu">
        <div class="hamburger-inner"></div>
      </div>
    </div>
    <div class="buttons-block">
      <btn
        @click="$router.push('/')"
        :class="$route.path === '/' ? 'active-button' : 'buttons-header'"
      >
        Home
      </btn>
      <btn
        @click="$router.push('/about')"
        :class="$route.path === '/about' ? 'active-button' : 'buttons-header'"
      >
        About
      </btn>
      <btn
        @click="$router.push('/services')"
        :class="$route.path === '/services' ? 'active-button' : 'buttons-header'"
      >
        Services
      </btn>
    </div>
      <div class="logo-block">
        <img src="/icons/LOGO.svg">
      </div>
    <div class="buttons-block">
        <btn
          @click="$router.push('/projects')"
          :class="$route.path === '/projects' ? 'active-button' : 'buttons-header'"
        >
          Projects
        </btn>
        <btn
          @click="$router.push('/partners')"
          :class="$route.path === '/partners' ? 'active-button' : 'buttons-header'"
        >
          Partners
        </btn>
        <btn
          @click="$router.push('/contacts')"
          :class="$route.path === '/contacts' ? 'active-button' : 'buttons-header'"
        >
          Contacts
        </btn>
    </div>
  </div>
  <burger-menu v-model:show="showBurgerMenu"></burger-menu>
</template>

<script>
import {ref} from 'vue'
import burgerMenu from "components/burgerMenu.vue";

export default {
  name: 'HeaderDengo',
  components: {
    burgerMenu,
  },
  setup() {
    const showBurgerMenu = ref(false)
    return {
      showBurgerMenu,
      blockBurgerMenu() {
        showBurgerMenu.value = !showBurgerMenu.value;
      }
    }
  }
}
</script>

<style scoped>

  .header{
    position: absolute;
    display: flex;
    width: 100vw;
    z-index: 999;
    align-items: center;
  }
  .buttons-block{
    display: none;
  }
@media screen and (min-width: 730px){
  .header{
    padding: 64px 150px 0px;
    place-content: center;
  }
  .buttons-block{
    display: flex;
    height: 100%;
  }
  .buttons-block .buttons-header{
    display: flex;
    color: white;
    transition: color 1s;
    background: transparent;
    margin: 0 1em;
  }
  .buttons-block .buttons-header:hover {
    color: #4fdbe8;
    background-color: transparent;
    cursor: pointer;
  }
  .logo-block{
    display: block;
    width: 288px;
    height: 166px;
  }
  .logo-block img{
    width: 288px;
    height: 166px;
  }
  .active-button{
    color: #4fdbe8;
    cursor: pointer;
    margin: 0 1em;
  }
}

.menu{
  display: none;
}
  @media screen and (max-width: 730px){
    .header{
      display: flex;
      padding: 20px;
      flex-direction: column;
      align-items: center;
    }
  .menu {
    display: flex;
    flex-direction: column;
    color: black;
  }
    .logo-block{
      display: block;
      width: 186px;
      height: 166px;
    }
    .logo-block img{
      width: 186px;
      height: 166px;
    }

  .menu_burger{
    display: flex;
    justify-content: space-between;
  }
  .menu_burger-button {
    padding: 10px 30px;
    font-size: 20px;
    color: white;

  }

  .q-btn:before {
    box-shadow: none;
  }
  .logo_burger {
    width: 80px;
    margin: 20px 30px;
  }

  .hamburger {
    align-self: flex-end;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition-property: opacity, filter;
    transition-duration: 0.15s;
    transition-timing-function: linear;
    font: inherit;
    color: inherit;
    text-transform: none;
    background-color: transparent;
    border: 0;
    overflow: visible;
    margin: 0 0 0 30px;
  }

  .hamburger:hover {
    opacity: 0.7;
  }

  .hamburger.is-active:hover {
    opacity: 0.7;
  }

  .hamburger.is-active .hamburger-inner,
  .hamburger.is-active .hamburger-inner::before,
  .hamburger.is-active .hamburger-inner::after {
    background-color: white;
  }

  .hamburger-box {
    width: 40px;
    height: 24px;
    display: inline-block;
    position: relative;
  }

  .hamburger-inner {
    display: block;
    top: 50%;
    margin-top: -2px;
  }

  .hamburger-inner, .hamburger-inner::before, .hamburger-inner::after {
    width: 40px;
    height: 4px;
    background-color: white;
    border-radius: 4px;
    position: absolute;
    transition-property: transform;
    transition-duration: 0.15s;
    transition-timing-function: ease;
  }

  .hamburger-inner::before, .hamburger-inner::after {
    content: "";
    display: block;
  }

  .hamburger-inner::before {
    top: -10px;
  }

  .hamburger-inner::after {
    bottom: -10px;
  }

  .hamburger--elastic .hamburger-inner {
    top: 2px;
    transition-duration: 0.275s;
    transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  .hamburger--elastic .hamburger-inner::before {
    top: 10px;
    transition: opacity 0.125s 0.275s ease;
  }

  .hamburger--elastic .hamburger-inner::after {
    top: 20px;
    transition: transform 0.275s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  .hamburger--elastic.is-active .hamburger-inner {
    transform: translate3d(0, 10px, 0) rotate(135deg);
    transition-delay: 0.075s;
  }

  .hamburger--elastic.is-active .hamburger-inner::before {
    transition-delay: 0s;
    opacity: 0;
  }

  .hamburger--elastic.is-active .hamburger-inner::after {
    transform: translate3d(0, -20px, 0) rotate(-270deg);
    transition-delay: 0.075s;
  }
  }
</style>
