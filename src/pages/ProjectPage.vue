<template>
  <q-page class="">
    <div class="main-block">
      <h3 style="color: white"
          data-aos="zoom-in"
          data-aos-easing="ease"
          data-aos-delay="500">
        The showcase of grand projects executed by the Dengo team</h3>
    </div>
<div class="project">
    <div class="project_page">
      <div class="project_page-block">
        <div class="project_page-block--item">
          <div class="block_items">
            <q-btn class="block_name block_border-btn " data-aos="fade-right" @click="blockTurkmengaz">
              <div class="btn-content"><p class="btn-name"> Turkmengaz </p>
                <img :class="!showTurkmengaz ? 'rotate-animation' : 'rotate-animation-obj'" src="/icons/Arrowblack.svg">
              </div>
            </q-btn>
            <div class="block_info" style="display: flex; align-items: center" data-aos="zoom-in" v-if="showTurkmengaz">
              <div class="block_logo block_logo-border">
                <img alt="" class="block_logo-img" src="/img/ProjectsLogoTurkGaz.jpeg">
              </div>
              <div class="block_li">
                <div class="block_li-one block_li-border">
                  <li>Project:  Booster compressor station "Malay" Shop A & B / total capacity 90 million m3 per day.</li>

                  <li>Products:  ball valves / gate valves / valves / pumps / fittings / flanges.</li>

                  <li>Partners/Manufacturers: RMA Kehl GmbH & Co. KG. / KSB Group / Allied International S.r.l.</li>

                  <li>Project: main gas pipeline "East-West" with a length of 818 km</li>

                  <li>Products: 14 sets of pig launcher and receiver</li>

                  <li>Partners/Manufacturers: RMA Kehl GmbH & Co. KG.</li>

                  <li>Project: gas pipeline «Looping»</li>

                  <li>Products: 2 sets of pig launcher and receiver</li>

                  <li>Partners/Manufacturers: RMA Kehl GmbH & Co KG.</li></div>
                <div class="block_li-two block_li-border">
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
          </div>
        </div>
      </div>



      <div class="project_page-block">
        <div class="project_page-block--item">
          <div class="block_items">
            <q-btn class="block_name block_border-btn" data-aos="fade-right" @click="blockPetrofac">
              <div class="btn-content"><p class="btn-name"> Petrofac </p>
                <img :class="!showPetrofac ? 'rotate-animation' : 'rotate-animation-obj'" src="/icons/Arrowblack.svg">
              </div>

            </q-btn>
            <div class="block_info" data-aos="zoom-in" v-if="showPetrofac">
              <div class="block_logo block_logo-border">
                <img alt="" class="block_logo-img" src="/img/ProjectsLogoPetrofac.jpeg">
              </div>
              <div class="block_li block_li-border">
                <li>Project:  gas pipeline at the “Galkynysh” field</li>

                <li>Products: 2 sets of pig launcher and receiver</li>

                <li>Partners/Manufacturers: RMA Kehl GmbH & Co. KG.</li>
              </div>
            </div>
            </div>

          <div class="block_items">
            <q-btn class="block_name block_border-btn" data-aos="fade-right" @click="blockMitsubishi">
              <div class="btn-content"><p class="btn-name"> Mitsubishi </p>
                <img :class="!showMitsubishi ? 'rotate-animation' : 'rotate-animation-obj'" src="/icons/Arrowblack.svg">
              </div>

            </q-btn>
            <div class="block_info" data-aos="zoom-in" v-if="showMitsubishi">

              <div class="block_logo block_logo-border">
                <img alt="" class="block_logo-img" src="/img/ProjectsLogoMitsubishi.jpeg">
              </div>
              <div class="block_li block_li-border">
                <li>Project:  construction of the “Garabogazkarbamid” plant</li>

                <li>End User: SC «Turkmenhimiya»</li>

                <li>Products:  centrifugal pumps</li>

                <li>Partners/Manufacturers: KSB Group</li>
              </div>
            </div>
          </div>

        </div>

      </div>



      <div class="project_page-block">

        <div class="project_page-block--item">
          <div class="block_items">
            <q-btn class="block_name block_border-btn" data-aos="fade-right" @click="blockToyo">
              <div class="btn-content">
                <p class="btn-name"> TOYO </p>
                <img :class="!showToyo ? 'rotate-animation' : 'rotate-animation-obj'" src="/icons/Arrowblack.svg">
              </div>

            </q-btn>
            <div class="block_info" data-aos="zoom-in" v-if="showToyo">

            <div class="block_logo block_logo-border">
              <img alt="" class="block_logo-img" src="/img/ProjectsLogoToyo.jpeg">
            </div>
              <div class="block_li block_li-border">
                <li>Project:  construction of the "Kiyanly" gas chemical complex</li>

                <li>End user: SC «Turkmengaz”</li>

                <li>Products:  centrifugal pumps</li>

                <li>Partners/Manufacturers: KSB Group</li>
              </div>
            </div>

          </div>
          <div class="block_items">
            <q-btn class="block_name block_border-btn" data-aos="fade-right" @click="blockBoygues">
              <div class="btn-content">
                <p class="btn-name"> BOUYGUES </p>
                <img :class="!showBoygues ? 'rotate-animation' : 'rotate-animation-obj'" src="/icons/Arrowblack.svg">
              </div>

            </q-btn>
            <div class="block_info" data-aos="zoom-in" v-if="showBoygues">
              <div class="block_logo block_logo-border">
                <img alt="" class="block_logo-img" src="/img/ProjectsLogoBouygues.jpeg">
              </div>
              <div class="block_li block_li-border">
                <li> Project:  construction of the "Arkadag" hotel</li>

                <li>End User: Ashgabat city hall</li>

                <li>Products:  centrifugal pumps</li>

                <li>Partners/Manufacturers: KSB Group</li>
              </div>
            </div>


          </div>
        </div>
      </div>



      <div class="project_page-block">
        <div class="project_page-block--item">
          <div class="block_items">
            <q-btn class="block_name block_border-btn" data-aos="fade-right" @click="blockRonesasn">
              <div class="btn-content">
                <p class="btn-name"> RONESASN </p>
                <img :class="!showRonesasn ? 'rotate-animation' : 'rotate-animation-obj'" src="/icons/Arrowblack.svg">
              </div>

            </q-btn>
            <div class="block_info" data-aos="zoom-in" v-if="showRonesasn">

              <div class="block_logo block_logo-border">
                <img alt="" class="block_logo-img" src="/img/ProjectsLogoRonesans.jpeg">
              </div>
              <div class="block_li block_li-border">
                <li>Project: construction of the Garagum Hotel</li>

                <li>End User:  Ashgabat city hall</li>

                <li>Products:  centrifugal pumps</li>

                <li>Partners/Manufacturers: KSB Group</li>
              </div>
            </div>

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
              <div class="block_li block_li-border">
                <li>Project: construction of the "Akhal City" water treatment plant</li>

                <li>End User:  Akhal region hall</li>

                <li>Products:  centrifugal pumps</li>

                <li>Partners/Manufacturers: KSB Group</li>

                <li>Project: construction of the Kaka irrigation pumping station</li>

                <li>End User:  Akhal region hall</li>

                <li>Products:  centrifugal pumps</li>

                <li>Partners/Manufacturers: KSB Group</li>
              </div></div>

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
  name: 'ProjectPage',

  data() {
    return {
      showTurkmengaz: false,
      showPetrofac: false,
      showMitsubishi: false,
      showToyo: false,
      showBoygues: false,
      showRonesasn: false,
      showGurlushyk: false,
    };
  },
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    blockTurkmengaz() {
      this.showTurkmengaz = !this.showTurkmengaz
    },
    blockPetrofac() {
      this.showPetrofac = !this.showPetrofac
    },
    blockMitsubishi() {
      this.showMitsubishi = !this.showMitsubishi
    },
    blockToyo() {
      this.showToyo = !this.showToyo
    },
    blockBoygues() {
      this.showBoygues = !this.showBoygues
    },
    blockRonesasn() {
      this.showRonesasn = !this.showRonesasn
    },
    blockGurlushyk() {
      this.showGurlushyk = !this.showGurlushyk
    },
  },
},
)
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

