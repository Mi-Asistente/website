<script setup lang="ts">
defineProps({
  isOpen: { type: Boolean, default: false },
  hideOverlay: { type: Boolean, default: false },
  closeSrLabel: { type: String, default: 'Cerrar navegación' },
});
defineEmits(['close']);
</script>

<template>
  <TransitionRoot as="template" :show="isOpen">
    <Dialog as="aside" class="fixed inset-0 z-40 flex" @close="$emit('close')">
      <TransitionChild
        as="template"
        v-if="!hideOverlay"
        enter="transition-opacity ease-linear duration-300"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="transition-opacity ease-linear duration-300"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <DialogOverlay class="fixed inset-0 bg-gray-500/75 dark:bg-gray-800/75" />
      </TransitionChild>
      <TransitionChild
        as="template"
        enter="transition ease-in-out duration-300 transform"
        enter-from="-translate-x-full"
        enter-to="translate-x-0"
        leave="transition ease-in-out duration-300 transform"
        leave-from="translate-x-0"
        leave-to="-translate-x-full"
      >
        <div
          class="relative flex w-full max-w-xs flex-1 flex-col focus:outline-none dark:border-r dark:border-gray-500"
        >
          <TransitionChild
            as="template"
            enter="ease-in-out duration-300"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="ease-in-out duration-300"
            leave-from="opacity-100"
            leave-to="opacity-0"
          >
            <div class="absolute top-0 right-0 -mr-12 pt-4">
              <button
                type="button"
                class="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                @click="$emit('close')"
              >
                <span class="sr-only">{{ closeSrLabel }}</span>
                <MdiClose class="h-6 w-6 text-white" aria-hidden="true" />
              </button>
            </div>
          </TransitionChild>

          <!-- The main content -->
          <slot />
        </div>
      </TransitionChild>
      <div class="w-14 flex-shrink-0" aria-hidden="true">
        <!-- Force sidebar to shrink to fit close icon -->
      </div>
    </Dialog>
  </TransitionRoot>
</template>
