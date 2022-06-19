<script setup lang="ts">
const emit = defineEmits(['dismiss']);
const props = defineProps({
  rounded: { type: Boolean, default: false },
  addonsColor: String,
  dot: { type: Boolean, default: false },
  dismissable: { type: Boolean, default: false },
});
</script>

<template>
  <span
    :class="[
      'inline-flex items-center px-2.5 py-0.5 font-medium',
      props.rounded ? 'rounded' : 'rounded-full',
    ]"
  >
    <svg
      v-if="props.dot"
      :class="['mr-1.5 h-2 w-2 ', props.addonsColor || 'text-current']"
      fill="currentColor"
      viewBox="0 0 8 8"
    >
      <circle cx="4" cy="4" r="3" />
    </svg>

    <slot />

    <button
      type="button"
      v-if="props.dismissable"
      @click="emit('dismiss')"
      :class="[
        'ml-0.5 inline-flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full hover:text-current',
        props.addonsColor || 'text-current',
      ]"
    >
      <MdiClose />
    </button>
  </span>
</template>
