<template>
  <q-page class="">
        <video class="bgvdo" poster="/img/mainposter.jpg" playsinline autoplay loop muted>
          <source type="video/mp4" src="/video/mainpage.mp4">
        </video>
      <div class="title-name"
           data-aos="zoom-in"
           data-aos-easing="ease"
           data-aos-delay="500">
      <h1>Welcome to Degno Group </h1>
      <h2>We provide tailored solutions for our clients to meet
        their unique needs, with a focus on quality and reliability.</h2>
      </div>
    <div class="index">
      <div class="index_item">
        <div class="index_item-block">
          <div class="block_one">
            <div class="block_one-item " data-aos="fade-right">
              <h6 >Our mission is to ensure and maintain sustainable growth for both our Clients and our Partners</h6>
              <h3>About Us:</h3>
              <p>We are in a team of expert consultants with over twenty years of experience, providing our
                Partners with the most competitive agency and consulting services, focused on sustainable
                business development in the Chemical and Oil &amp; Gas industry.</p>
            </div>
            <div class="block_one-item-2" data-aos="fade-left">
              <h3>Services:</h3>
              <p> "Our services include business development,
                support, and project management, all focused
                on driving growth and success in the chemical and oil and gas industry."</p>
              <q-btn
                @click="$router.push('/services')"
                class="btn-with-arrow" unelevated rounded color="black" >
                OUR SERVICES   <img alt="" class="arrow-btn" src="/icons/ArrowBtn.svg">
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
                data-aos-delay="500">Our Partners</h5>
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
                    <p>WE WORK WITH TOP NOTCH CLIENTS</p>
                  </div>
                  <div class="three_block-one--logo">
                    <img style="width: 100%" src="/icons/Union.png">
                  </div>
                </div>
                <div class="three_block-two">
                  <h4>We are an official representative developing business for leading
                    manufacturers and traders globally in the Turkmenistan market </h4>
                </div>
              </div>
              </div>
            <div class="block_three-item"
                 data-aos="zoom-in"
                 data-aos-easing="ease"
                 data-aos-delay="500">
              <q-carousel
                v-if="$q.screen.width >= 600"
                v-model="slide"
                swipeable
                animated
                navigation
                infinite
                :autoplay="autoplay"
                arrows
                transition-prev="slide-right"
                transition-next="slide-left"
                @mouseenter="autoplay = false"
                @mouseleave="autoplay = true"
                height="300px"
                class="bg-black shadow-2 rounded-borders full-width"
                style="background: black"
              >
                <q-carousel-slide :name="1" class="column no-wrap">
                  <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
                    <q-img class="slide" src="/img/ref1.jpg" />
                    <q-img class="slide" src="/img/ref2.jpg" />
                    <q-img class="slide" src="/img/ref3.jpg" />
                  </div>
                </q-carousel-slide>
                <q-carousel-slide :name="2" class="column no-wrap">
                  <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
                    <q-img class="slide" src="/img/ref5.jpg" />
                    <q-img class="slide"  src="/img/ref4.jpg" />
                    <q-img class="slide" src="/img/ref6.jpg" />
                  </div>
                </q-carousel-slide>
                <q-carousel-slide :name="3" class="column no-wrap">
                  <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
                    <q-img class="slide" src="/img/ref7.jpg" />
                    <q-img class="slide"  src="/img/ref8.jpg" />
                    <q-img class="slide" src="/img/ref9.jpg" />
                  </div>
                </q-carousel-slide>
                <q-carousel-slide :name="4" class="column no-wrap">
                  <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
                    <q-img class="slide" src="/img/ref10.jpg" />
                    <q-img class="slide"  src="/img/ref11.jpg" />
                    <q-img class="slide" src="/img/ref12.jpg" />
                  </div>
                </q-carousel-slide>
                <q-carousel-slide :name="5" class="column no-wrap">
                  <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
                    <q-img class="slide" src="/img/ref13.jpg" />
                    <q-img class="slide"  src="/img/ref14.jpg" />
                    <q-img class="slide" src="/img/ref15.jpg" />
                  </div>
                </q-carousel-slide>
                <q-carousel-slide :name="6" class="column no-wrap">
                  <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
                    <q-img class="slide" src="/img/ref16.jpg" />
                    <q-img class="slide"  src="/img/ref17.jpg" />
                    <q-img class="slide" src="/img/ref18.jpg" />
                  </div>
                </q-carousel-slide>
                <q-carousel-slide :name="7" class="column no-wrap">
                  <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
                    <q-img class="slide" src="/img/ref19.jpg" />
                    <q-img class="slide"  src="/img/ref20.jpg" />
                    <q-img class="slide" src="/img/ref21.jpg" />
                  </div>
                </q-carousel-slide>
                  <q-carousel-slide :name="8" class="column no-wrap">
                    <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
                      <q-img class="slide" src="/img/ref22.jpg" />
                      <q-img class="slide"  src="/img/ref23.jpg" />
                      <q-img class="slide"  src="/img/ref24.jpg" />
                    </div>
                  </q-carousel-slide>
              </q-carousel>
              <q-carousel
                v-if="$q.screen.width <= 600"
                v-model="slide"
                swipeable
                animated
                infinite
                arrows
                :autoplay="autoplay"
                @mouseenter="autoplay = false"
                @mouseleave="autoplay = true"
                height="300px"
                class="bg-black shadow-2 rounded-borders full-width"
                style="background: black"
              >
                <q-carousel-slide :name="1" class="column no-wrap">
                  <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
                    <q-img class="slide" src="/img/ref1.jpg" />
                    <q-img class="slide" src="/img/ref2.jpg" />
                  </div>
                </q-carousel-slide>
                <q-carousel-slide :name="2" class="column no-wrap">
                  <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
                    <q-img class="slide" src="/img/ref3.jpg" />
                    <q-img class="slide" src="/img/ref5.jpg" />
                  </div>
                </q-carousel-slide>
                <q-carousel-slide :name="3" class="column no-wrap">
                  <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
                    <q-img class="slide"  src="/img/ref4.jpg" />
                    <q-img class="slide" src="/img/ref6.jpg" />
                  </div>
                </q-carousel-slide>
                <q-carousel-slide :name="4" class="column no-wrap">
                  <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
                    <q-img class="slide" src="/img/ref7.jpg" />
                    <q-img class="slide"  src="/img/ref8.jpg" />
                  </div>
                </q-carousel-slide>
                <q-carousel-slide :name="5" class="column no-wrap">
                  <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
                    <q-img class="slide" src="/img/ref9.jpg" />
                    <q-img class="slide" src="/img/ref10.jpg" />
                  </div>
                </q-carousel-slide>
                <q-carousel-slide :name="6" class="column no-wrap">
                  <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
                    <q-img class="slide"  src="/img/ref11.jpg" />
                    <q-img class="slide" src="/img/ref12.jpg" />
                  </div>
                </q-carousel-slide>
                <q-carousel-slide :name="7" class="column no-wrap">
                  <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
                    <q-img class="slide" src="/img/ref13.jpg" />
                    <q-img class="slide"  src="/img/ref14.jpg" />
                  </div>
                </q-carousel-slide>
                <q-carousel-slide :name="8" class="column no-wrap">
                  <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
                    <q-img class="slide" src="/img/ref15.jpg" />
                    <q-img class="slide" src="/img/ref16.jpg" />
                  </div>
                </q-carousel-slide>
                <q-carousel-slide :name="9" class="column no-wrap">
                  <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
                    <q-img class="slide"  src="/img/ref17.jpg" />
                    <q-img class="slide" src="/img/ref18.jpg" />
                  </div>
                </q-carousel-slide>
                <q-carousel-slide :name="10" class="column no-wrap">
                  <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
                    <q-img class="slide" src="/img/ref19.jpg" />
                    <q-img class="slide"  src="/img/ref20.jpg" />
                  </div>
                </q-carousel-slide>
                <q-carousel-slide :name="11" class="column no-wrap">
                  <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
                    <q-img class="slide" src="/img/ref21.jpg" />
                    <q-img class="slide" src="/img/ref22.jpg" />
                  </div>
                </q-carousel-slide>
                <q-carousel-slide :name="12" class="column no-wrap">
                  <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
                    <q-img class="slide"  src="/img/ref23.jpg" />
                    <q-img class="slide"  src="/img/ref24.jpg" />
                  </div>
                </q-carousel-slide>
              </q-carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'IndexPage',
  components: {},
  setup () {
    return {
      slide: ref(1),
      autoplay: ref(true)
    }
  },
})
</script>

<style scoped>
.q-btn {
  width: 5px;
}

.fit{
  justify-content: space-around;
}
.slide{
  width: 280px;
}
@media screen and (max-width: 425px){
  .slide{
    margin: 10px;
    width: 100%;
  }
}
.q-carousel {
  margin: 0 auto;
  padding: 0 20px;
}

.q-carousel-arrow {
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  font-size: 20px;
  height: 40px;
  line-height: 40px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
}

.q-carousel-arrow:hover {
  background-color: rgba(255, 255, 255, 0.8);
}

.q-carousel-navigation {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.q-carousel-navigation-item {
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  height: 10px;
  margin: 0 5px;
  width: 10px;
}
.btn-with-arrow{
  display: flex;
  width: 156px;
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
  font-size: 70px;
  font-weight: lighter;
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
    font-size: 30px;
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
    padding: 60px 60px 0 60px;
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
  margin-bottom: 20px;
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
