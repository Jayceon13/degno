<template>
  <q-page class="">
    <q-parallax :height="700" class="parallax">
      <template v-slot:media>
        <video :height="1200"  class="video-background" poster="https://cdn.quasar.dev/img/polina.jpg" playsinline autoplay loop muted>
          <source type="video/mp4" src="/video/videobgInd.mp4">
        </video>
      </template>
      <p style="color: white">Welcome to Sman Group
        We are leading oil & gas and chemical industry specialists</p>
      <div class="arrow-block">
        <img src="/icons/Arrow.svg"/>
      </div>
    </q-parallax>
    <div class="index">
    <div class="index-item">
  <div class="index_block">
    <div class="index_block-item">
    <div class="index_block-item--info">
      <h3>Business development, support &amp; project management in the oil &amp; gas and chemical industry </h3>
    </div>
      <div class="index_block-item--info pad-left">
        <h4 >Our mission is to ensure and maintain sustainable growth for both our Clients and our Partners</h4>
      </div>
    <div class="index_block-item--info">
      <p>We are in a team of expert consultants with over twenty years of experience, providing our
        Partners with the most competitive agency and consulting services, focused on sustainable
        business development in the Chemical and Oil &amp; Gas industry.</p>
    </div>
    <div class="index_block-item--info pad-left">
      <p class="bold-p"> SMAN GROUP</p>
    </div>
    </div>
  </div>
    <div class="index_block">

    </div>
      <div class="index_block">
        <div class="index_block-services">
          <img class="services-img" src="img/imgIndexPage.jpg">
        </div>
        <div class="index_block-services">
          <div class="index_block-services--item">
          <h3>Our Services</h3>
          <p> Based on many years of experience in the oil &amp;
            gas and chemical industries, as well as a positive reputation,
            the SMAN team offers professional agency / consulting services to achieve the set
            goals and ensure the development of our Partners.</p>
          </div>
        </div>
      </div>
      <div class="index_block">
        <div class="index_block-part">
          <div class="index_block-part--item">
          <h3>Our Partners</h3>
          <p>We are an official partner / agent,
            developing the business of the world's leading
            manufacturing companies and traders in the Turkmenistan market.</p>
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
              <img class="part-img" src="img/ref1.png">
            </div>
            <div class="index_block-part--logo_img">
              <img class="part-img" src="img/ref2.png">
            </div>
            <div class="index_block-part--logo_img">
              <img class="part-img" src="img/ref3.png">
            </div>
            <div class="index_block-part--logo_img">
              <img class="part-img" src="img/ref1.png">
            </div>
            <div class="index_block-part--logo_img">
              <img class="part-img" src="img/ref2.png">
            </div>
            <div class="index_block-part--logo_img">
              <img class="part-img" src="img/ref3.png">
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
  .index_block-item {
    display: flex;
    flex-flow: wrap;
  }

  .index_block-item--info {
    width: 50%;
  }
  .index_block-services {
    width: 50%;
    display: flex;
    align-items: center;
  }

  .services-img {
    width: 150%;
    height: 100%;
    object-fit: cover;
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
.index_block-part{
  width: 50%;
}
.index_block-part--item {
  padding: 50px 50px 50px 0;
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
  padding: 0 0 20px;

}
.part-img{
    width: 80%;

  }

</style>
