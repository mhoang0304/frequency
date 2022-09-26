<script lang="ts" setup>
import { useRouter } from "vue-router";
import Login from "./account/Login.vue";

const data = [
  {
    title: "Trang chủ",
    to: "/",
  },
  {
    title: "Đồng hồ",
    to: "/product",
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
const router = useRouter();

const redirectHomePage = () => {
  router.push("/");
};
</script>

<template>
  <div
    class="flex fixed top-0 w-full justify-between items-center px-[60px] max-w-[1440px] bg-black/30 text-white h-20"
  >
    <div class="text-[26px] cursor-pointer" @click="redirectHomePage">
      FREQUENCY
    </div>
    <div class="flex gap-9 uppercase text-[18px]">
      <div v-for="(nav, index) in data" :key="index">
        <RouterLink
          :to="nav.to"
          class="hover:text-[#37a866] transition-colors duration-200"
        >
          {{ nav.title }}
        </RouterLink>
      </div>
    </div>

    <div class="flex items-center">
      <div class="flex mr-6">
        <span class="inline-flex cursor-pointer mr-4">
          <g-icon
            name="search"
            width="18"
            height="18"
            fill="none"
            viewBox="0 0 18 18"
          />
        </span>
        <span class="inline-flex cursor-pointer">
          <g-icon
            name="shopping-bag"
            width="17"
            height="19"
            viewBox="0 0 17 19"
            fill="none"
          />
        </span>
      </div>
      <div>
        <Login />
        <g-button class="bg-[#3CB46E] px-2 py-1">Register</g-button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.router-link-exact-active {
  color: #37a866;
}
</style>
