<script lang="ts" setup>
const emit = defineEmits<{
  (e: "click"): void;
}>();

const props = withDefaults(
  defineProps<{
    type?: "button" | "submit" | "reset";
    classes?: string;
  }>(),
  {
    type: "button",
  }
);

const handleClick = () => {
  emit("click");
};
</script>

<template>
  <button
    :type="type"
    class="outline-none rounded"
    :class="classes"
    @click="handleClick"
  >
    <slot></slot>
  </button>
</template>
