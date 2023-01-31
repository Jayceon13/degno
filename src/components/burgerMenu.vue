<template>

  <div :class="{ 'burgerMenuLeft': show, 'burgerMenuRight': !show }" v-if="show">
    <div @click.stop class="my-btn" style="display: flex; align-items: center">
      <div class="block-x">
      <btn
        @click="hideBlock"
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
          Home
        </btn>
        <btn
          @click="() => { $router.push('/about'); hideBlock() }"
          class="buttons-header"
        >
          About
        </btn>
        <btn
          @click="() => { $router.push('/services'); hideBlock() }"
          class="buttons-header"
        >
          Services
        </btn>
        <btn
          @click="() => { $router.push('/projects'); hideBlock() }"
          class="buttons-header"
        >
          Projects
        </btn>
        <btn
          @click="() => { $router.push('/partners'); hideBlock() }"
          class="buttons-header"
        >
          Partners
        </btn>
        <btn
          @click="() => { $router.push('/contacts'); hideBlock() }"
          class="buttons-header"
        >
          Contacts
        </btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "burger-menu",
  data() {
    return {
    };
  },
  props: {

    show: {
      type: Boolean,
      default: false,

    },
  },
  methods: {
    hideBlock() {
      this.$emit("update:show", false);
    },
  },

};
</script>

<style lang="scss" scoped>
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
  animation: slide-right 1s ease-in-out forwards;
}
@keyframes slide-right {
  0%{
    transform: translateX(0%);
    opacity: 1;
  }
  100%{
    transform: translateX(-100%);
    opacity: 0;
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
  animation: slide-right 1s ease-in-out forwards;
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
  margin: 0 1em;
}
.block-content .buttons-header:hover {
  color: #4fdbe8;
  background-color: transparent;
  cursor: pointer;
}
</style>
