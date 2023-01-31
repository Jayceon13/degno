<template>
  <div class="header"
       @mouseleave="showList = false">
    <div class="hamburger hamburger--elastic">
      <div class="hamburger-box" @click="blockBurgerMenu">
        <div class="hamburger-inner"></div>
      </div>
    </div>
    <div class="buttons-block" >
      <btn
        @click="$router.push('/')"
        :class="$route.path === '/' ? 'active-button' : 'buttons-header'"
      >
        Home
      </btn>

      <btn
        @click="$router.push('/services')"
        :class="$route.path === '/services' ? 'active-button' : 'buttons-header'"
      >
        Locations & Services
      </btn>
      <div class="projects-btn"
      style="display: flex; flex-direction: column">
      <btn
        @mouseover="showList = true"
        class="buttons-header"
      >
        Achievements and Projects

      </btn>
        <transition name="list">
      <div v-if="showList"
           class="block-projects-1"
           @mouseleave="showList = false">
        <btn
          @click="$router.push('/projects'); showList = false"
          :class="$route.path === '/projects' ? 'active-button' : 'buttons-header'"
        >
          Projects
        </btn>
        <btn
          @click="$router.push('/projects'); showList = false"
          :class="$route.path === '/projects' ? 'active-button' : 'buttons-header'"
        >
          Achievements
        </btn>
      </div>
        </transition>
      </div>
      <btn
        @click="$router.push('/contacts')"
        :class="$route.path === '/contacts' ? 'active-button' : 'buttons-header'"
      >
        Contacts
      </btn>
    </div>
      <div class="logo-block">
        <img src="/icons/LOGO.svg">
      </div>
  </div>
  <transition name="burger-animation">
    <div class="burgerMenuLeft"
         v-if="showBurgerMenu">

      <div @click.stop class="my-btn" style="display: flex; align-items: center">
        <div class="block-x">
          <btn
            @click="blockBurgerMenu"
            class="xicon-btn"
          >
            <img class="img-x" src="/icons/xicon.svg">
          </btn>
        </div>
        <div class="block-content">
          <btn
            @click="() => { $router.push('/'); hideBlock() }"
            class="buttons-header"
          >
            HOME
          </btn>
          <btn
            @click="() => { $router.push('/services'); hideBlock() }"
            class="buttons-header"
          >
            LOCATIONS & SERVICES
          </btn>
          <btn
            @click="() => { $router.push('/contacts'); hideBlock() }"
            class="buttons-header"
          >
            CONTACTS
          </btn>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import {ref} from 'vue'

export default {
  name: 'HeaderDengo',
  components: {
  },
  data () {
    return {
      showList: false
    }
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
    flex-direction: column;
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
  .block-projects-1{
    width: 200px;
    background: #062141;
    position: absolute;
    margin-top: 20px;
  }
  .list-enter-active, .list-leave-active {
    transition: all 1s;
  }
  .list-enter {
    opacity: 0;
    transform: translateY(10px);
  }
  .list-leave-to {
    opacity: 0;
    transform: translateY(-10px);
  }
  .my-btn {
    height: 100%;
    width: 100%;
    display: flex;
    flex-flow: row;
  }
  .menu{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }

  .burgerMenuLeft{
    position: absolute;
    background: black;
    z-index: 9999;
    height: 100%;
    animation: slide-left 1s ease-in-out forwards;
    width: 100%;
  }
  @keyframes slide-left {
    0%{
      transform: translateX(100%);
      opacity: 0;
    }
    100%{
      transform: translateX(0%);
      opacity: 1;
    }
  }

  .burgerMenuRight{
    position: absolute;
    background: black;
    z-index: 9999;
    height: 100%;
    width: 100%;
    animation: x-left 1s ease-in-out forwards;
  }
  @keyframes x-left {
    0%{
      width: 100%;
      opacity: 0;
    }
    100%{
      width: 60px;
      opacity: 1;
    }
  }

  .q-btn {
    height: auto;
    width: auto;
    margin: 6px;
  }

  .q-btn:before {
    box-shadow: none;
  }
  span.q-btn__content {
    display: flex;
    flex-direction: column;
  }
  .BtnLink-contact {

    margin: 6px 20px 0px;
    font-size: 10px;
    text-transform: none;
  }
  .my-btn{
    font-size: 18px;
    margin: 0;
    font-family: 'PT Sans', sans-serif;
  }
  .my-btn-services {
    font-size: 12px;
    margin: 2px 0px;
  }
  @media (min-height: 736px) {
    .logo {
      margin: 70px 0px 0px;
    }
  }
  .xicon-btn{
    cursor: pointer;
  }
  .img-x{
    margin-top: 20px;
    width: 13px;
  }
  .block-x{
    width: 60px;
    height: 100%;
    background-color: #9c9068;
    animation: x-left 1s ease-in-out forwards;
    text-align: center;
  }
  @keyframes slide-right {
    0%{
      width: 100%;
      opacity: 0;
    }
    100%{
      width: 60px;
      opacity: 1;
    }
  }
  .block-content{
    align-self: flex-start;
  }

  .block-content .buttons-header{
    display: flex;
    color: white;
    transition: color 1s;
    background: transparent;
    margin-top: 2em;
    margin-left: 20px;
  }
  .block-content .buttons-header:hover {
    color: #4fdbe8;
    background-color: transparent;
    cursor: pointer;
  }
  .burger-animation-leave-active {
    animation: slide-right 1s ease-in-out forwards;
  }
  @keyframes slide-right {
    0%{
      transform: translateX(0%);
      opacity: 1;
    }
    100%{
      transform: translateX(100%);
      opacity: 0;
    }
  }
</style>
