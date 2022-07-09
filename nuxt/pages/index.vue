<script setup lang="ts">
useHead({
  title: 'Administrador de Estéticas',
  meta: [
    { property: 'og:title', content: 'Administrador de Estéticas | Mi Asistente' },
    {
      property: 'og:description',
      content:
        'Mi Asistente te ayudará a controlar todos los aspectos de tu estética en un solo lugar. Agenda, ventas, inventarios, reportes, clientes y más.',
    },
  ],
});
</script>

<template>
  <main>
    <HomeHeroSection />
    <HomePrimaryFeatures />
    <HomeSecondaryFeatures />
    <BaseCallToAction />
    <HomePricing />
  </main>
</template>
