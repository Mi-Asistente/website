<script setup lang="ts">
import { breakpointsTailwind } from '@vueuse/core';
import { SecondaryFeature } from '~/types';
import ReportsIcon from '~/components/icons/MdiChartAreaspline.vue';
import ClientIcon from '~/components/icons/MdiAccountHeart.vue';
import StoreIcon from '~/components/icons/MdiStore.vue';

const features: SecondaryFeature[] = [
  {
    name: 'Reportes',
    icon: ReportsIcon,
    summary: 'Mantente al día de tu sucursal con reportes actualizados.',
    description:
      'Podrás generar reportes completos con el rendimiento de tu sucursal para cualquier periodo de tiempo que necesites consultar.',
    image: '/img/screenshots/summary-cards.webp',
    imageFallback: '/img/screenshots/summary-cards.jpg',
  },
  {
    name: 'Clientes',
    icon: ClientIcon,
    summary: 'Ofrece la mejor atención a tus clientes más frecuentes.',
    description:
      'Lleva un historial personalizado para cada uno de tus clientes para poderles dar seguimiento y darles el servicio personalizado que merecen.',
    image: '/img/screenshots/customer-info.webp',
    imageFallback: '/img/screenshots/customer-info.jpg',
  },
  {
    name: 'Multi-sucursal',
    icon: StoreIcon,
    summary: 'Maneja varias sucursales desde una sola cuenta.',
    description:
      'Al ser un servicio en línea, si lo requires podrás manejar varias sucursales con tu misma cuenta, cada una con su propio panel personalizado.',
    image: '/img/screenshots/shop-select.webp',
    imageFallback: '/img/screenshots/shop-select.jpg',
  },
];

const bp = useBreakpoints(breakpointsTailwind);
const isMobile = bp.smaller('lg');
</script>

<template>
  <section id="funciones-secundarias" class="pt-20 pb-14 sm:pb-20 sm:pt-32 lg:pb-32">
    <UiContainer>
      <div class="mx-auto max-w-2xl md:text-center">
        <h2 class="text-3xl font-medium tracking-tight text-gray-900 sm:text-4xl">
          Simplifica las actividades de tu negocio.
        </h2>
        <p class="mt-4 text-lg tracking-tight text-gray-700">
          Queremos ayudarte a que puedas aprovechar tu tiempo y reducir la fricción de las actividades
          administrativas.
        </p>
      </div>

      <HomeSecondaryFeaturesMobile v-if="isMobile" :features="features" />
      <HomeSecondaryFeaturesDesktop v-else :features="features" />
    </UiContainer>
  </section>
</template>
