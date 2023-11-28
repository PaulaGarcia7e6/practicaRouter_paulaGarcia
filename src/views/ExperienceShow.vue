<template>
    <div v-if="experience" class="experience-details">
        <h3> {{ experience.name }} </h3>
        <img :src="`/images/${experience.image}`" alt="experience.image">
        <p> {{ experience.description }} </p>
    </div>
    <div v-else>
        <p>No s'ha trobat experiencia</p>
    </div>
</template>
<script setup lang="ts">
import dades from '@/data.json';
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
const props = defineProps([
    'experienceSlug' //Al final no lo he utilizado
])
const route = useRoute()
const data = ref(dades.destinations);
interface Experience {
    name: string;
    image: string;
    description: string
}
const experience = ref<Experience | null>(null);
// Busca la experiencia a traves del parametro pasado. 
const findExperienceBySlug = (experienceSlug: string | null) => {
    let foundExperience = null;
    data.value.forEach((destination) => {
        destination.experiences.forEach((experience) => {
            if (experience.slug === experienceSlug) {
                foundExperience = experience;
                return;
            }
        });
    });
    return foundExperience;
};
// Asignamos el parametro
experience.value = findExperienceBySlug(route.params.experienceSlug as string)
// Watcher detecta si hay cambios del route
watch(
    () => route.params.experienceSlug,
    (newSlug) => {
        const fetchedNewSlug = findExperienceBySlug(newSlug as string)
        experience.value = fetchedNewSlug
    }
)
</script>
<style scoped>
.experience-details p {
    display: inline-block;
}
</style>