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
            <div class="block_logo">
              <h3>Dost Gurlushyk, Sowda,<br>
                Onumchilik XO</h3>
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
h3 {
  font-size: 30px;
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
