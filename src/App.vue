<template>
  <div id="app">
    <NavbarPage />
    <div class="main-content">
      <!-- Contenido principal de tu aplicación -->
      <router-view />
    </div>
  </div>
</template>

<script>
import NavbarPage from '@/components/Navbar/NavbarPage.vue';

export default {
  name: 'app',
  components: {
    NavbarPage,
  },
};
</script>