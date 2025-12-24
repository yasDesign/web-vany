<template>
  <Navbar/>

  <router-view />

  <WhatsappBtn />
  
  <SponsorsSection />
  
  <footer class="py-5 text-center bg-white mt-5">
    <p>© 2025 {{ siteConfig?.name }} - Hecho con ❤️</p>
  </footer>
</template>

<script setup>
import { useData } from './composables/useData';
import WhatsappBtn from './components/WhatsappBtn.vue';
import SponsorsSection from './components/SponsorsSection.vue';
import Navbar from './components/Navbar.vue';

const { siteConfig } = useData();
</script>