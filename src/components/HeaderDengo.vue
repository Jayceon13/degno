<template>
  <div class="header">
    <div class="buttons-block">
      <btn
        class="buttons-header"
      >
        Главная
      </btn>
      <btn
        class="buttons-header"
      >
        О нас
      </btn>
      <btn
        class="buttons-header"
      >
        Наши Услуги
      </btn>
    </div>
      <div class="logo-block">

      </div>
    <div class="buttons-block">
        <btn
          class="buttons-header"
        >
          Наши проекты
        </btn>
        <btn
          class="buttons-header"
        >
          Партнёры
        </btn>
        <btn
          class="buttons-header"
        >
          Контакты
        </btn>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderDengo'
}
</script>

<style scoped>
  .header{
    position: absolute;
    display: flex;
    width: 100vw;
    z-index: 9999;
    place-content: center;
    padding: 64px 150px 0px;
    align-items: center;
  }

 .buttons-block .buttons-header{
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
   width: 288px;
   height: 166px;
 }
</style>
