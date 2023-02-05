<template>
  <q-page class="" style="">
    <div class="main-block">
      <h3 style="color: white"
          data-aos="zoom-in"
          data-aos-easing="ease"
          data-aos-delay="500"
      >DISCOVER OUR FULL RANGE OF EXPERTISE</h3>
    </div>
    <div class="services-page">
      <div class="first-block">
        <h2
          data-aos="zoom-in"
          data-aos-easing="ease"
          data-aos-delay="500">We offer a
          range of services, including consulting,<br>
          agency and project management, to help clients and<br>
          partners grow their businesses effectively</h2>
      </div>
      <div class="second-block">
        <img src="/img/services2.jpg"
             data-aos="fade-right">
        <div class="second-block-text" data-aos="fade-left">
          <p style="font-weight: bold; margin-bottom: 40px">
            Our highly skilled team has global expertise and can support
            the successful execution of projects, regardless of their
            complexity
          </p>
          <p>Our company, DEGNO, is adaptable in negotiations and provides expert
            guidance in business decision making. With a presence in <b>Dubai</b>, <b>Moscow</b>,
            <b>Istanbul</b>, and <b>Ashgabat</b>, we offer comprehensive regional coverage</p>
          <p></p>
        </div>
      </div>
      <div class="third-block">
        <div class="third-block-text"
             data-aos="fade-right">
            <p style="font-weight: bold; padding-left: 10px; padding-right: 10px">Our key element is the high level of support
              towards the client,<br> that is why we offer:</p>
          <div class="third-block-text-li">
            <li>Meetings & negotiations</li>
            <li>Supplier & contractor search</li>
            <li>Project implementation, support & coordination</li>
            <li>Marketing, development & brand adaptation</li>
            <li>Project and client search</li>
            <li>Design, delivery & commissioning</li>
            <li>Search for alternative solutions & adaptations</li>
            <li>Risk Assessment</li>
          </div>
        </div>
        <div class="third-block-img" data-aos="fade-left">
          <img src="/img/services3.jpg">
        </div>
        </div>
      <div class="fourth-block">
        <h4
          data-aos="zoom-in"
          data-aos-easing="ease"
          data-aos-delay="500">Supporting and guiding your requirement from the beginning to the very end</h4>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ServicesPage'
})
</script>

<style scoped>
p {
  font-size: 20px;
}
.main-block{
  width: 100vw;
  height: 100vh;
  background-image: url("/img/services.jpg");
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
}
h2 {
  font-size: 30px;
}
@media screen and (max-width: 985px){
  h2{
    line-height: 1.3em;
  }
}
.main-block h3{
  text-align: center;
  font-weight: bold;
}
.fourth-block{
  padding-left: 60px;
  padding-right: 60px;
}
.fourth-block h4{
  text-align: center;
  font-style: italic;
}
@media screen and (max-width: 985px){
  .main-block h3{
    font-size: 30px;
  }
}
@media screen and (max-width: 720px){
  .main-block {
    height: 600px;
  }
  .fourth-block h4{
    font-size: 30px;
  }
}
@media screen and (max-width: 450px){
  .main-block{
    background-position: 30%;
  }
  .main-block h3{
    font-size: 24px;
    text-align: center;

  }
  .fourth-block h4{
    font-size: 30px;
  }
}

.services-page{
  background: white;
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
}
.first-block{
  padding: 30px 60px 30px 60px;
  text-align: center;
}
.first-block p{
  font-weight: bold;
}
@media screen and (max-width: 985px){
  .first-block p{
    font-size: 25px;
  }
}
@media screen and (max-width: 720px){
  .first-block p{
    font-size: 20px;
  }
}

@media (max-width: 736px) {
  .services-page{
    text-align: center;
  }
}
.second-block{
  display: flex;
  width: 100%;
}
.third-block{
  display: flex;
  width: 100%;

}
.third-block-text{
  flex-flow: column;
  display: flex;
  padding: 30px 60px 30px 60px;
  width: 50%;
  align-self: center;
}
.third-block-text-li {
  display: flex;
  justify-content: center;
  flex-flow: column;
  align-self: center;
}
.third-block-img{
  width: 50%;
}
@media (max-width: 720px) {
  .second-block{
    flex-flow: column;
    text-align: center;
  }
  .second-block img {
    width: 100%;
  }
  .third-block img {
    width: 100%;
  }
  .third-block{
    flex-flow: column-reverse;
    text-align: center;
  }
  .third-block-img{
    width: 100%
  }
  .third-block-text{
    width: 100%;
  }
}
@media (min-width: 720px){
  .second-block img{
    width: 50%;
  }
  .third-block text{
    width: 50%;
  }
  .third-block img{
    width: 100%;
  }

}
.second-block-text{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  padding: 30px 60px 30px 60px;
}
.second-block-text p{
  font-size: 20px;
}
.third-block-text p{
  align-self: center;
  font-size: 22px;
}
.third-block-text-li li{
  font-size: 20px;
}
@media screen and (max-width: 1050px){
  .second-block-text p{
    font-size: 20px;
  }
}
@media screen and (max-width: 970px){
  .second-block-text p{
    font-size: 20px;
  }
  .third-block-text p{
    font-size: 20px;
  }
  .third-block-text-li li{
    font-size: 20px;
  }
}
@media screen and (max-width: 850px){
  .second-block-text p{
    font-size: 20px;
  }
  .third-block-text p{
    font-size: 20px;
  }
  .third-block-text-li li{
    font-size: 20px;
  }
}
</style>
