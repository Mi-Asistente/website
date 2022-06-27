<script setup lang="ts">
import type { PropType } from 'vue';

defineProps({
  featured: Boolean,
  name: { type: String, required: true },
  price: { type: String, required: true },
  description: { type: String, required: true },
  payPeriod: { type: String, required: true },
  features: { type: Array as PropType<String[]>, required: true },
});
</script>

<template>
  <section
    :class="[
      'flex flex-col rounded-3xl px-6 sm:px-8',
      featured ? 'order-first bg-primary-600 py-8 lg:order-none' : 'lg:py-8',
    ]"
  >
    <h3 class="mt-5 text-lg font-medium text-white">{{ name }}</h3>
    <p :class="['mt-2 text-base', featured ? 'text-white' : 'text-gray-400']">{{ description }}</p>
    <p class="order-first text-5xl font-semibold tracking-tight text-white">
      {{ price }} <span class="text-base font-normal opacity-80">{{ payPeriod }}</span>
    </p>

    <ul :class="['order-last mt-10 space-y-3 text-sm', featured ? 'text-white' : 'text-gray-200']">
      <li v-for="(feature, featureIdx) in features" :key="featureIdx" class="flex items-center">
        <PhCheckCircle
          aria-hidden="true"
          :class="[
            'h-6 w-6 flex-none',
            featured ? 'stroke-white text-white' : 'stroke-gray-400 text-gray-400',
          ]"
        />

        <span class="ml-4">{{ feature }}</span>
      </li>
    </ul>

    <RouterLink
      to="/"
      :class="['btn mt-8', featured ? 'btn-white' : 'btn-primary-outlined-white']"
      :aria-label="`Contacta a ventas para comenzar con el plan ${name} por ${price}${payPeriod}`"
      >Contáctanos</RouterLink
    >
  </section>
</template>
