<script setup lang="ts">
import { APP_NAME, APP_URL_SIGN_IN } from '~/env';
</script>

<template>
  <section class="relative overflow-hidden bg-primary-600 py-32">
    <!-- TODO: Add bg image -->

    <Container class="relative">
      <div class="mx-auto max-w-lg text-center">
        <h2 class="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Empieza hoy mismo</h2>
        <p class="mt-4 text-lg tracking-tight text-white">
          Es hora de simplificar la administración de tu sucursal. Comienza con {{ APP_NAME }} sin ningún
          comprimiso ni tarjetas para que descubras lo fácil que puede ser.
        </p>
        <a :href="APP_URL_SIGN_IN" class="btn btn-white mt-10">Prueba 30 días gratis</a>
      </div>
    </Container>
  </section>
</template>
