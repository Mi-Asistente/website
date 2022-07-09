<script setup lang="ts">
import type { PropType } from 'vue';
import type { SecondaryFeature } from '~/types';

defineProps({
  features: { type: Array as PropType<SecondaryFeature[]>, required: true },
});
</script>

<template>
  <div class="-mx-4 mt-20 space-y-10 overflow-hidden px-4 sm:-mx-6 sm:px-6">
    <div v-for="feature in features" :key="feature.name">
      <HomeSecondaryFeaturesSingleFeature :feature="feature" class="mx-auto max-w-2xl" is-active />

      <div class="relative mt-10 pb-10">
        <div class="absolute -inset-x-4 bottom-0 top-8 bg-gray-200 sm:-inset-x-6" />
        <div
          class="relative mx-auto aspect-[844/428] w-[52.75rem] overflow-hidden rounded-xl bg-white shadow-lg shadow-gray-900/5 ring-1 ring-gray-500/10"
        >
          <img :src="feature.image" alt="" class="h-full w-[52.75rem]" />
        </div>
      </div>
    </div>
  </div>
</template>
