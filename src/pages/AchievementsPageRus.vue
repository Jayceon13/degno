<template>
  <q-page class="">
    <div class="achievements-page">
    <div class="main-block">
      <h3 style="color: white"
          data-aos="zoom-in"
          data-aos-easing="ease"
          data-aos-delay="500"
      >KEY ACHIEVEMENTS</h3>
    </div>
      <div class="first-block">
        <div class="block-achieve-1" data-aos="fade-right">
          <h3>1</h3>
          <p>Signing of the Memorandum of Understanding between KSB Group and UNDP Turkmenistan</p>
          <h3>2</h3>
          <p>Opening of the official KSB Group Showroom and Service Center in Ashgabat</p>
        </div>
        <div class="block-achieve-2" data-aos="fade-left">
          <h3>3</h3>
          <p>Implementation of the production of Sulphur-Bentonite based on IPCO technology in Turkmenistan</p>
          <h3>4</h3>
          <p>Organization of export deliveries of polymer products from Turkmenistan to China and Turkey</p>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AchievementsPage'
})
</script>

<style scoped>

.achievements-page{
  background: white;
}
.main-block{
  width: 100vw;
  height: 100vh;
  background-image: url("/img/achievements.jpg");
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
}
.main-block h3{
  font-weight: bold;
  font-size: 70px;

}
@media screen and (max-width: 985px){
  .main-block h3{
    font-size: 50px;
  }
  .main-block{
    background-position: 30%;
  }
}
@media screen and (max-width: 720px){
  .main-block {
    height: 600px;
  }
  .main-block h3{

    font-size: 40px;
  }
  .main-block{
    background-position: 50%;
  }
}
@media screen and (max-width: 450px){
  .main-block{
    background-position: 65%;
  }
  .main-block h3{
    font-size: 30px;
  }
}

.first-block{
  height: 700px;
  display: flex;
  text-align: center;
  justify-content: center;
  padding: 100px;
}
.block-achieve-1{
  width: 40%;
  margin-right: 30px;
}
.block-achieve-2{
  width: 40%;
}
.block-achieve-2 h3,.block-achieve-1 h3{
  font-weight: bold;
  color: #00274d;
}
.block-achieve-2 p,.block-achieve-1 p{
  font-size: 20px;
}
@media (max-width: 736px) {
  .achievements-page{
    display: flex;
    justify-content: center;
    flex-flow: column;
  }
  .first-block{
    flex-flow: column;
    padding: 70px;
    height: auto;
  }
  h3{
    text-align: center;
  }
  .block-achieve-1{
    width: 100%;
    margin: 0;
  }
  .block-achieve-2{
    width: 100%;
  }
  p{
    text-align: center;
  }
}
</style>
