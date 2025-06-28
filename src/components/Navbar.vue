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
  <nav class="bg-blue-500 text-white px-10">
    <div class="mx-auto py-4 flex items-center justify-between gap-x-10">
      <div class="font-bold text-lg md:text-xl lg:text-2xl">
        <RouterLink to="/" class="hover:text-gray-400">XilefEel</RouterLink>
      </div>
      <div
        class="bg-blue-500 md:static absolute flex md:min-h-fit min-h-[60vh] left-0 z-[1] md:w-auto w-full items-center"
        :class="{ 'top-[-100%]': !isMenuOpen, 'top-[9%]': isMenuOpen }"
      >
        <ul class="flex flex-col md:flex-row md:items-center md:gap-10 gap-8 pl-10">
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
        <i class="pi pi-bars text-white text-2xl cursor-pointer" @click="toggleMenu"></i>
      </div>
    </div>
  </nav>
</template>
