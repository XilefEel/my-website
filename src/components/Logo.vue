<script setup>
import vue_js_logo from '@/assets/images/logo/vue_js_logo.png'
import tailwind_css_logo from '@/assets/images/logo/tailwind_css_logo.png'
</script>

<template>
  <section class="py-12">
    <div class="container-xl m-auto text-gray-700 lg:container">
      <h1 class="mb-4 text-center text-2xl font-bold">Powered By</h1>
      <div class="flex justify-center">
        <div>
          <img :src="vue_js_logo" alt="Vue.js Logo" class="h-16 px-28 md:h-24 lg:h-32" />
          <h1 class="mt-4 text-center text-xl">Vue Js</h1>
        </div>
        <h1 class="mb-auto mt-auto text-center text-3xl font-extrabold">+</h1>
        <div>
          <img :src="tailwind_css_logo" alt="Vue.js Logo" class="h-16 px-20 md:h-24 lg:h-32" />
          <h1 class="mt-4 text-center text-xl">Tailwind CSS</h1>
        </div>
      </div>
    </div>
  </section>
</template>
