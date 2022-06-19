<script setup lang="ts">
import { APP_NAME } from '~/env';

const isDark = useDark();
</script>

<template>
  <section aria-label="Portada" class="w-full overflow-hidden">
    <div class="site-container flex min-h-screen w-full flex-col">
      <header class="py-5">
        <div class="flex justify-between">
          <!-- Logo -->
          <RouterLink :to="{ name: 'home' }" class="flex items-center justify-center space-x-2">
            <img class="w-10" :src="`/miasistente-logo${isDark ? '-dark' : ''}.svg`" :alt="APP_NAME" />
            <span class="text-xl font-black text-gray-900 dark:text-white">{{ APP_NAME }}</span>
          </RouterLink>

          <BaseButton class="btn btn-primary">Acceder</BaseButton>
        </div>
      </header>

      <div class="flex min-h-[80vh] flex-1 items-center gap-8">
        <div class="flex-1">
          <div class="flex items-center space-x-6">
            <BaseBadge
              rounded
              class="bg-primary-100 text-xs uppercase text-primary-800 dark:bg-primary-800 dark:text-primary-100"
              >Novedades</BaseBadge
            >

            <a href="https://app.miasistente.mx" class="text-link flex items-center text-sm"
              >Mi Asistente lanza oficialmente <HeroiconsOutlineChevronRight class="ml-2 h-4 w-4"
            /></a>
          </div>

          <h1 class="mt-8 text-5xl font-extrabold text-gray-900 dark:text-white">
            Administra tu estética con facilidad
          </h1>

          <p class="mt-4 text-lg text-gray-500 dark:text-gray-200">
            Mi Asistente te ayudará a controlar todos los aspectos de tu estética en un solo lugar. Agenda,
            ventas, inventarios, reportes, clientes y más.
          </p>

          <div class="mt-14 flex gap-4">
            <BaseButton class="btn btn-primary">Comenzar ahora</BaseButton>

            <BaseButton class="btn btn-text-primary">Conoce más</BaseButton>
          </div>
        </div>

        <div class="relative w-1/2">
          <picture>
            <source srcset="/img/webp/miasistente-agenda-ss.webp" type="image/webp" />
            <source srcset="/img/miasistente-agenda-ss.jpg" type="image/jpeg" />
            <img
              src=""
              class="h-[60vh] max-h-full max-w-none rounded-xl border shadow-xl dark:border-gray-400 2xl:h-[80vh]"
            />
          </picture>

          <picture aria-hidden="true">
            <source srcset="/img/webp/dots.webp" type="image/webp" />
            <source srcset="/img/dots.jpg" type="image/jpeg" />
            <img
              src=""
              aria-hidden="true"
              class="absolute -top-10 -left-16 -z-10 w-[23rem] dark:opacity-50"
            />
          </picture>

          <div
            aria-hidden="true"
            class="absolute -top-10 left-1/2 -z-20 h-40 w-[200%] rounded-tl-3xl bg-gray-100 dark:bg-gray-600"
          ></div>
        </div>
      </div>
    </div>
  </section>
</template>
