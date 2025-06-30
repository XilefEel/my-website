<script setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue'

const isMenuOpen = ref(false)
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<template>
  <nav class="bg-blue-500 px-10 text-white">
    <div class="mx-auto flex items-center justify-between gap-x-10 py-4">
      <div class="text-lg font-bold md:text-xl lg:text-2xl">
        <RouterLink to="/" class="hover:text-gray-400">XilefEel</RouterLink>
      </div>
      <div
        class="absolute left-0 z-[1] flex min-h-[60vh] w-full items-center bg-blue-500 md:static md:min-h-fit md:w-auto"
        :class="{ 'top-[-100%]': !isMenuOpen, 'top-[9%]': isMenuOpen }"
      >
        <ul class="flex flex-col gap-8 pl-10 md:flex-row md:items-center md:gap-10">
          <li>
            <RouterLink class="hover:text-gray-400" to="/" @click="closeMenu"> Home</RouterLink>
          </li>
          <li>
            <RouterLink class="hover:text-gray-400" to="/projects" @click="closeMenu">
              Projects</RouterLink
            >
          </li>
          <li>
            <RouterLink class="hover:text-gray-400" to="/activities" @click="closeMenu"
              >Activities</RouterLink
            >
          </li>
          <li>
            <RouterLink class="hover:text-gray-400" to="/learning" @click="closeMenu"
              >Learning</RouterLink
            >
          </li>
          <li>
            <RouterLink class="hover:text-gray-400" to="/gallery" @click="closeMenu"
              >Gallery</RouterLink
            >
          </li>
        </ul>
      </div>
      <div class="block md:hidden">
        <i class="pi pi-bars cursor-pointer text-2xl text-white" @click="toggleMenu"></i>
      </div>
    </div>
  </nav>
</template>
