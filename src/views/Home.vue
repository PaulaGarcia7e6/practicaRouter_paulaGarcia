<template>
    <div>
        <RouterLink v-for="destination in info" :key="destination.id" :to="{name:'destination.show',params:{id:destination.id}}">
            <h2> {{ destination.name }} </h2>
            <img :src="`/src/assets/images/${destination.image}`" alt="destination.name">
        </RouterLink>
        <RouterView></RouterView>
    </div>
</template>
<script setup lang="ts">
import dades from "@/data.json"
import { ref } from "vue";
const info=ref(dades.destinations)
</script>
<style scoped>
div {
    display: flex;
    flex-wrap: wrap;
}
img {
    width: 250px;
}
a {
    margin: 10px;
}
</style>