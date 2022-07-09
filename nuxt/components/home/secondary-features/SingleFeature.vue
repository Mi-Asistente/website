<script setup lang="ts">
import type { PropType } from 'vue';
import type { SecondaryFeature } from '~/types';

defineProps({
  isActive: Boolean,
  feature: { type: Object as PropType<SecondaryFeature>, required: true },
});
</script>

<template>
  <div :class="{ 'opacity-75 hover:opacity-100': !isActive }">
    <div
      :class="[
        'flex h-9 w-9 items-center justify-center rounded-lg',
        isActive ? 'bg-primary-600 text-white' : 'bg-gray-500 text-gray-200',
      ]"
    >
      <component :is="feature.icon" class="h-5 w-5" />
    </div>

    <h3 :class="['mt-6 text-sm font-medium', isActive ? 'text-primary-600' : 'text-gray-500']">
      <template v-if="!$slots['name']">
        {{ feature.name }}
      </template>
      <slot name="name" v-else />
    </h3>

    <p class="mt-2 text-xl text-gray-900">{{ feature.summary }}</p>
    <p class="mt-4 text-sm text-gray-600">{{ feature.description }}</p>
  </div>
</template>
