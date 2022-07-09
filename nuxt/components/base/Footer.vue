<script setup lang="ts">
import { APP_NAME } from '~/env';
</script>

<template>
  <footer class="bg-gray-50">
    <UiContainer>
      <div class="py-16">
        <img class="mx-auto h-10 w-auto" src="/miasistente-logo.svg" alt="Logo" />

        <nav class="mt-10 text-sm" aria-label="Enlaces rápidos">
          <ul class="-my-1 flex justify-center space-x-6">
            <li>
              <NuxtLink to="#funciones" class="nav-link">Funciones</NuxtLink>
            </li>
            <!-- <li>
              <NuxtLink to="#videos" class="nav-link">Videos</NuxtLink>
            </li> -->
            <li>
              <NuxtLink to="#precios" class="nav-link">Precios</NuxtLink>
            </li>
          </ul>
        </nav>
      </div>

      <div class="flex flex-col items-center border-t border-gray-400/10 py-10 justify-center">
        <!-- TODO: Add socials -->
        <!-- <div class="flex space-x-6">
          <a href="#" class="group">
            <span class="sr-only">{{ APP_NAME }} en Twitter</span>
            <BxBxlTwitter aria-hidden="true" class="social-icon" />
          </a>
          <a href="#" class="group">
            <span class="sr-only">{{ APP_NAME }} en Instagram</span>
            <BxBxlInstagram aria-hidden="true" class="social-icon" />
          </a>
        </div> -->

        <p class="mt-6 text-center text-sm text-gray-500 sm:mt-0 sm:text-left">
          Copyright &copy; {{ new Date().getFullYear() }} {{ APP_NAME }}. Todos los derechos reservados
        </p>
      </div>
    </UiContainer>
  </footer>
</template>

<style scoped>
.nav-link {
  @apply rounded-lg py-1 px-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900;
}

.social-icon {
  @apply h-6 w-6 text-gray-500 group-hover:text-gray-700;
}
</style>
