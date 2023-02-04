<template>
  <div class="header">
    <div class="home-btn" v-if="$route.path !== '/'">
      <btn
        @click="$router.push('/')"
        style="cursor: pointer"
        >
        <img src="/icons/fireWhite.svg" alt="" style="width: 80px" >
      </btn>
    </div>
    <div class="hamburger hamburger--elastic">
      <div class="hamburger-box" @click="blockBurgerMenu">
        <div class="hamburger-inner"></div>
      </div>
    </div>
      <div class="logo-block" v-if="$route.path !== '/services'">
        <img alt="" src="/icons/logoWhite.svg">
      </div>
  </div>
  <transition name="burger-animation">
    <div class="burgerMenuLeft"
         v-if="showBurgerMenu">

      <div @click.stop class="my-btn" style="display: flex; align-items: center"
          >
        <div class="block-x">
          <btn
            @click="blockBurgerMenu"
            class="xicon-btn"
          >
            <img alt="" class="img-x" src="/icons/xicon.svg">
          </btn>
        </div>
        <div class="block-content"
          >
          <div class="buttons-block"
               @mouseenter="checkScreenWidth3"
               @mouseleave="showList3 = false">
          <btn
            @click="() => { $router.push('/'); blockBurgerMenu() }"
            class="buttons-header"
          >
            HOME
          </btn>
            <transition name="list-animation">
              <div v-if="showList3"
                   class="list2"
                   @click="showList3 = false">

                <btn
                  @click="() => { $router.push('/'); blockBurgerMenu(); blockShowList3()}"
                  :class="$route.path === '/' ? 'active-button' : 'buttons-header'"
                >
                  HOME
                </btn>

              </div>
            </transition>
          </div>
          <div class="buttons-block"
               @mouseenter="checkScreenWidth1"
               @mouseleave="showList1 = false">
          <btn
            @click="() => { $router.push('/services'); blockBurgerMenu(); }"
            class="buttons-header"
          >
            LOCATIONS & SERVICES
          </btn>
            <transition name="list-animation">
              <div v-if="showList1"
                   class="list2"
                   @click="showList1 = false">

                <btn
                  @click="() => { $router.push('/services'); blockBurgerMenu(); blockShowList1()}"
                  :class="$route.path === '/achievements' ? 'active-button' : 'buttons-header'"
                >
                  LOCATIONS & SERVICES
                </btn>

              </div>
            </transition>
          </div>
          <div class="buttons-block"
               @mouseenter="checkScreenWidth"
                @mouseleave="showList2 = false">
          <btn
            @click="showList2 = true"
            class="buttons-header"
          >
            ACHIEVEMENTSS & PROJECTS
          </btn>
          <transition name="list-animation">
            <div v-if="showList2"
                 class="list2"
                 @click="showList2 = false">

              <btn
                @click="() => { $router.push('/projects'); blockBurgerMenu(); blockShowList()}"
                :class="$route.path === '/achievements' ? 'active-button' : 'buttons-header'"
                style="margin-bottom: 40px; align-items: flex-end"
              >
                PROJECTS
              </btn>
              <btn
                @click="() => { $router.push('/achievements'); blockBurgerMenu(); blockShowList() }"
                :class="$route.path === '/achievements' ? 'active-button' : 'buttons-header'"
                style="align-items: flex-start">
                ACHIEVEMENTS
              </btn>
            </div>
          </transition>
          </div>
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
      showList: false,
    }
  },
  setup() {
    const showList1 = ref(false)
    const showList2 = ref(false)
    const showList3 = ref(false)
    const showBurgerMenu = ref(false)
    return {
      showList1,
      showList2,
      showList3,
      blockShowList() {
        showList2.value = !showList2.value
      },
      blockShowList1() {
        showList1.value = !showList1.value
      },
      blockShowList3() {
        showList1.value = !showList1.value
      },
      showBurgerMenu,
      blockBurgerMenu() {
        showBurgerMenu.value = !showBurgerMenu.value;
      },
      checkScreenWidth() {
        if (window.innerWidth > 720) {
          this.showList2 = true;
        }
      },
      checkScreenWidth1() {
        if (window.innerWidth > 720) {
          this.showList1 = true;
        }
      },
      checkScreenWidth3() {
        if (window.innerWidth > 720) {
          this.showList3 = true;
        }
      },
    }
  }
}
</script>

<style scoped>
.home-btn{
  position: fixed;
  display: flex;
  width: 100%;
  margin-left: 24px;
  align-self: flex-start;
}
  .header{
    position: absolute;
    display: flex;
    width: 100vw;
    z-index: 999;
    align-items: center;
  }

    .header{
      mix-blend-mode: difference;
      display: flex;
      padding: 20px;
      flex-direction: column;
      align-items: center;
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
    position: fixed;
    margin-top: 20px;
    margin-right: 20px;
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
  .block-projects-1{
    width: 200px;
    background: #062141;
    position: absolute;
    margin-top: 20px;
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
    position: fixed;
    background: white;
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
    background: white;
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
    background-color: black;
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
  @media screen and (min-width: 720px){
    .block-content{
      height: 100%;
      width: 100%;
      display: flex;
    }
    .block-content .buttons-block{
      width: 33.3%;
      display: flex;
      color: black;
      transition: color 1s;
      background: transparent;
      text-align: center;
      align-items: center;
      justify-content: center;
    }
    .block-content .buttons-block:hover {
      background-color: transparent;
      cursor: pointer;
    }
    .block-content .buttons-block btn{
      display: flex;
      height: 100%;
      width: 100%;
      justify-content: center;
      align-items: center;
      font-weight: bold;
    }
    .list2{
      background: #F0F0F0;
      z-index: 9999;
      height: 100%;
      width: 32%;
      display: flex;
      position: absolute;
      flex-direction: column;
      justify-content: center;
      animation: slide-down 0.5s ease-in-out forwards;
    }
    @keyframes slide-down {
      0%{
        opacity: 0;
        transform: translateY(-100%);
      }
      100%{
        opacity: 1;
        transform: translateY(0%);
      }
    }
    .list-animation-leave-active {
      animation: slide-up 1s ease-in-out forwards;
    }
    @keyframes slide-up {
      0%{
        opacity: 1;
        transform: translateY(0%);
      }
      100%{
        opacity: 0;
        transform: translateY(-100%);
      }
    }
  }
  @media  screen and (max-width: 720px){

  .block-content{
    align-self: flex-start;
  }

  .block-content .buttons-block{
    display: flex;
    color: black;
    transition: color 1s;
    background: transparent;
    margin-top: 2em;
    margin-left: 20px;
  }
  .block-content .buttons-block:hover {
    background-color: transparent;
    cursor: pointer;
  }
    .list2{
      background: white;
      z-index: 9999;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      position: absolute;
      animation: slide-left-proj 0.5s ease-in-out forwards;
    }
    @keyframes slide-left-proj {
      0%{
      opacity: 0;
      transform: translateX(100%);
    }
      100%{
      opacity: 1;
      transform: translateX(0%);
    }
    }
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
