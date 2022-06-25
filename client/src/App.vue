<script setup lang="ts">
import { APP_NAME } from '~/env';

useHead({
  title: `${APP_NAME} - Administrador de estéticas`,
  meta: [{ name: 'description', content: 'Plataforma administrativa para estéticas' }],
});
</script>

<template>
  <RouterView />
</template>

<style>
#nprogress {
  pointer-events: none;
}

#nprogress .bar {
  @apply fixed top-0 left-0 z-50 h-0.5 w-full bg-sky-600 opacity-75 dark:bg-sky-500;
}

html {
  font-feature-settings: 'cv02' on, 'cv03' on, 'cv04' on, 'cv11' on;
}
</style>