.block_li-border {
  border-width: 2px;
  border-radius: 20px;
  background-position: center center;
  border-color: black;
  border-style: solid;
  margin: 20px;
  padding: 30px;
}
@media screen and (max-width: 1000px) {
  .block_li-border {
    margin: 20px 0;

  }
}

.block_logo-border {
  border-width: 2px;
  border-radius: 40px;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  border-color: black;
  border-style: solid;
  padding: 20px;
  margin: 20px
}
@media screen and (max-width: 1000px) {
  .block_logo-border {
    margin: 20px 0;

  }
}

.block_border-btn {
  margin: 20px 0px;
  border-width: 2px;
  border-radius: 20px;
  background-position: center center;
  border-color: black;
  border-style: solid;
}


.main-block{
  width: 100vw;
  height: 100vh;
  background-image: url("/img/projects.jpg");
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
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

.project_page-block--item {
  display: flex;
  padding: 0 5%;
  flex-direction: column;
}


.block_logo{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 33.3%;
  height: 400px;
  text-align: center;
}
@media screen and (max-width: 1000px) {
  .block_logo {
    width: 100%;
  }
}
@media screen and (max-width: 450px) {
  .block_logo {
    width: 100%;
    height: 200px;
  }
}

.block_logo-img {
  width: 100%;
  scale: 1.5;
  z-index: -1;
}
.block_items {
  width: 100%;
  padding: 0 40px;
}
@media screen and (max-width: 700px) {
  .block_items {
    width: 100%;
  }
}

.rotate-animation {
  rotate: 0;
  transition: 1s;
}

.rotate-animation-obj {
  transform: rotate(180deg);
  transition: 1s;
}
</style>
