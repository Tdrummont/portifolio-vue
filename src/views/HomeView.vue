<!--suppress CssInvalidPropertyValue -->
<template>
  <v-app>
      <NavBar />
      <v-container fluid>
        <div class="head">
          <v-row>
            <v-col cols="5">
              <div style="position: relative" class="mt-16">
                <h1 class="text-grey">Hello,</h1>
                <h1 class="text-white">I'm TDrummont</h1>
                <span class="text-grey">Web Developer FullStack Jr</span><br /><br/>
                <v-btn tile dark class="text-yellow mt8" variant="outlined">Contact me</v-btn>
              </div>
            </v-col>
            <v-col cols="2">
              <div style="position: absolute;z-index: 9999;bottom:0;margin-left:auto;margin-right: auto;left:0;right:0;text-align:center">
                <v-icon>fas fa-angle-double-down</v-icon>
              </div>
            </v-col>
          </v-row>
        </div>
        <v-col cols="12" class="mt-16" id="about">
          <div>
            <v-row>
              <v-col cols="12" sm="6">
                <div class="egg">
                  <v-img src="4.png" max-height="300"></v-img>
                </div>
              </v-col>
              <v-col cols="12" sm="6">
                <h5 class="mt-16">About Me</h5>
                <div style="width: 120px">
                <v-slider
                  class="align-center"
                  v-model="slider"
                  color="yellow"
                  max="50"
                  min="10"
                  step="1"
                ></v-slider>
                </div>
                <h4 class="mt-n4">I Am a Web Developer</h4>
                <h4>And Musician</h4>
                <p
                  :style="font"
                  class="text-grey">
                    I've been a web developer for 2 years,<br />
                    I'm studying systems analysis and development at Estacio iesam.<br />
                    I have experience with  css, javascript, docker, php, vueJS, ruby on rails, PostgreSQL, DBeaver.
                </p>
                <br />
                <p
                  :style="font"
                  class="text-grey"
                  >
                  I've also been a musician for 19 years,
                  I play guitar, drums, make original compositions, I'm self-taught.</p>
                <v-btn
                 tile dark color="yellow"
                 class="mt-4"
                 > Download Resume
                </v-btn>
              </v-col>
            </v-row>
          </div>
        </v-col>
        <div class="text-center mt-4">
          <h2>What I Do</h2>
        </div>
        <div class="align-content-right">
          <v-row class="padd" id="portifolio">
              <v-col cols="12" md="3">
                <div class="child">
                  <v-btn icon="mdi-youtube" @click="abrirYoutube" color="#FBDF7E" class="text-black"></v-btn>
                  <h3 class="ml-3 mt-4">Youtube channel</h3>
                  <p class="text-grey ml-3 mt-4 text-caption">
                    On youtube I show my work with music where I have my copyright compositions.</p>
                </div>
              </v-col>
              <v-col cols="12" md="3">
                <div class="child">
                  <v-btn icon="mdi-github" @click="abrirGithub" color="#FBDF7E" class="text-black"></v-btn>
                  <h3 class="ml-3 mt-4">GitHub</h3>
                  <p class="text-grey ml-3 mt-4 text-caption">
                    My github profile where I upload my codes and projects.
                    .</p>
                </div>
              </v-col>
              <v-col cols="12" md="3">
                <div class="child">
                  <v-btn icon="mdi-linkedin" @click="abrirLinkedIn" color="#FBDF7E" class="text-black"></v-btn>
                  <h3 class="ml-3 mt-4">Social Network</h3>
                  <p class="text-grey ml-3 mt-4 text-caption">
                    My professional profile on linkedIn, where I have my certifications and work history
                    .</p>
                </div>
              </v-col>
              <v-col cols="12" md="3">
                <div class="child">
                  <v-btn  icon="mdi-instagram"  @click="abrirInsta" color="#FBDF7E" class="text-black"></v-btn>
                  <h3 class="ml-3 mt-4">Photography</h3>
                  <p class="text-grey ml-3 mt-4 text-caption">
                    My instagram if you want to follow my day closely.
                    .</p>
                </div>
              </v-col>
        </v-row>

        </div>
        <v-divider></v-divider>
        <v-col cols="12" sm="12" id="services">
          <div class="d-flex justify-center mt-12">
            <v-btn color="#FBDF7E" class="mr-2">My Skills</v-btn>
          </div>
        </v-col>
        <v-col
          cols="12"
          id="page"
          >
          <v-row class="d-flex justify-space-around mt-12">
          <v-col cols="3" md="3" class="d-flex justify-space-around mt-12" sm="4"  v-for="(item, i) in items" :key="i">
            <TooltipTalita
              :imagem="item.img"
              :texto="item.descricao" />
          </v-col>
        </v-row>
      </v-col>
      <v-divider></v-divider>
        <v-col cols="12" sm="12" id="services">
          <div class="d-flex justify-center mt-12">
            <v-btn color="#FBDF7E" class="mr-2">Photography</v-btn>
          </div>
        </v-col>
        <v-col
            cols="12"
            id="page"
            class="d-flex justify-space-around mt-12"
            >
          <div class="pre">
            <v-row>
            <v-col cols="12" md="12" class="d-flex justify-space-around mt-6" sm="4">
              <v-card
                  class="mw-auto"
                  max-width="230"
                  height="">
                <v-img
                  src="k.png"
                  height="230px"
                  cover
                ></v-img>
                <v-card-subtitle>
                  By @Tdrummont | 7 dez 2022
                </v-card-subtitle>
                <v-card-text>
                  SAMPA-SKY<br/>
                  "Come Out of Things Unsaid"
                </v-card-text>
              </v-card>
              <v-card
                  class="mw-auto"
                  max-width="230"
                  height="">
                <v-img
                  src="church.png"
                  height="230px"
                  cover
                ></v-img>
                <v-card-subtitle>
                  By @Tdrummont | 8 dez 2022
                </v-card-subtitle>
                <v-card-text>
                  São Paulo <br/>
                  Paróquia Nossa Senhora da Consolação
                </v-card-text>
              </v-card>
              <v-card
                  class="mw-auto"
                  max-width="230"
                  height="">
                <v-img
                  src="black.png"
                  height="230px"
                  cover
                ></v-img>
                <v-card-subtitle>
                  By @Tdrummont | 7 dez 2022
                </v-card-subtitle>
                <v-card-text>
                  SAMPA-SKY <br/>
                  "Menos rotina, mais roteiros!"
                </v-card-text>
              </v-card>
              <v-card
                  class="mw-auto"
                  max-width="230"
                  height="">
                <v-img
                  src="blue.png"
                  height="229px"
                  cover
                ></v-img>
                <v-card-subtitle>
                  By @Tdrummont | 7 dez 2022
                </v-card-subtitle>
                <v-card-text>
                  SAMPA-SKY<br/>
                  Let the sky fall
                  When it crumbles
                </v-card-text>
              </v-card>
            </v-col>
            </v-row>
          </div>
        </v-col>
        <v-col cols="12" sm="12" class="px-16" id="contact">
          <v-row>
            <v-col cols="12" sm="4">
              <div class="child">
                <h1>Contact info.</h1>
                <v-btn icon="mdi-map-marker" class="mt-10" variant="outlined"></v-btn><br />
                <span class="text-caption">Pass. São benedito n87</span> <br />
                <v-btn icon="mdi-phone" class="mt-10" variant="outlined"></v-btn><br />
                <span class="text-caption">(91)98572 - 9388</span><br />
                <v-btn icon="mdi-at" class="mt-10" variant="outlined"></v-btn><br />
                <span class="text-caption">tdrummont@gmail.com.br</span><br />
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-container>
      <FooterView />
  </v-app>
