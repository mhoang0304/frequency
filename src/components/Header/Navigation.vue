<script lang="ts" setup>
const data = [
  {
    title: "Trang chủ",
    to: "/",
  },
  {
    title: "Đồng hồ",
    to: "/product-list",
  },
  {
    title: "About us",
    to: "/about",
  },
  {
    title: "Blog",
    to: "/blog",
  },
  {
    title: "Liên Hệ",
    to: "/contact",
  },
];
</script>

<template>
  <div
    class="flex fixed top-0 w-full justify-between items-center px-[60px] max-w-[1440px] bg-black/30 text-white h-20"
  >
    <div class="text-[26px]">FREQUENCY</div>
    <div class="flex gap-9">
      <div v-for="(nav, index) in data" :key="index">
        <RouterLink :to="nav.to">{{ nav.title }}</RouterLink>
      </div>
    </div>
    <div></div>
  </div>
</template>
