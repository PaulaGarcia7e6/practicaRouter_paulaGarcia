<template>
    <div>
        <h3> {{$route.params.experienceSlug}} </h3>
        <img src="" alt="experience.image">
        <p>  </p>
    </div>
</template>
<script setup lang="ts">
import { useRoute } from 'vue-router';
import dades from '@/data.json';
import { ref } from 'vue';
const props = defineProps<{
    id: number;
}>();
const data = ref(dades.destinations);// Nombre del país deseado
const country = data.value.find(dest => dest.id === props.id);
const firstExperience = country?.experiences[0];
</script>