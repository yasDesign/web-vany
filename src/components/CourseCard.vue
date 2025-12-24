<template>
  <div class="card h-100 border-0 shadow-sm custom-card">
    <div class="card-img-container p-3">
      <img :src="course.image" class="card-img-top blob-shape" :alt="course.name">
    </div>
    <div class="card-body text-center pt-0">
      <span class="badge rounded-pill bg-light text-primary mb-2">{{ course.category }}</span>
      <h5 class="card-title fw-bold">{{ course.name }}</h5>
      <p class="card-text text-muted small">{{ course.description }}</p>
      
      <div class="d-flex justify-content-center align-items-center gap-2">
        <span class="text-decoration-line-through text-muted small" v-if="course.discount > 0">
          ${{ course.price }}
        </span>
        <span class="fs-4 fw-bold text-dark">
          ${{ calculateDiscount(course.price, course.discount) }}
        </span>
      </div>
      
      <router-link :to="'/curso/' + course.id" class="btn btn-primary mt-3 w-100">
        Ver Detalles
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { useData } from '../composables/useData';
const props = defineProps(['course']);
const { calculateDiscount } = useData();
</script>

<style scoped>
.custom-card {
  background: white;
  border-radius: 25px;
  transition: transform 0.3s ease;
}
.custom-card:hover {
  transform: translateY(-10px);
}
.blob-shape {
  border-radius: 30% 70% 70% 30% / 53% 30% 70% 47%;
  height: 200px;
  object-fit: cover;
}
</style>