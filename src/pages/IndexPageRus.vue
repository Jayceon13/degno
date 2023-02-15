<template>
  <q-page class="">
    <video class="bgvdo" poster="/img/mainposter.jpg" playsinline autoplay loop muted>
      <source type="video/mp4" src="/video/mainpage.mp4">
    </video>
    <div class="title-name"
         data-aos="zoom-in"
         data-aos-easing="ease"
         data-aos-delay="500">
      <h1>Добро пожаловать в Dengno Group</h1>
      <h2>Мы являемся ведущими специалистами в нефтегазовой и химической промышленности</h2>
    </div>
    <div class="index">
      <div class="index_item">
        <div class="index_item-block">
          <div class="block_one">
            <div class="block_one-item " data-aos="fade-right">
              <h6> Наша миссия — обеспечить и поддерживать устойчивый рост как для наших клиентов, так и для наших партнеров.</h6>
              <h3>О нас: </h3>
              <p>Мы команда опытных консультантов с более чем двадцатилетним опытом,
                предоставляющая нашим партнерам наиболее
                конкурентоспособные агентские и консалтинговые услуги.</p>
            </div>
            <div class="block_one-item-2" data-aos="fade-left">
              <h3>Наши Услуги:</h3>
              <p> Мы предлагаем ряд услуг, включая консалтинг и управление проектами,
                чтобы помочь клиентам и партнерам эффективно развивать свой бизнес</p>
              <q-btn
                @click="$router.push('/services')"
                class="btn-with-arrow" unelevated rounded color="black" >
                НАШИ УСЛУГИ   <img alt="" class="arrow-btn" src="/icons/ArrowBtn.svg">
              </q-btn>
            </div>
          </div>
        </div>


        <div class="index_item-block">
          <div class="block_two">
            <div class="block_two-item">
              <h5
                data-aos="zoom-in"
                data-aos-easing="ease"
                data-aos-delay="500">НАШИ ПАРТНЕРЫ</h5>
            </div>
          </div>
        </div>

        <div class="index_item-block">
          <div class="block_three">
            <div class="block_three-item">

              <div class="block_three-item--info"
                   data-aos="zoom-in"
                   data-aos-easing="ease"
                   data-aos-delay="500">
                <div class="three_block-one">
                  <div class="three_block-one--info">
                    <p>МЫ РАБОТАЕМ С ПЕРВОКЛАССНЫМИ КЛИЕНТАМИ</p>
                  </div>
                  <div class="three_block-one--logo">
                    <img style="width: 100%" src="/icons/Union.png">
                  </div>
                </div>
                <div class="three_block-two">
                  <h4>Благодаря качественным продуктам и услугам наших партнеров, за долгие
                    годы сотрудничества команда DEGNO заслужила доверие клиентов на рынке </h4>
                </div>
              </div>
            </div>
            <div class="block_three-item"
                 data-aos="zoom-in"
                 data-aos-easing="ease"
                 data-aos-delay="500">

              <div class="block_three-item--logo">
                <div class="block_three-item--logo_img">
                  <img alt="" class="part-img" src="/img/ref1.png">
                </div>
                <div class="block_three-item--logo_img">
                  <img alt="" class="part-img" src="/img/ref2.png">
                </div>
                <div class="block_three-item--logo_img">
                  <img alt="" class="part-img" src="/img/ref3.png">
                </div>
                <div class="block_three-item--logo_img">
                  <img style="scale: 1.4" alt="" class="part-img" src="/img/ref4.png">
                </div>
                <div class="block_three-item--logo_img">
                  <img style="scale: 1.2" alt="" class="part-img" src="/img/ref5.png">
                </div>
                <div class="block_three-item--logo_img">
                  <img alt="" class="part-img" src="/img/ref6.png">
                </div>
              </div>
              <div class="block_three-item--logo">

              </div>



            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage',
  components: {},

})
</script>

<style scoped>
.btn-with-arrow{
  display: flex;
  width: 180px;
}
.bgvdo{
  height: 100vh;
  position: absolute;
  width: 100vw;
  object-fit: cover;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: -1;
}
.block_three-item--info h4{
  font-size: 20px;
}
@media screen and (max-width: 700px) {
  .bgvdo {
    width: 100%;
  }
}
p {
  font-size: 20px;
}

h1 {
  margin: 0 0 20px;
  font-size: 60px;
  font-weight: 100;
  font-style: italic;
}
@media screen and (max-width: 1000px) {
  h1 {
    font-size: 40px;

    line-height: 1.5em;
  }
}
@media screen and (max-width: 700px) {
  h1 {
    font-size: 30px;
  }
}
@media screen and (max-height: 620px) {
  h1{
    font-size: 20px;
  }
}

