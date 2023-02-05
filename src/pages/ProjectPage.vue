<template>
  <q-page class="">
    <q-parallax :height="900" class="parallax">
      <template v-slot:media>
        <img alt="" src="img/ParProjects.jpg">
      </template>
      <p style="color: white">Welcome to Sman Group
        We are leading oil & gas and chemical industry specialists</p>
      <div class="arrow-block">
        <img alt="" src="/icons/Arrow.svg"/>
      </div>
    </q-parallax>
<div class="project">
    <div class="project_page">
      <div class="project_page-block">
        <div class="project_page-block--logo ">
          <div class="block_logo block_logo-first">
            <img alt="" class="block_logo-img" src="img/ProjectsLogoTurkGaz.jpeg">
          </div>
        </div>
        <div class="project_page-block--item">
          <div class="block_items">
            <li>Project:  Booster compressor station "Malay" Shop A & B / total capacity 90 million m3 per day.</li>

            <li>Products:  ball valves / gate valves / valves / pumps / fittings / flanges.</li>

            <li>Partners/Manufacturers: RMA Kehl GmbH & Co. KG. / KSB Group / Allied International S.r.l.</li>

            <li>Project: main gas pipeline "East-West" with a length of 818 km</li>

            <li>Products: 14 sets of pig launcher and receiver</li>

            <li>Partners/Manufacturers: RMA Kehl GmbH & Co. KG.</li>

            <li>Project: gas pipeline «Looping»</li>

            <li>Products: 2 sets of pig launcher and receiver</li>

            <li>Partners/Manufacturers: RMA Kehl GmbH & Co KG.</li>
          </div>
          <div class="block_items">
            <li> Project: Expansion of the Bagtyyarlyk-1 compressor station with a total capacity of 60 million m3 per day</li>

            <li>Products:  ball valves / gate valves / valves / fittings / flanges</li>

            <li>Partners/Manufacturers: RMA Kehl GmbH & Co. KG. / Allied International S.r.l.</li>

            <li>Project: own needs</li>

            <li>Products: ball valves</li>

            <li>Partners/Manufacturers: RMA Kehl GmbH & Co. KG.</li>

            <li>Project:  own needs</li>

            <li>Products: check valves</li>

            <li>Partners/Manufacturers: RMA Kehl GmbH & Co. KG.</li>
          </div>
        </div>
      </div>



      <div class="project_page-block">
        <div class="project_page-block--item">
          <div class="block_items">
            <div class="block_logo">
              <img alt="" class="block_logo-img" src="img/ProjectsLogoPetrofac.jpeg">
            </div>
            <li>Project:  gas pipeline at the “Galkynysh” field</li>

            <li>Products: 2 sets of pig launcher and receiver</li>

            <li>Partners/Manufacturers: RMA Kehl GmbH & Co. KG.</li>
          </div>
          <div class="block_items">
            <div class="block_logo">
              <img alt="" class="block_logo-img" src="img/ProjectsLogoMitsubishi.jpeg">
            </div>
            <li>Project:  construction of the “Garabogazkarbamid” plant</li>

            <li>End User: SC «Turkmenhimiya»</li>

            <li>Products:  centrifugal pumps</li>

            <li>Partners/Manufacturers: KSB Group</li>
          </div>
        </div>
      </div>



      <div class="project_page-block">
        <div class="project_page-block--item">
          <div class="block_items">
            <div class="block_logo">
              <img alt="" class="block_logo-img" src="img/ProjectsLogoToyo.jpeg">
            </div>
            <li>Project:  construction of the "Kiyanly" gas chemical complex</li>

            <li>End user: SC «Turkmengaz”</li>

            <li>Products:  centrifugal pumps</li>

            <li>Partners/Manufacturers: KSB Group</li>

          </div>
          <div class="block_items">

            <div class="block_logo">
              <img alt="" class="block_logo-img" src="img/ProjectsLogoBouygues.jpeg">
            </div>
            <li> Project:  construction of the "Arkadag" hotel</li>

            <li>End User: Ashgabat city hall</li>

            <li>Products:  centrifugal pumps</li>

            <li>Partners/Manufacturers: KSB Group</li>
          </div>
        </div>
      </div>



      <div class="project_page-block">
        <div class="project_page-block--item">
          <div class="block_items">
            <div class="block_logo">
              <img alt="" class="block_logo-img" src="img/ProjectsLogoRonesans.jpeg">
            </div>
            <li>Project: construction of the Garagum Hotel</li>

            <li>End User:  Ashgabat city hall</li>

            <li>Products:  centrifugal pumps</li>

            <li>Partners/Manufacturers: KSB Group</li>
          </div>
          <div class="block_items">

            <q-btn class="block_name block_border-btn" data-aos="fade-right" @click="blockGurlushyk">
              <div class="btn-content">
                <p class="btn-name"> Dost Gurlushyk, Sowda, Onumchilik XO </p>
                <img :class="!showGurlushyk ? 'rotate-animation' : 'rotate-animation-obj'" src="/icons/Arrowblack.svg">
              </div>

            </q-btn>
            <div class="block_info" data-aos="zoom-in" v-if="showGurlushyk">
              <div class="block_logo block_logo-border">
              <h4>Dost Gurlushyk, Sowda,<br>
                Onumchilik XO</h4>

            </div>
            <li>Project: construction of the "Akhal City" water treatment plant</li>

            <li>End User:  Akhal region hall</li>

            <li>Products:  centrifugal pumps</li>

            <li>Partners/Manufacturers: KSB Group</li>

            <li>Project: construction of the Kaka irrigation pumping station</li>

            <li>End User:  Akhal region hall</li>

            <li>Products:  centrifugal pumps</li>

            <li>Partners/Manufacturers: KSB Group</li>
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
  name: 'ProjectPage'
})
</script>

