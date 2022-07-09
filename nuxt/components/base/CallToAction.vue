<script setup lang="ts">
import { APP_NAME, APP_URL_SIGN_IN } from '~/env';
</script>

<template>
  <section class="relative overflow-hidden bg-primary-600 py-32">
    <div aria-hidden="true" class="absolute inset-0 h-full w-full">
      <picture>
        <source srcset="/img/webp/cta-bg.webp" type="image/webp" />
        <source srcset="/img/cta-bg.jpg" type="image/jpeg" />

        <img alt="" src="" class="h-full w-full object-cover opacity-70" />
      </picture>
    </div>

    <UiContainer class="relative">
      <div class="mx-auto max-w-lg text-center">
        <h2 class="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Empieza hoy mismo</h2>
        <p class="mt-4 text-lg tracking-tight text-white">
          Es hora de simplificar la administración de tu sucursal. Comienza con {{ APP_NAME }} sin ningún
          comprimiso ni tarjetas para que descubras lo fácil que puede ser.
        </p>
        <a :href="APP_URL_SIGN_IN" class="btn btn-white mt-10">Prueba 30 días gratis</a>
      </div>
    </UiContainer>
  </section>
</template>
