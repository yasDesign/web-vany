<template>
  <section class="py-5">
    <div class="container">
      <div class="d-flex justify-content-between align-items-end mb-4">
        <div>
          <h2 class="fw-bold mb-0">Últimos Cursos</h2>
          <p class="text-muted">Nuestras novedades más recientes</p>
        </div>
        <router-link to="/cursos" class="btn btn-outline-primary rounded-pill px-4">
          Ver todos
        </router-link>
      </div>

      <div class="row g-4">
        <div 
          class="col-12 col-md-6 col-lg-3" 
          v-for="course in latestCourses" 
          :key="course.id"
        >
          <CourseCard :course="course" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue';
import { useData } from '../composables/useData';
import CourseCard from './CourseCard.vue';

const { courses } = useData();

// Lógica para filtrar los últimos 4 cursos
const latestCourses = computed(() => {
  // Clonamos el array para no mutar el original y tomamos los últimos 4
  return [...courses.value].reverse().slice(0, 4);
});
</script>