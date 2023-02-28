<template>
    <v-app-bar app color="black" dark flat class="px-12">
        <v-btn @click="abrirEasterEgg">
            <v-icon color="yellow"  left class="mr-2">mdi-google-downasaur</v-icon>TDrummont
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn text @click="scroll('home')" class="text-yellow">Home</v-btn>
        <v-btn text @click="scroll('about')">About</v-btn>
        <v-btn text @click="scroll('portifolio')">Portifolio</v-btn>
        <v-btn text @click="scroll('services')">Services</v-btn>
        <v-btn text @click="scroll('page')">Page</v-btn>
        <v-btn text @click="scroll('biog')">Biog</v-btn>
        <v-btn text @click="scroll('contact')">Contact</v-btn>
    </v-app-bar>
</template>

<script>
export default {
    methods: {
        scroll(refName) {
            const element = document.getElementById(refName);
            element.scrollIntoView({behavior: "smooth"});
        },
       abrirEasterEgg(){
        window.open("https://wayou.github.io/t-rex-runner/","_blank");
      },
    }
}
</script>

<style>

</style>