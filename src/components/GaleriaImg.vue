<template>

    <v-card max-width="600px" elevation="0" position="left">
        <v-row>
            <v-col
            v-for="(item, i) in items" :key="i"

                class="d-flex child-flex"
                cols="4"
            >
            <v-img
            :src="item.img"
            aspect-ratio="1"
            cover
            class="bg-grey-lighten-2"
        >
          <template v-slot:placeholder>
            <v-row
              class="fill-height ma-0"
              align="center"
              justify="center"
            >
              <v-progress-circular
                indeterminate
                color="grey-lighten-5"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </v-col>
    </v-row>
    </v-card>

  </template>

  <script>
    export default({
        props: ["items"],

    })
    </script>