</template>

<script>
import { defineComponent } from 'vue';


// Components
import NavBar from '../components/NavBar.vue';
import FooterView from '@/components/FooterView.vue';
import TooltipTalita from '@/components/tooltip-img.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    NavBar,
    TooltipTalita,
    FooterView,

},
  data(){
    return {
      slider: 20,
      font: "font-size: 20px",
      items: [
        {
          img:"css.png",
          descricao: 'Css'
        },
        {
          img:"php.png",
          descricao: 'Php'
        },
        {
          img:"docker.png",
          descricao: 'Docker'
        },
        {
          img:"js.png",
          descricao: 'Javascript'
        },
        {
          img:"vue.png",
          descricao: 'Vue'
        },
        {
          img:"laravel.png",
          descricao: 'Laravel'
        },
        {
          img:"ruby1.png",
          descricao: 'Ruby'
        },
        {
          img:"github.png",
          descricao: 'GitHub'
        },


      ]
    }
  },
  methods:{
    abrirLinkedIn(){
      window.open("https://www.linkedin.com/in/thalita-s-costa-138159195/","_blank");
    },
    abrirInsta(){
      window.open("https://www.instagram.com/tdrummont/?next=%2F","_blank");
    },
    abrirYoutube(){
      window.open("https://www.youtube.com/@tdrummont511/videos","_blank");
    },
    abrirGithub(){
        window.open("https://github.com/Tdrummont","_blank");
    },
  },

  watch:{
    slider(v){
      this.font = `font-size: ${v}px`;
    },

  }

});
</script>

<style scoped>
/*.v-container{*/
/*  padding: 16px 0;*/

/*}*/
.head {
  position: relative;
  text-align: center;
  padding: 12px;
  margin-bottom: 6px ;
  height: 400px;
  width: 100%;
  color: white;
}
.head:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 50%;
  background: black;
  transform: skew(0deg, 6deg);
}
.head:after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 50%;
  background: black;
  transform: skew(0deg, -6deg);
}
.egg {
  display: block;
  margin-left: 100px;
  margin-top: 50px;
  width: 356px;
  height: 300px;
  background-color: #FBDF7E;
  border-radius: 50% 50% 50% 50% / 60% 60% 40% 0;
}
/*.first {*/
/*  width: 100%;*/
/*  height: 280px;*/
/*  text-align: center;*/
/*  padding: 2rem 2rem;*/
/*}*/
.child {
  padding: 2rem 1rem;
  vertical-align: middle;
  text-align: center;
  margin-right: 8px;
}

.child {
  display: incline-block;
}

/*.imgHover{*/
/*  padding: 0 200px;*/
/*}*/
.pre {
  width: 100%;
  height: 370px;
  text-align: center;
  padding: 0 200px;
  background-color: #f5f5f5;
}
/*.hire{*/
/*  width: 100%;*/
/*  height: 200px;*/
/*  padding: 0 200px;*/
/*  background-color: #e9e9e9;*/
/*  margin-top: -24px;*/
/*}*/
</style>