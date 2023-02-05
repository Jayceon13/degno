<template>
  <q-page class="">
    <q-parallax :height="700" class="parallax">
      <template v-slot:media>
        <video :height="1200"  class="video-background" poster="https://cdn.quasar.dev/img/polina.jpg" playsinline autoplay loop muted>
          <source type="video/mp4" src="/video/videobgInd.mp4">
        </video>
      </template>
      <p  style="color: white">Welcome to Sman Group
        We are leading oil & gas and chemical industry specialists</p>
      <div class="arrow-block">
        <img alt="" src="/icons/Arrow.svg"/>
      </div>
    </q-parallax>
    <div class="contacts-page">
      <div class="contact-us">
        <h2>Contact us</h2>
        <p>Contact with us and take the first step forwards a successful partnership.</p>
        <p>Reach out to us via email or our enquiry form, and we'll promptly respond to your inquiry.</p>
        <feedback-form></feedback-form>
        <div class="email">
          <p>Email:</p>
          <a href="mailto: aaaaaa.org">aaaaaaa@aaaaa.org></a>
        </div>
      </div>
      <div class="offices-us">
        <h2>Our offices</h2>
          <div class="dubai-office">
            <p>Dubai, UAE</p>
            <p>dubai dubai dubai dubai dubai dubai </p>
          </div>
          <div class="turkey-office">
            <p>Turkey</p>
            <p>Turkey Turkey Turkey Turkey Turkey </p>
          </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import FeedbackForm from "components/FeedbackForm";

export default defineComponent({
  name: 'ContactsPage',
  components: {
    FeedbackForm,
  }
})
</script>

<style scoped>
p {
  font-size: 20px;
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
.contacts-page{
  display: flex;
  justify-content: center;
  margin-top: 40px;
}
.contact-us{
  width: 40%;
  margin-right: 40px;
}
.offices-us{
  width: 40%;
}
.email{
  display: flex;
  margin-top: 40px;
  justify-content: center;
}
@media screen and (max-width: 710px){
  .contacts-page{
    flex-flow: column;
  }
  .contact-us{
    width: 100%;
    padding: 40px;
    text-align: center;
  }
  .offices-us{
    width: 100%;
    padding: 40px;
    text-align: center;
  }
}
</style>
