<template>
  <div class="preloader">
    <div class="preloader-logo">
      <img src="/icons/logoWhite.svg">
    </div>
  </div>
</template>

<style>
.preloader {
  position: fixed;
  top: 0;
  left: 0;
  background: black;
  color: white;
  width: 100%;
  height: 100%;
  z-index: 99999;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  animation: slide-fade 1s ease-in-out forwards;
  animation-delay: 1.5s;
}
.preloader-logo {
  animation: zoom 1s ease-in-out forwards;
  position: relative;
  overflow: hidden;
}
@media screen and (max-width: 720px){
  img{
    width: 300px;
  }
}


@keyframes zoom {
  0%{
    transform: scale(0.5);
  }
  100%{
    transform: scale(1);
  }
}


@keyframes slide-fade {
  0%{
    filter: blur(0);
    transform: translateY(0%);
  }
  100%{
    filter: blur(40px);
    transform: translateY(-100%);
  }
}

.preloader-logo:before{
position: absolute;
  content: "";
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: black;
  transform: translateX(-110%);
  animation: slideRight 1s ease-in-out forwards;
  animation-delay: 1s;
}
</style>

<script>
export default {
  name: "preloader-menu"
}
</script>