<style scoped>
li {
  font-size: 16px;
}

h3 {
  font-size: 70px;
  font-weight: bold;
  margin: 0 20%;
  text-align: center;
  line-height: 1.0em;
  text-transform: uppercase;
}

@media screen and (max-width: 1450px) {
  h3 {
    width: 100%;

  }
}

@media screen and (max-width: 1450px) {
  h3 {
    font-size: 40px;

  }
}
@media screen and (max-width: 950px) {
  h3 {
    margin: 0 20px;
    font-size: 30px;

  }
}

.btn-name {
  margin: 0px;
  font-size: 16px;
  text-align: center;
}
.btn-content {
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-weight: bold;
}
.block_info{
  display: flex;
}
@media screen and (max-width: 1000px) {
  .block_info {
    flex-direction: column;

  }
}

.block_name {
  width: 100%;
  z-index: 1;
}

.block_li{
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 66.6%;
}
@media screen and (max-width: 1000px) {
  .block_li {
    width: 100%;

  }
}


.parallax{
  z-index: -1;
  width: 100vw;
  height: 100vh;
}

.project {
  display: flex;
  justify-content: center;
  background: white;
}
.project_page {
  display: flex;
  flex-direction: column;
  width: 70%;
  padding: 80px 0;
  background: white;
}
@media screen and (max-width: 700px) {
  .project_page {
    width: 100%;
  }
}
.project_page-block--logo {
  display: flex;
  justify-content: center;
}
.project_page-block--item {
  display: flex;
  padding: 0 5%;
}
@media screen and (max-width: 700px) {
  .project_page-block--item{
    flex-direction: column;
  }
}

.block_logo{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  text-align: center;
}
.block_logo-first {
  width: 70%;
}
.block_logo-img {
  width: 100%;
}
.block_items {
  width: 50%;
  padding: 0 40px;
}
@media screen and (max-width: 700px) {
  .block_items {
    width: 100%;
  }
}
</style>
