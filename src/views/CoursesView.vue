<template>
  <div class="container py-5">
    <div class="text-center mb-5">
      <h2 class="display-5 fw-bold">Nuestros Cursos</h2>
      <p class="text-muted">Aprende habilidades digitales para tu emprendimiento</p>
    </div>

    <div class="row mb-4 justify-content-center">
      <div class="col-md-6">
        <div class="input-group mb-3">
          <span class="input-group-text bg-white border-end-0 rounded-start-pill ps-4">
            <i class="bi bi-search text-muted"></i>
          </span>
          <input 
            type="text" 
            v-model="search" 
            class="form-control border-start-0 rounded-end-pill py-2 shadow-none" 
            placeholder="Buscar por nombre o tema..."
          >
        </div>
      </div>
    </div>

    <div class="d-flex flex-wrap justify-content-center gap-2 mb-5">
      <button 
        v-for="cat in categories" 
        :key="cat"
        @click="selectedCategory = cat"
        class="btn btn-sm rounded-pill px-4 transition-all"
        :class="selectedCategory === cat ? 'btn-primary shadow' : 'btn-outline-secondary border-0 bg-light'"
      >
        {{ cat }}
      </button>
    </div>

    <div class="row g-4">
      <div class="col-12 col-md-6 col-lg-3" v-for="course in filteredCourses" :key="course.id">
        <CourseCard :course="course" />
        <div class="d-grid mt-2">
          <a :href="getWhatsappUrl(course)" target="_blank" class="btn btn-outline-success btn-sm rounded-pill">
            <i class="bi bi-whatsapp me-1"></i> Consultar
          </a>
        </div>
      </div>

      <div v-if="filteredCourses.length === 0" class="text-center py-5">
        <i class="bi bi-search fs-1 text-muted opacity-50"></i>
        <p class="mt-3 text-muted">No encontramos cursos que coincidan con tu búsqueda.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useData } from '../composables/useData';
import CourseCard from '../components/CourseCard.vue';

const { courses, siteConfig } = useData();
const search = ref('');
const selectedCategory = ref('Todos');

// Extraer categorías únicas dinámicamente desde el JSON
const categories = computed(() => {
  const cats = courses.value.map(c => c.category);
  return ['Todos', ...new Set(cats)];
});

// Lógica de filtrado combinada (Buscador + Categoría)
const filteredCourses = computed(() => {
  return courses.value.filter(c => {
    const matchesSearch = c.name.toLowerCase().includes(search.value.toLowerCase()) ||
                          c.tags.some(t => t.toLowerCase().includes(search.value.toLowerCase()));
    
    const matchesCategory = selectedCategory.value === 'Todos' || c.category === selectedCategory.value;

    return matchesSearch && matchesCategory;
  });
});

const getWhatsappUrl = (course) => {
  if (!siteConfig.value) return '#';
  const courseUrl = `${window.location.origin}/cursos/${course.id}`;
  const message = encodeURIComponent(`¡Hola! Me interesa el curso: ${course.name}\nVer detalles: ${courseUrl}`);
  return `https://wa.me/${siteConfig.value.phone}?text=${message}`;
};
</script>

<style scoped>
.transition-all {
  transition: all 0.3s ease;
}

.btn-primary {
  background-color: var(--primary-pink);
  border-color: var(--primary-pink);
}

.btn-outline-secondary:hover {
  background-color: #eee;
  color: var(--dark-text);
}
</style>