<script setup lang="ts">
import { APP_NAME } from '~/env';
</script>

<template>
  <section id="precios" aria-label="Precios" class="bg-gray-800 py-20 sm:py-32">
    <Container>
      <div class="md:text-center">
        <h2 class="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Precios simples y accesibles.
        </h2>
        <p class="mt-4 text-lg text-gray-400">
          Para negocios de cualquier tamaño, {{ APP_NAME }} se adapta a tus necesidades.
        </p>
      </div>

      <div
        class="-mx-4 mt-16 grid max-w-2xl grid-cols-1 gap-y-10 sm:mx-auto lg:-mx-8 lg:max-w-none lg:grid-cols-3 xl:mx-0 xl:gap-x-8"
      >
        <HomePricingPlan
          price="$350"
          name="Empresa pequeña"
          pay-period="/mes por sucursal"
          description="Excelente para pequeñas estéticas y barberías con pocos empleados."
          :features="[
            'Hasta 3 empleados',
            'Ventas ilimitadas',
            'Productos ilimitados',
            'Citas ilimitados',
            'Clientes ilimitados',
            'Reportes ilimitados',
          ]"
        />

        <HomePricingPlan
          featured
          price="$550"
          name="Empresa mediana"
          pay-period="/mes por sucursal"
          description="Excelente para pequeñas estéticas y barberías con pocos empleados."
          :features="[
            'Todo en el paquete Empresa pequeña',
            'Hasta 5 empleados',
            'Recordatorios de citas a clientes',
          ]"
        />

        <HomePricingPlan
          pay-period=""
          price="Contáctanos"
          name="Personalizado"
          description="Diseña un paquete que se adapte a la medida de tu negocio."
          :features="['Descuentos por volúmen', 'Soporte personalizado']"
        />
      </div>
    </Container>
  </section>
</template>
