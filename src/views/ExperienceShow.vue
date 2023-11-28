<template>
    <div v-if="experience">
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
import { onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()
const data = ref(dades.destinations);// Nombre del país deseado
interface Experience {
    name: string;
    image: string;
    description: string
}
const experience = ref<Experience | null>(null);
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
watch(
    () => route.params.experienceSlug,
    (newSlug) => {
        const fetchedNewSlug = findExperienceBySlug(newSlug as string)
        experience.value = fetchedNewSlug
    }
)
console.log(experience.value)
</script>