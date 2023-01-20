<template>
  <v-app id=home>
  <NavBar />
  <v-container fluid>

  </v-container>

  </v-app>
  </template>

<script>
import NavBar from '@/components/NavBar.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomeView',

  components: (
    NavBar
  )
})
</script>