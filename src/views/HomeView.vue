<template>
    <div>
        <HeroSection />
        <LatestCourses />
    </div>
</template>
<script setup>
import { useSeo } from '../composables/useSeo';
import HeroSection from '../components/HeroSection.vue';
import LatestCourses from '../components/LatestCourses.vue';

const { updateMeta } = useSeo();

onMounted(() => {
  updateMeta(
    'Inicio', 
    'Aprende repostería y habilidades digitales para potenciar tu emprendimiento.'
  );
});

</script>