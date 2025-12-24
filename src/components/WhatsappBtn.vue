<template>
  <a :href="'https://wa.me/' + config?.whatsapp" 
     class="whatsapp-float" target="_blank">
    <i class="bi bi-whatsapp"></i>
  </a>
</template>

<script setup>
import { useData } from '../composables/useData';
const { config } = useData();
</script>

<style scoped>
.whatsapp-float {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #25d366;
  color: white;
  width: 60px;
  height: 60px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  box-shadow: 2px 2px 10px rgba(0,0,0,0.2);
  z-index: 1000;
}
</style>