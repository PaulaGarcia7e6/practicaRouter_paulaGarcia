<template>
    <div>
        <RouterLink v-for="experience in experiences" :key="experience.slug"
            :to="{ name: 'experience.name', params: { experienceSlug: experience.slug } }">
            <img :src="`/src/assets/images/${experience.image}`" :alt="experience.name">
            <h2>{{ experience.name }}</h2>
        </RouterLink>
        <router-view></router-view>
    </div>
</template>
  
<script setup lang="ts">
import dades from "@/data.json";
import { ref } from "vue";
const props = defineProps<{
    countryName: string;
}>();
const info = ref(dades.destinations);
const countryExperiences = info.value.find(dest => dest.name === props.countryName);
const experiences = ref(countryExperiences?.experiences || []);
console.log(experiences.value)
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
        margin: 0px 10px 0px 10px;
    }
</style>
  