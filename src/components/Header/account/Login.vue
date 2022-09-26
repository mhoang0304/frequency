<script lang="ts" setup>
import { ref } from "vue";

const isOpen = ref(false);

const handleShowLogin = () => {
  isOpen.value = true;
};

const close = () => {
  isOpen.value = false;
};
</script>

<template>
  <g-button class="mr-2" @click="handleShowLogin">Login</g-button>

  <g-modal :is-open="isOpen" :click-overlay="true" @close="close">
    <template #header>Đăng nhập</template>
    <template #default>asdasd</template>
  </g-modal>
</template>
