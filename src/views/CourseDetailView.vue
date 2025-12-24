<template>
    <div class="container py-5" v-if="course">
        <div class="row align-items-start g-5">
            <div class="col-lg-6 sticky-lg-top" style="top: 100px;">
                <img :src="course.image" class="img-fluid rounded-5 shadow-lg w-100" :alt="course.name">
            </div>

            <div class="col-lg-6">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><router-link to="/cursos">Cursos</router-link></li>
                        <li class="breadcrumb-item active text-capitalize">{{ course.category }}</li>
                    </ol>
                </nav>

                <h6 class="display-6 fw-bold mb-3">{{ course.name }}</h6>
                
                <div class="d-flex align-items-center gap-3 mb-4">
                    <h2 class="text-primary fw-bold mb-0">
                        ${{ calculateDiscount(course) }}
                    </h2>
                    <span class="badge bg-danger rounded-pill px-3" v-if="course.discount > 0">
                        {{ course.discount }}% OFF
                    </span>
                </div>

                <h5 class="fw-bold mb-3 text-uppercase small" style="letter-spacing: 1px;">
                    ¿Qué aprenderás?
                </h5>

                <div class="course-content mb-5" v-html="course.content"></div>

                <div class="d-grid gap-2">
                    <a :href="whatsappUrl" target="_blank" class="btn btn-success btn-lg rounded-pill shadow-sm py-3">
                        <i class="bi bi-whatsapp me-2"></i> Inscribirme por WhatsApp
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, watch, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useData } from '../composables/useData';
import { useSeo } from '../composables/useSeo';

const route = useRoute();
const { getCourseById, calculateDiscount, siteConfig } = useData();
const course = ref(null);
const { updateMeta } = useSeo();

// watchEffect reacciona cuando el curso termina de cargar
watchEffect(() => {
  if (course.value) {
    updateMeta(
      course.value.name, 
      course.value.description, 
      course.value.image
    );
  }
});
// Usamos watch con immediate: true para cargar el curso inicial y reaccionar a cambios de ruta
watch(() => route.params.slug, (newSlug) => {
    course.value = getCourseById(newSlug);
}, { immediate: true });

const whatsappUrl = computed(() => {
    if (!course.value || !siteConfig.value) return '#';
    const message = encodeURIComponent(`¡Hola! Me interesa el curso: ${course.value.name}`);
    return `https://wa.me/${siteConfig.value.whatsapp}?text=${message}`;
});
</script>

<style scoped>
/* Estilos para las listas dentro del v-html */
.course-content :deep(ul) {
    list-style: none;
    padding-left: 0;
}

.course-content :deep(li) {
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    font-size: 1.1rem;
    color: #555;
    line-height: 1.5;
}

/* Icono personalizado para los items de la lista */
.course-content :deep(li::before) {
    content: "\F26E"; /* Código de icono 'check-circle' de Bootstrap Icons */
    font-family: "bootstrap-icons";
    position: absolute;
    left: 0;
    top: 0;
    color: var(--primary-pink, #ff85a2);
    font-size: 1.2rem;
}

.course-content :deep(h3), 
.course-content :deep(h4) {
    font-weight: 700;
    margin-top: 25px;
    margin-bottom: 15px;
    color: #333;
}

.course-content :deep(p) {
    color: #666;
    margin-bottom: 15px;
}
</style>