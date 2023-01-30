<template>
  <div class="header">
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
  .active-button{
    color: #4fdbe8;
    cursor: pointer;
    margin: 0 1em;
 }
</style>
