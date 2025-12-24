<template>
  <nav class="navbar navbar-expand-lg sticky-top custom-navbar">
    <div class="container">
      <router-link class="navbar-brand d-flex align-items-center gap-2" to="/">
        <div class="logo-blob">
          <img :src="siteConfig?.logo" v-if="siteConfig?.logo" alt="Logo" width="30">
        </div>
        <span class="fw-bold brand-text">{{ siteConfig?.name }}</span>
      </router-link>

      <button 
        class="navbar-toggler border-0 shadow-none" 
        type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#navbarNav"
      >
        <i class="bi bi-list fs-1 text-primary"></i>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto align-items-center gap-2">
          <li class="nav-item">
            <router-link class="nav-link custom-link" to="/" active-class="active-link">
              Inicio
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link custom-link" to="/cursos" active-class="active-link">
              Cursos
            </router-link>
          </li>
          <li class="nav-item ms-lg-3">
            <a :href="'https://wa.me/' + siteConfig?.whatsapp" target="_blank" class="btn btn-primary rounded-pill px-4 shadow-sm">
              Contactar
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { useData } from '../composables/useData';
const { siteConfig } = useData();
</script>

<style scoped>
/* Efecto Glassmorphism */
.custom-navbar {
  background: rgba(255, 245, 242, 0.8); /* Tu color soft-cream con transparencia */
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  transition: all 0.3s ease;
  z-index: 1030;
}

.brand-text {
  color: var(--dark-text);
  letter-spacing: -0.5px;
  font-size: 1.4rem;
}

.logo-blob {
  background: var(--primary-pink);
  padding: 8px;
  border-radius: 40% 60% 60% 40% / 40% 40% 60% 60%;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Enlaces personalizados */
.custom-link {
  color: var(--dark-text);
  font-weight: 500;
  padding: 8px 16px !important;
  border-radius: 20px;
  transition: all 0.3s ease;
}

.custom-link:hover {
  color: var(--primary-pink);
  background: rgba(255, 133, 162, 0.1);
}

/* Clase activa cuando estás en la página */
.active-link {
  color: var(--primary-pink) !important;
  font-weight: 700;
}

/* Ajustes para móvil */
@media (max-width: 991px) {
  .navbar-collapse {
    background: white;
    margin-top: 15px;
    padding: 20px;
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.05);
  }
}
</style>