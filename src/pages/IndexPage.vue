<template>
  <q-page class="">
    <q-parallax :height="700" class="parallax">
      <template v-slot:media>
        <video :height="1200"  class="video-background" poster="https://cdn.quasar.dev/img/polina.jpg" playsinline autoplay loop muted>
          <source type="video/mp4" src="/video/videobgInd.mp4">
        </video>
      </template>
      <p style="color: white">Welcome to Degno Group
        Degno Group is a specialist in the oil and gas industry. </p>
      <p style="color: white">We provide tailored solutions for our clients to meet
        their unique needs, with a focus on quality and reliability.</p>
      <div class="arrow-block">
        <img src="/icons/Arrow.svg"/>
      </div>
    </q-parallax>
    <div class="index">
    <div class="index-item">
  <div class="index_block">
    <div class="index_block-item">
    <div class="index_block-item--info">
      <h3>About Us:</h3>
      <p>We are in a team of expert consultants with over twenty years of experience, providing our
        Partners with the most competitive agency and consulting services, focused on sustainable
        business development in the Chemical and Oil &amp; Gas industry.</p>
    </div>
      <div class="index_block-item--info pad-left">
        <h4 >Our mission is to ensure and maintain sustainable growth for both our Clients and our Partners</h4>
      </div>
    </div>
  </div>
      <div class="index_block">
        <div class="index_block-services">
          <img class="services-img" src="img/imgIndexPage.jpg">
        </div>
        <div class="index_block-services">
          <div class="index_block-services--item">
          <h3>Services:</h3>
          <p> "Our services include business development,
            support, and project management, all focused
            on driving growth and success in the chemical and oil and gas industry."</p>
          </div>
        </div>
      </div>
      <div class="index_block">
        <div class="index_block-part">
          <div class="index_block-part--item">
          <h3>Our Partners</h3>
          <p>We are an official representative developing business for leading
            manufacturers and traders globally in the Turkmenistan market </p>
        </div>
        </div>
        <div class="index_block-part">
          <div class="index_block-part--logo">
            <div class="index_block-part--logo_img">
          <img class="part-img" src="img/ref1.png">
            </div>
            <div class="index_block-part--logo_img">
              <img class="part-img" src="img/ref2.png">
            </div>
            <div class="index_block-part--logo_img">
              <img class="part-img" src="img/ref3.png">
            </div>
            <div class="index_block-part--logo_img">
              <img class="part-img" src="img/ref4.png">
            </div>
            <div class="index_block-part--logo_img">
              <img class="part-img" src="img/ref5.png">
            </div>
            <div class="index_block-part--logo_img">
              <img class="part-img" src="img/ref6.png">
            </div>
            <div class="index_block-part--logo_img">
              <img class="part-img" src="img/ref7.png">
            </div>
            <div class="index_block-part--logo_img">
              <img class="part-img" src="img/ref8.png">
            </div>
            <div class="index_block-part--logo_img">
              <img class="part-img" src="img/ref9.jpeg">
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
  name: 'IndexPage'
})
</script>

<style scoped>
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
  .parallax{
    z-index: -1;
    width: 100vw;
    height: 100vh;
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
.index {
  display: flex;
  justify-content: center;
}
  .index-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 70%;
    padding: 80px 0;
  }

  .index_block {
    display: flex;
    width: 100%;
    padding: 40px 0px;
  }
@media screen and (max-width: 700px) {
  .index_block {
    flex-direction: column;
  }
}
  .index_block-item {
    display: flex;
    flex-flow: wrap;
  }
@media screen and (max-width: 700px) {
  .index_block-item {
    flex-direction: column;
  }
}

  .index_block-item--info {
    width: 50%;
  }
@media screen and (max-width: 700px) {
  .index_block-item--info {
    width: 100%;
  }
}
  .index_block-services {
    width: 50%;
    display: flex;
    align-items: center;
  }
@media screen and (max-width: 700px) {
  .index_block-services {
    width: 100%;
  }
}

  .services-img {
    width: 150%;
    height: 100%;
    object-fit: cover;
  }
@media screen and (max-width: 700px) {
  .services-img {
    width: 100%;
  }
}
  .index_block-services--item {
    background: white;
    height: 80%;
    padding: 15%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
@media screen and (max-width: 700px) {
  .index_block-services--item {
    padding: 20px 0;
  }
}
.index_block-part{
  width: 50%;
}
@media screen and (max-width: 700px) {
  .index_block-part {
    width: 100%;
  }
}
.index_block-part--item {
  padding: 50px 50px 50px 0;
}
@media screen and (max-width: 700px) {
  .index_block-part--item {
    padding: 0px;
  }
}
.index_block-part--logo {
  display: flex;
  flex-flow: wrap;
  justify-content: space-between;

}
.index_block-part--logo_img {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30%;
  padding: 0 0 40px;

}
.part-img{
    width: 80%;

  }

</style>
