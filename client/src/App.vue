<script setup lang="ts">
import { APP_NAME } from '~/env';

useHead({
  title: APP_NAME,
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
</style>
