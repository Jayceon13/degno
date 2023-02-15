<template>
  <q-page class="" style="">
    <div class="main-block">
      <h3 style="color: white"
          data-aos="zoom-in"
          data-aos-easing="ease"
          data-aos-delay="500"
      > МЫ ПРЕДОСТАВЛЯЕМ ШИРОКИЙ СПЕКТР БИЗНЕС УСЛУГ</h3>
    </div>
    <div class="services-page">
      <div class="first-block">
        <h2
          data-aos="zoom-in"
          data-aos-easing="ease"
          data-aos-delay="500">Мы предлагаем ряд услуг,
          включая консалтинг и управление проектами, чтобы помочь
          клиентам и партнерам эффективно развивать свой бизнес</h2>
      </div>
      <div class="second-block">
        <img src="/img/services2.jpg"
             data-aos="fade-right">
        <div class="second-block-text" data-aos="fade-left">
          <h6 style="font-weight: bold; margin-bottom: 40px">
            Наша высококвалифицированная команда обладает
            глобальным опытом и может поддержать
            успешное выполнение проектов, независимо от их сложности.
          </h6>
          <p>Компания DEGNO адаптируется к переговорам
            и обеспечивает экспертное руководство в принятии
            деловых решений и является квалифицированным Советником в принятии
            бизнес-решений с региональным охватом и офисами в <b>Дубае (ОАЭ)</b>, <b>Москве (Россия)</b>,
            <b>Стамбуле (Турция)</b>, and <b>Ашхабаде (Туркменистан)</b>, we offer comprehensive regional coverage</p>
          <p></p>
        </div>
      </div>
      <div class="third-block">
        <div class="third-block-text"
             data-aos="fade-right">
          <h6>Нашим ключевым элементом является высокий уровень
            поддержки клиента, поэтому мы предлагаем:</h6>
          <div class="third-block-text-li">
            <li>Встречи и переговоры</li>
            <li>Поиск поставщика и подрядчика</li>
            <li>Реализация проекта, поддержка и координация</li>
            <li>Маркетинг, развитие и адаптация бренда</li>
            <li>Поиск проектов и клиентов</li>
            <li>Организация проектирования, доставка и ввод в эксплуатацию</li>
            <li>Поиск альтернативных решений и адаптация</li>
            <li>Оценка рисков</li>
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
          data-aos-delay="500">Поддержка и сопровождение ваших
          требований с самого начала и до самого конца</h4>
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
h6 {
  font-size: 25px;
  font-weight: bold;
  line-height: 1.2em;
  margin-top: 0;
}
@media screen and (max-width: 720px){
  h6{
    font-size: 24px;
  }
}
.main-block{
  width: 100vw;
  height: 100vh;
  background-image: url("/img/services.jpg");
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: left;
}
h2 {
  font-size: 30px;
  font-weight: bold;
  line-height: 1.2em;
}
@media screen and (max-width: 985px){
  h2{
    font-size: 24px;
    line-height: 1.2em;
  }
}
.main-block h3{
  font-size: 40px;
  text-align: center;
  font-weight: bold;
}
.fourth-block{
  padding: 0 60px;
}
.fourth-block h4{
  text-align: center;
  line-height: 1.2em;
  font-weight: 400;
}
@media screen and (max-width: 720px){
  .fourth-block h4{
    text-align: left;
  }
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
    font-size: 30px;
    text-align: center;

  }
  .fourth-block h4{
    font-size: 24px;

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
  padding: 30px 300px;
  text-align: center;
}
@media screen and (max-width: 1000px){
  .first-block{
    padding: 30px 150px;
  }
}
@media screen and (max-width: 720px){
  .first-block{
    padding: 30px 60px;
    text-align: left;
  }
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
    text-align: left;
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
  padding: 40px 60px;
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
    text-align: left;
  }
  .second-block img {
    width: 100%;
  }
  .third-block img {
    width: 100%;
  }
  .third-block{
    flex-flow: column-reverse;
    text-align: left;
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
    height: 100%;
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
  padding: 30px 60px;
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

