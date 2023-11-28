<template>
    <nav>
        <RouterLink v-for="destination in info" :key="destination.id" :to="{name:'destination.show',params:{id:destination.id}}">
            <p> {{ destination.name }} </p>
        </RouterLink>
    </nav>
</template>
<script setup lang="ts">
import dades from "@/data.json"
import { ref } from "vue";
const info=ref(dades.destinations)
</script>