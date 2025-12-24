<template>
  <section class="py-5 bg-white">
    <div class="container">
      <h3 class="text-center mb-5 fw-bold text-muted small text-uppercase" style="letter-spacing: 2px;">
        Marcas que confían en nosotros
      </h3>
      <div class="row align-items-center justify-content-center g-4">
        <div 
          v-for="brand in sponsors" 
          :key="brand.id" 
          class="col-6 col-md-4 col-lg-2 text-center"
        >
          <a :href="brand.link" target="_blank" class="sponsor-link">
            <img 
              :src="brand.image" 
              :alt="brand.name" 
              class="img-fluid sponsor-logo"
            >
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useData } from '../composables/useData';
const { sponsors } = useData();
</script>

<style scoped>
.sponsor-logo {
  max-height: 50px;
  filter: grayscale(100%);
  opacity: 0.6;
  transition: all 0.3s ease;
}

.sponsor-logo:hover {
  filter: grayscale(0%);
  opacity: 1;
  transform: scale(1.05);
}

.sponsor-link {
  display: inline-block;
  padding: 10px;
}
</style>