h2 {
  font-weight: bold;
  font-size: 70px;
  line-height: 1.1em;
}
@media screen and (max-width: 1300px) {
  h2 {
    margin: 0 0 20px;
    font-size: 40px;
  }
}
@media screen and (max-width: 700px) {
  h2 {
    font-size: 28px;
  }
}
@media screen and (max-height: 820px) {
  h2{
    font-size: 40px;
  }
}
@media screen and (max-height: 620px) {
  h2{
    font-size: 28px;
  }
}
h3 {
  margin: 0 0 20px;
  font-weight: 900;
}
h4 {
  justify-content: center;
  margin: 0 20px 20px;
}
@media screen and (max-width: 700px) {
  h4{
    justify-content: center;
    font-size: 20px;
    margin: 0;
  }
}
h5 {
  font-size: 60px;
  margin: 0 0 20px;
  font-weight: 900;
}
@media screen and (max-width: 700px) {
  h5{
    font-size: 30px;
  }
}
h6 {
  font-size: 40px;
  font-style: italic;
  line-height: 1.5;
  font-weight: normal;
  margin-bottom: 20px;
}
@media screen and (max-width: 700px) {
  h6{
    font-size: 24px;
    line-height: 1.2;
    font-weight: normal;
  }
}


.title-name {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  color: white;
  height: 100vh;
  padding: 50px 200px;
}
@media screen and (max-width: 1300px) {
  .title-name{
    padding: 200px 30px;
  }
}
@media screen and (max-height: 650px) {
  .title-name {
    justify-content: flex-end;
    padding: 30px 30px;
  }
}
.arrow-btn{
  display: flex;
}

.arrow-block img{
  height: 17px;
  position: absolute;
  bottom: 0;
  animation: moveImage 3s linear infinite;
}
@keyframes moveImage{
  0%{
    opacity: 0;
    bottom: 40px;
  }
  25%{
    opacity: 1;
  }
  75%{
    opacity: 1;
  }
  100%{
    opacity: 0;
    bottom: 0;
  }
}
.index_item {
  display: flex;
  flex-direction: column;
}
.index_item-block {

}
@media screen and (max-width: 700px) {
  .index_item-block {
    height: auto;
  }
}
.block_one {
  background: white;
  display: flex;
  min-height: 100vh;
  padding: 40px 0;
}
@media screen and (max-width: 700px) {
  .block_one {
    flex-direction: column;
    padding: 0;
  }
}
.block_one-item{
  width: 50%;
  padding: 150px 40px 100px 200px;
  border-right: solid 2px black;
}
@media screen and (max-width: 1000px) {
  .block_one-item{
    width: 50%;
    padding: 150px 40px 100px 100px;
  }
}
@media screen and (max-width: 920px) {
  .block_one-item {
    padding: 150px 40px 100px 70px;
  }
}
@media screen and (max-width: 700px) {
  .block_one-item {
    width: 100%;
    padding: 80px 60px;
    border-right: none;
  }
}
.block_one-item-2{
  width: 50%;
  padding: 80px 200px 0 40px;
}
.arrow-btn{
  margin-left: 15px;
  height: 10px;
  width: 10px;
}
@media screen and (max-width: 920px) {
  .block_one-item-2 {
    padding: 80px 100px 0 40px;
  }
}
@media screen and (max-width: 700px) {
  .block_one-item-2 {
    width: 100%;
    padding: 30px 60px;
  }
}

.block_two-item{
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("/img/partners.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top center;
  width: 100%;
  height: 100vh;
  min-height: 600px;
  color: white;
  text-transform: uppercase;
}
@media screen and (max-width: 700px) {
  .block_two-item {
    height: 400px;
    min-height: auto;
  }
}

.block_three{
  display: flex;
  flex-direction: column;
  background-color: black;
  color: white;
  min-height: 100vh;
  justify-content: space-between;
}
.block_three-item{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.block_three-item--info{
  display: flex;
  justify-content: space-between;
  padding: 60px 100px;
  font-weight: lighter;
}
@media screen and (max-width: 700px) {
  .block_three-item--info {
    display: flex;
    flex-direction: column-reverse;
    padding: 60px;
  }
}

.three_block-one {
  width: 30%;
  display: flex;
  flex-direction: column;
}
@media screen and (max-width: 700px) {
  .three_block-one {
    width: 100%;
  }
}
.three_block-two {
  width: 30%;
  margin-right: 100px;
}
@media screen and (max-width: 1300px) {
  .three_block-two {
    margin-right: 30px;
    width: 50%;
  }
}
@media screen and (max-width: 700px) {
  .three_block-two {
    width: 100%;
    margin-bottom: 40px;

  }
}
.three_block-one--logo {
  margin: 30px 0;
  width: 20%;
}
.block_three-item--logo{
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
}
@media screen and (max-width: 700px) {
  .block_three-item--logo {
    flex-wrap: wrap;
  }
}
.block_three-item--logo_img{
  width: 33.3%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 260px;
  padding: 50px 50px;
  border: solid 1px white;
}
@media screen and (max-width: 1300px) {
  .block_three-item--logo_img {
  ;
  }
}
@media screen and (max-width: 700px) {
  .block_three-item--logo_img {
    width: 50%;
    padding: 40px;
  }
}
@media screen and (max-width: 450px) {
  .block_three-item--logo_img {
    padding: 20px;
  }
}

.part-img {
  width: 120px;
}

</style>
