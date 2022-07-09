<script setup lang="ts">
import {
  Popover,
  PopoverButton,
  PopoverOverlay,
  PopoverPanel,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue';
import { APP_URL } from '~/env';
</script>

<template>
  <Popover v-slot="{ close }">
    <PopoverButton
      class="relative z-10 flex h-8 w-8 items-center justify-center [&:not(:focus-visible)]:focus:outline-none"
    >
      <span class="sr-only">Abrir navegación</span>

      <IconsPhListFill class="h-3.5 w-3.5 overflow-visible text-gray-700" />
    </PopoverButton>

    <TransitionRoot>
      <TransitionChild
        as="template"
        enter="duration-150 ease-out"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="duration-150 ease-in"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <PopoverOverlay class="fixed inset-0 bg-gray-300/50" />
      </TransitionChild>

      <TransitionChild
        as="template"
        enter="duration-150 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <PopoverPanel
          as="ul"
          class="absolute inset-x-0 top-full mt-4 origin-top space-y-4 rounded-2xl bg-white p-6 text-lg tracking-tight text-gray-900 shadow-xl ring-1 ring-gray-900/5"
        >
          <li>
            <NuxtLink to="#funciones" class="block w-full" @click="close">Funciones</NuxtLink>
          </li>
          <!-- <li>
            <NuxtLink to="#videos" class="block w-full" @click="close">Videos</NuxtLink>
          </li> -->
          <li>
            <NuxtLink to="#precios" class="block w-full" @click="close">Precios</NuxtLink>
          </li>
          <li class="border-t border-gray-300/40 pt-4">
            <a :href="APP_URL" class="block w-full">Iniciar sesión</a>
          </li>
        </PopoverPanel>
      </TransitionChild>
    </TransitionRoot>
  </Popover>
</template>
