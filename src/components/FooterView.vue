<template>
    <footer>
        <v-card elevation="0" rounded="0" width="100%" class="bg-grey text-center">
            <v-card-text>
                <v-btn
                class="mw-4"
                icon="fas fa-comment"
                variant="plain"
                color="white"
                ></v-btn>
                <v-btn
                class="mw-4"
                icon="fas fa-university"
                variant="plain"
                color="white"
                ></v-btn>
                <v-btn
                class="mw-4"
                icon="fas fa-wifi"
                variant="plain"
                color="white"
                ></v-btn>
                <v-btn
                class="mw-4"
                icon="fas fa-podcast"
                variant="plain"
                color="white"
                ></v-btn>
            </v-card-text>
            <v-card-text class="text-white">
                @ {{ new Date().getFullYear() }} -
                <strong>By Tdrummont ALL Rights Reserved</strong>
            </v-card-text>
        </v-card>
    </footer>
</template>

<script>
export default {

}
</script>

<style>

</style>