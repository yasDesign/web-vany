<template>
  <div class="container py-5 text-center min-vh-100 d-flex align-items-center justify-content-center">
    <div>
      <div class="blob-error mx-auto mb-4">
        <h1 class="display-1 fw-bold text-white">404</h1>
      </div>
      <h2 class="fw-bold">¡Ups! Página no encontrada</h2>
      <p class="text-muted mb-4">
        Parece que el postre que buscas no está en nuestro menú todavía.
      </p>
      <router-link to="/" class="btn btn-primary btn-lg rounded-pill px-5">
        Volver al Inicio
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.blob-error {
  width: 200px;
  height: 200px;
  background-color: var(--primary-pink);
  display: flex;
  align-items: center;
  justify-content: center;
  /* Forma orgánica similar a tus referencias */
  border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  animation: morph 8s ease-in-out infinite;
}

@keyframes morph {
  0% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
  50% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
  100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
}
</style>