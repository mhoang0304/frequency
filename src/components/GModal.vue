<script lang="ts" setup>
const emit = defineEmits<{
  (e: "close"): void;
}>();

const props = withDefaults(
  defineProps<{
    isOpen?: boolean;
    clickOverlay?: boolean;
  }>(),
  {
    isOpen: true,
    clickOverlay: false,
  }
);

const handleClickOverlay = () => {
  if (props.clickOverlay) emit("close");
};
</script>

<template>
  <Teleport to="body" v-if="isOpen">
    <div class="fixed inset-0 flex justify-center items-center">
      <div
        class="absolute inset-0 bg-black/60"
        @click="handleClickOverlay"
      ></div>
      <div class="absolute bg-white">
        <div class="">
          <slot name="header"></slot>
        </div>
        <div>
          <slot></slot>
        </div>
      </div>
    </div>
  </Teleport>
</template>
