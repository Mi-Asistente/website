<script setup lang="ts">
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/vue';
import type { PropType } from 'vue';
import type { SecondaryFeature } from '~/types';

defineProps({
  features: { type: Array as PropType<SecondaryFeature[]>, required: true },
});
</script>

<template>
  <TabGroup as="div" v-slot="{ selectedIndex }" class="mt-20">
    <TabList class="grid grid-cols-3 gap-x-8">
      <HomeSecondaryFeaturesSingleFeature
        class="relative"
        :feature="feature"
        :key="feature.name"
        v-for="(feature, featureIndex) in features"
        :is-active="featureIndex === selectedIndex"
      >
        <template #name>
          <Tab class="outline-none">
            <span class="absolute inset-0" />
            {{ feature.name }}
          </Tab>
        </template>
      </HomeSecondaryFeaturesSingleFeature>
    </TabList>

    <TabPanels
      class="mt-20 overflow-hidden rounded-3xl border border-gray-300 bg-gray-200 px-14 py-16 xl:px-16"
    >
      <div class="-mx-5 flex">
        <TabPanel
          static
          :key="feature.name"
          v-for="(feature, featureIndex) in features"
          :class="[
            'px-5 transition duration-500 ease-in-out [&:not(:focus-visible)]:focus:outline-none',
            { 'opacity-60': featureIndex !== selectedIndex },
          ]"
          :style="{ transform: `translateX(-${selectedIndex * 100}%)` }"
          :aria-hidden="featureIndex !== selectedIndex"
        >
          <div
            className="relative aspect-[844/428] w-[52.75rem] overflow-hidden rounded-xl bg-white shadow-lg shadow-gray-900/5 ring-1 ring-gray-500/10"
          >
            <img :src="feature.image" class="h-full w-[52.75rem]" alt="" />
          </div>
        </TabPanel>
      </div>
    </TabPanels>
  </TabGroup>
</template>
