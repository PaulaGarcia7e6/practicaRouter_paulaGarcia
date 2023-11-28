<template>
    <h1>{{ locations.destinations[locationId - 1].name }}{{ props.id }}</h1>
    <RouterLink :to="{name:'home'}">
        <button>go back</button>
    </RouterLink>
    <p> {{ locations.destinations[locationId - 1].description }} </p>
    <img :src="`/src/assets/images/${locations.destinations[locationId - 1].image}`" alt="">
    <section>
        <h2>Top experiences in {{ locations.destinations[locationId - 1].name  }}</h2>
        <ExperienceCard :countryName="locations.destinations[locationId - 1].name"></ExperienceCard>
        <!-- fare un routerlink amb un v-for en aquest experience card passant l'argument per parametre (propietat: experience)-->
    </section>
</template>
<script setup lang="ts">
import dades from "@/data.json"
import { ref } from "vue";
import { useRoute } from 'vue-router'
import ExperienceCard from "./ExperienceCard.vue";
const locations = ref(dades)
const route = useRoute()
const locationId = <number><any>route.params.id
const props = defineProps([
    'id'
])
</script>