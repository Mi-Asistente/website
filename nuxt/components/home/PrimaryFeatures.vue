<script setup lang="ts">
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/vue';
import { breakpointsTailwind } from '@vueuse/core';

const bp = useBreakpoints(breakpointsTailwind);
const isMobile = bp.smaller('lg');

const features = [
  {
    title: 'Agenda de citas',
    description: 'Mantén a tu equipo organizado con su propia agenda de citas personalizada e intuitiva.',
    image: '/img/screenshots/agenda.webp',
    imageFallback: '/img/screenshots/agenda.jpg',
  },
  {
    title: 'Registro de ventas',
    description:
      'Lleva un registro detallado de todas las ventas realizadas en tu sucursal para tener un mejor control.',
    image: '/img/screenshots/ventas.webp',
    imageFallback: '/img/screenshots/ventas.jpg',
  },
  {
    title: 'Comisiones y reportes',
    description:
      'Te ayudamos a llevar las cuentas para el pago de comisiones de tus empleados y generar reportes de ventas.',
    image: '/img/screenshots/reportes.webp',
    imageFallback: '/img/screenshots/reportes.jpg',
  },
  {
    title: 'Control de inventario',
    description:
      'Administra el inventario y las existencias de tus productos diréctamente y sin complicaciones.',
    image: '/img/screenshots/inventario.webp',
    imageFallback: '/img/screenshots/inventario.jpg',
  },
];
</script>

<template>
  <section id="funciones" class="relative overflow-hidden bg-primary-600 pt-20 pb-28 sm:py-32">
    <div
      aria-hidden="true"
      class="absolute top-1/2 left-1/2 h-full w-full -translate-x-[50%] -translate-y-[50%]"
    >
      <picture>
        <source srcset="/img/webp/primary-features-bg.webp" type="image/webp" />
        <source srcset="/img/primary-features-bg.jpg" type="image/jpeg" />

        <img alt="" src="" class="h-[1636px] w-[2245px] object-cover opacity-70" />
      </picture>
    </div>

    <UiContainer class="relative">
      <div class="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
        <h1 class="text-3xl font-medium tracking-tight text-white sm:text-4xl md:text-5xl">
          Todo lo que necesitas para tu sucursal
        </h1>
        <p class="mt-6 text-lg tracking-tight text-primary-100">
          Te brindamos las herramientas que necesitas para llevar control del día a día.
        </p>
      </div>

      <TabGroup
        as="div"
        :vertical="!isMobile"
        v-slot="{ selectedIndex }"
        class="mt-16 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0"
      >
        <div class="-mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-5">
          <TabList
            class="relative z-10 flex space-x-4 whitespace-nowrap px-4 sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:space-y-1 lg:space-x-0 lg:whitespace-normal"
          >
            <div
              :key="feature.title"
              v-for="(feature, featureIndex) in features"
              :class="[
                'group relative rounded-full py-1 px-4 lg:rounded-r-none lg:rounded-l-xl lg:p-6',
                {
                  'bg-white lg:bg-white/10 lg:ring-1 lg:ring-inset lg:ring-white/10':
                    selectedIndex === featureIndex,
                  'hover:bg-white/10 lg:hover:bg-white/5': selectedIndex !== featureIndex,
                },
              ]"
            >
              <h3>
                <Tab
                  :class="[
                    'font-display text-lg outline-none',
                    {
                      'text-primary-600 lg:text-white': selectedIndex === featureIndex,
                      'text-primary-100 hover:text-white lg:text-white': selectedIndex !== featureIndex,
                    },
                  ]"
                >
                  <span class="absolute inset-0 rounded-full lg:rounded-r-none lg:rounded-l-xl" />
                  {{ feature.title }}
                </Tab>
              </h3>

              <p
                :class="[
                  'mt-2 hidden text-sm lg:block',
                  {
                    'text-white': selectedIndex === featureIndex,
                    'text-primary-100 group-hover:text-white': selectedIndex !== featureIndex,
                  },
                ]"
              >
                {{ feature.description }}
              </p>
            </div>
          </TabList>
        </div>

        <TabPanels class="lg:col-span-7">
          <TabPanel v-for="feature in features" :key="feature.title" :unmount="false">
            <div class="relative sm:px-6 lg:hidden">
              <div
                class="absolute -inset-x-4 -top-[6.5rem] -bottom-[4.25rem] bg-white/10 ring-1 ring-inset ring-white/10 sm:inset-x-0 sm:rounded-t-xl"
              />
              <p class="relative mx-auto max-w-2xl text-base text-white sm:text-center">
                {{ feature.description }}
              </p>
            </div>

            <div
              class="relative mt-10 w-[45rem] overflow-hidden rounded-xl bg-gray-50 shadow-xl shadow-primary-900/20 sm:w-auto lg:mt-0 lg:w-[67.8125rem]"
            >
              <picture>
                <source :srcset="feature.image" type="image/webp" />
                <source :srcset="feature.imageFallback" type="image/jpeg" />
                <img src="" alt="" class="h-full sm:w-[100vw] lg:w-full" />
              </picture>
            </div>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </UiContainer>
  </section>
</template>
