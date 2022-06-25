<script setup lang="ts">
import { APP_URL } from '~/env';
</script>

<template>
  <HuiPopover v-slot="{ close }">
    <HuiPopoverButton
      class="relative z-10 flex h-8 w-8 items-center justify-center [&:not(:focus-visible)]:focus:outline-none"
    >
      <span class="sr-only">Abrir navegación</span>

      <PhListBold class="h-3.5 w-3.5 overflow-visible text-gray-700" />
    </HuiPopoverButton>

    <HuiTransitionRoot>
      <HuiTransitionChild
        as="template"
        enter="duration-150 ease-out"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="duration-150 ease-in"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <HuiPopoverOverlay class="fixed inset-0 bg-gray-300/50" />
      </HuiTransitionChild>

      <HuiTransitionChild
        as="template"
        enter="duration-150 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <HuiPopoverPanel
          as="ul"
          class="absolute inset-x-0 top-full mt-4 origin-top space-y-4 rounded-2xl bg-white p-6 text-lg tracking-tight text-gray-900 shadow-xl ring-1 ring-gray-900/5"
        >
          <li>
            <RouterLink to="#funciones" class="block w-full" @click="close">Funciones</RouterLink>
          </li>
          <li>
            <RouterLink to="#videos" class="block w-full" @click="close">Videos</RouterLink>
          </li>
          <li>
            <RouterLink to="#precios" class="block w-full" @click="close">Precios</RouterLink>
          </li>
          <li class="border-t border-gray-300/40 pt-4">
            <a :href="APP_URL" class="block w-full">Iniciar sesión</a>
          </li>
        </HuiPopoverPanel>
      </HuiTransitionChild>
    </HuiTransitionRoot>
  </HuiPopover>
</template>
