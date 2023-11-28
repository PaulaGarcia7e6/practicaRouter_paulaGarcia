<template>
    <div class="experiences">
        <div class="cards">
            <RouterLink v-for="experience in experiences" :key="experience.slug"
            :to="{ name: 'experience.name', params: { experienceSlug: experience.slug } }" class="card">
            <img :src="`/images/${experience.image}`" :alt="experience.name">
            <p class="card__text">{{ experience.name }}</p>
        </RouterLink>
        </div>
    </div>
    <router-view></router-view>
</template>
  
<script setup lang="ts">
import dades from "@/data.json";
import { ref, watch } from "vue";

interface Experience {
  name: string;
  slug: string;
  image: string;
  description: string;
}
const props = defineProps<{
  countryName: string;
}>(); 

const info = ref(dades.destinations);
const countryExperiences = info.value.find(dest => dest.name === props.countryName);
// Define el ref de experiencias utilizando la interfaz definida
const experiences = ref<Experience[]>([]);
if (countryExperiences) {
  experiences.value = countryExperiences.experiences || [];
} else {
  // Si no se encontró ninguna experiencia para el país, puedes asignar un valor predeterminado o dejarlo vacío
  experiences.value = [];
}

// Watcher para detectar cambios en props.countryName
watch(() => props.countryName, (newVal, oldVal) => {
  const countryExperiences = info.value.find(
    (dest: { name: string; experiences: Experience[] }) => dest.name === newVal
  );
  if (countryExperiences) {
    experiences.value = countryExperiences.experiences || [];
  }
});


</script>
  