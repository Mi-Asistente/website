<script setup lang="ts">
import { APP_URL, APP_URL_SIGN_IN } from '~/env';
</script>

<template>
  <header class="py-10">
    <UiContainer>
      <nav class="relative z-50 text-sm">
        <ul class="flex items-center">
          <li>
            <NuxtLink to="/" class="flex items-center">
              <span class="sr-only">Inicio</span>
              <img src="/miasistente-logo.svg" alt="Logo" />
              <span class="ml-2 font-extrabold text-gray-700 sm:text-lg">Mi Asistente</span>
            </NuxtLink>
          </li>

          <li class="ml-6 hidden md:block lg:ml-12">
            <NuxtLink to="#funciones" class="nav-link">Funciones</NuxtLink>
          </li>

          <!-- <li class="ml-6 hidden md:block">
            <NuxtLink to="#videos" class="nav-link">Videos</NuxtLink>
          </li> -->

          <li class="ml-6 hidden md:block">
            <NuxtLink to="#precios" class="nav-link">Precios</NuxtLink>
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
            <BaseMobileNavigation />
          </li>
        </ul>
      </nav>
    </UiContainer>
  </header>
</template>

<style scoped>
.nav-link {
  @apply rounded-lg py-1 px-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900;
}
</style>
