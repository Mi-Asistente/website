<script setup lang="ts">
import { HTMLAttributes, PropType } from 'vue';

const props = defineProps({
  separation: { type: Number, default: 12 },
  position: { type: String as PropType<'top' | 'bottom' | 'left' | 'right'>, default: 'top' },
});

const tooltip = ref<HTMLElement>();
const wrapper = ref<HTMLElement>();

const showTip = ref(false);

const tooltipPosition = computed<HTMLAttributes['style']>(() => {
  if (!wrapper.value || !tooltip.value) return { top: '0', left: '0' };

  const { x: wX, y: wY, width: wW, height: wH } = wrapper.value!.getBoundingClientRect();
  const { height: tH, width: tW } = tooltip.value!.getBoundingClientRect();

  const commonY = { left: `${wX - tW / 2}px`, transform: `translateX(${wW / 2}px)` };
  const commonX = { top: `${wY - tH / 2}px`, transform: `translateY(${wH / 2}px)` };

  if (props.position === 'bottom') return { ...commonY, top: `${wY + wH + props.separation}px` };
  if (props.position === 'left') return { ...commonX, left: `${wX - tW - props.separation}px` };
  if (props.position === 'right') return { ...commonX, left: `${wX + wW + props.separation}px` };
  return { ...commonY, top: `${wY - tH - props.separation}px` };
});
</script>

<template>
  <div @mouseover="showTip = true" @mouseleave="showTip = false" ref="wrapper">
    <slot />

    <Teleport v-if="showTip" class="hey" to="body">
      <div
        ref="tooltip"
        :style="tooltipPosition"
        class="absolute z-50 w-max max-w-[10rem] rounded-md bg-sky-800 px-2 py-1"
      >
        <span class="block text-center text-xs text-white"><slot name="tooltip" /></span>
      </div>
    </Teleport>
  </div>
</template>
