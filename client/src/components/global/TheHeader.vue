<script setup lang="ts">
import { APP_URL, APP_URL_SIGN_IN } from '~/env';
</script>

<template>
  <header class="py-10">
    <Container>
      <nav class="relative z-50 text-sm">
        <ul class="flex items-center">
          <li>
            <RouterLink to="#" class="flex items-center">
              <span class="sr-only">Inicio</span>
              <img src="/miasistente-logo.svg" alt="Logo" />
              <span class="ml-2 font-extrabold text-gray-700 sm:text-lg">Mi Asistente</span>
            </RouterLink>
          </li>

          <li class="ml-6 hidden md:block lg:ml-12">
            <RouterLink to="#funciones" class="nav-link">Funciones</RouterLink>
          </li>

          <li class="ml-6 hidden md:block">
            <RouterLink to="#videos" class="nav-link">Videos</RouterLink>
          </li>

          <li class="ml-6 hidden md:block">
            <RouterLink to="#precios" class="nav-link">Precios</RouterLink>
          </li>

          <li class="ml-auto hidden md:block">
            <a :href="APP_URL" class="nav-link">Iniciar sesión</a>
          </li>

          <li class="ml-auto md:ml-8">
            <a :href="APP_URL_SIGN_IN" class="btn btn-primary">
              <span>Comenzar hoy<span class="hidden lg:inline"> mismo</span></span>
            </a>
          </li>

          <li class="ml-5 -mr-1 md:hidden">
            <TheMobileNavigation />
          </li>
        </ul>
      </nav>
    </Container>
  </header>
</template>

<style scoped>
.nav-link {
  @apply rounded-lg py-1 px-2 text-slate-700 hover:bg-slate-100 hover:text-slate-900;
}
</style>
