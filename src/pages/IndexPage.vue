<template>
  <q-page class="">
    <q-parallax class="parallax window-height">
      <template v-slot:media>
        <video class="bgvdo" poster="https://cdn.quasar.dev/img/polina.jpg" playsinline autoplay loop muted>
          <source type="video/webm" src="img/parHome.webm">
        </video>
      </template>
      <div class="title-name">
      <h1>Welcome to Degno Group </h1>
        <h2>Degno Group is a specialist in the oil and gas industry.</h2>
      <h2>We provide tailored solutions for our clients to meet
        their unique needs, with a focus on quality and reliability.</h2>
      </div>
      <div class="arrow-block">
        <img src="/icons/Arrow.svg"/>
      </div>
    </q-parallax>
    <div class="index">
      <div class="index_item">
        <div class="index_item-block">
          <div class="block_one">
            <div class="block_one-item">
              <h4 >Our mission is to ensure and maintain sustainable growth for both our Clients and our Partners</h4>
              <h3>About Us:</h3>
              <p>We are in a team of expert consultants with over twenty years of experience, providing our
                Partners with the most competitive agency and consulting services, focused on sustainable
                business development in the Chemical and Oil &amp; Gas industry.</p>
            </div>
            <div class="block_one-item">
              <h3>Services:</h3>
              <p> "Our services include business development,
                support, and project management, all focused
                on driving growth and success in the chemical and oil and gas industry."</p>
            </div>
          </div>
        </div>


        <div class="index_item-block">
          <div class="block_two">
            <div class="block_two-item">]
            </div>
          </div>
        </div>

        <div class="index_item-block">
          <div class="block_three">
            <div class="block_three-item">
              <div class="block_three-item--info">
                <h3>Our Partners</h3>
                <p>We are an official representative developing business for leading
                  manufacturers and traders globally in the Turkmenistan market </p>
              </div>
              </div>
            <div class="block_three-item">

              <div class="block_three-item--logo">
                <div class="block_three-item--logo_img">
                  <img class="part-img" src="img/ref1.png">
                </div>
                <div class="block_three-item--logo_img">
                  <img class="part-img" src="img/ref2.png">
                </div>
                <div class="block_three-item--logo_img">
                  <img class="part-img" src="img/ref3.png">
                </div>
                <div class="block_three-item--logo_img">
                  <img class="part-img" src="img/ref4.png">
                </div>
              </div>
              <div class="block_three-item--logo">
                <div class="block_three-item--logo_img">
                  <img class="part-img" src="img/ref5.png">
                </div>
                <div class="block_three-item--logo_img">
                  <img class="part-img" src="img/ref6.png">
                </div>
                <div class="block_three-item--logo_img">
                  <img class="part-img" src="img/ref7.png">
                </div>
                <div class="block_three-item--logo_img">
                  <img class="part-img" src="img/ref8.png">
                </div>
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
})
</script>

<style scoped>
.bgvdo{
  height: 190%;
}
h1 {
  margin: 0 0 20px;
  font-size: 30px;
  font-weight: bold;
}
h2 {
  margin: 0 0 20px;
  font-weight: 300;
  font-size: 20px;
}
h3 {
  margin: 0 0 20px;
  font-weight: 900;
}
h4 {
  margin: 0 0 20px;
  font-style: italic;
}

.bold-p{
  font-weight: bold;
}
.pad-left {
  padding-left: 7.5%;
}
@media screen and (max-width: 700px) {
  .pad-left {
    padding-left: 0%;
  }
}
.title-name {
  color: white;
}
  .parallax{
    z-index: -1;
    width: 100vw;
  }
  .arrow-block{
    height: 40px;
    position: relative;
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
  height: 100vh;
}
.block_one {
  display: flex;
  height: 100%;
  padding: 20%;
}
@media screen and (max-width: 700px) {
  .block_one {
    flex-direction: column;
  }
  .block_two{
    margin-top: 120px;
  }
}
.block_one-item{
  padding: 0 30px 0 0;
}

.block_two-item{
  background-image: url("/img/ParPartners.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top center;
  width: 100%;
  height: 100vh;
}
.bg-block--two{
  background-size: cover;
}

.block_three{
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: black;
  color: white;
  height: 100%;
  padding: 8%;
  }
.block_three-item{
  display: flex;
  flex-wrap: wrap;;
  align-items: center;
}
.block_three-item--logo{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
@media screen and (max-width: 700px) {
  .block_three-item--logo {
    flex-wrap: wrap;
  }
}
.block_three-item--logo_img{
  width: 10%;
  padding: 30px 0;
}
@media screen and (max-width: 1300px) {
  .block_three-item--logo_img {
    width: 20%;
  }
}
@media screen and (max-width: 700px) {
  .block_three-item--logo_img {
    width: 50%;
    padding: 50px;
  }
}

.part-img {
  width: 100%;
}

</style>
