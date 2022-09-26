<script lang="ts" setup>
import { computed, defineAsyncComponent } from "vue";
import type { Icons } from "../types/icon";

const props = withDefaults(
  defineProps<{
    name: Icons;
    width?: string;
    height?: string;
    fill?: string;
    viewBox?: string;
  }>(),
  {
    width: "100%",
    height: "100%",
    fill: "currentColor",
    viewBox: "http://www.w3.org/2000/svg",
  }
);

const dynamicIcon = computed(() =>
  defineAsyncComponent(() => {
    return new Promise<any>((resolve) => {
      const component = import(`../assets/icons/${props.name}.vue`);

      component
        .then(() => {
          resolve(component);
        })
        .catch(() => {
          resolve(import("../assets/icons/icon-does-not-exist.vue"));
        });
    });
  })
);
</script>

<template>
  <svg :width="width" :height="height" :fill="fill" :viewBox="viewBox">
    <component :is="dynamicIcon" />
  </svg>
</template>
