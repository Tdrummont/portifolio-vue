<template>
    <v-tooltip :text="texto" location="top">
        <template v-slot:activator="{ props }">
            <v-img  :src="imagem" v-bind="props" cover></v-img>
        </template>
    </v-tooltip>
</template>

<script>
export default {
    name: "tooltip-img",
    props: {
        imagem: {
            type: String,
        },
        texto: {
            type: String,
        }
    }
}
</script>