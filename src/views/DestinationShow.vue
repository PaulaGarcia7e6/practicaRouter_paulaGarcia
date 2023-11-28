<template>
    <div class="container">
        <h1>{{ locations.destinations[props.id - 1].name }}</h1>
        <RouterLink :to="{ name: 'home' }">
            <button>go back</button>
        </RouterLink>
        <div class="destination-details">
            <img :src="`/images/${locations.destinations[props.id - 1].image}`" alt="">
            <p> {{ locations.destinations[props.id - 1].description }} </p>
        </div>
        <section>
            <h2>Top experiences in {{ locations.destinations[props.id - 1].name }}</h2>
            <!-- fare un routerlink amb un v-for en aquest experience card passant l'argument per parametre (propietat: experience)-->
            <ExperienceCard :countryName="locations.destinations[props.id - 1].name"></ExperienceCard>
        </section>
    </div>
</template>
<script setup lang="ts">
import dades from "@/data.json"
import { ref } from "vue";
import ExperienceCard from "./ExperienceCard.vue";
const locations = ref(dades);
const props = defineProps([
    'id'
])

</script>