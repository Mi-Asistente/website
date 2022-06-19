<script setup lang="ts">
defineProps({
  disabled: { type: Boolean, default: false },
  loading: { type: Boolean, default: false },
  flat: { type: Boolean, default: false },
});
</script>

<template>
  <button
    :disabled="disabled || loading"
    :class="{ 'animate-pulse': loading, 'rounded-md': !flat }"
    class="relative inline-flex items-center justify-center text-sm font-medium transition-colors duration-100 focus:outline-none focus:ring-2 disabled:cursor-not-allowed disabled:select-none disabled:bg-gray-300 disabled:text-gray-500"
  >
    <div class="flex flex-grow items-center justify-center gap-2">
      <div v-if="$slots['left-icon'] && !loading">
        <slot name="left-icon" />
      </div>

      <span v-show="!loading">
        <slot />
      </span>

      <div v-if="loading" class="pointer-events-none">
        <MdiLoading class="animate-spin" />
      </div>
      <div v-else-if="$slots['right-icon']">
        <slot name="right-icon" />
      </div>
    </div>
  </button>
</template>
