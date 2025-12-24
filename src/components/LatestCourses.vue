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
          <div class="d-grid mt-2">
            <a :href="getWhatsappUrl(course)" target="_blank" class="btn btn-outline-success btn-sm rounded-pill">
              <i class="bi bi-whatsapp me-1"></i> Info
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue';
import { useData } from '../composables/useData';
import CourseCard from './CourseCard.vue';

const { courses, siteConfig } = useData();

// Lógica para filtrar los últimos 4 cursos
const latestCourses = computed(() => {
  // Clonamos el array para no mutar el original y tomamos los últimos 4
  return [...courses.value].reverse().slice(0, 4);
});

const getWhatsappUrl = (course) => {
  if (!siteConfig.value) return '#';
  const courseUrl = `${window.location.origin}/cursos/${course.id}`;
  const message = encodeURIComponent(`¡Hola! Me interesa el curso: ${course.name}\nVer detalles: ${courseUrl}`);
  return `https://wa.me/${siteConfig.value.phone}?text=${message}`;
};
</script>