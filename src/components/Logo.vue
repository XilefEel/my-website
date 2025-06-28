<script setup>
import vue_js_logo from '@/assets/images/logo/vue_js_logo.png'
import tailwind_css_logo from '@/assets/images/logo/tailwind_css_logo.png'
</script>

<template>
  <section class="py-12">
    <div class="container-xl lg:container m-auto text-gray-700">
      <h1 class="text-center text-2xl font-bold mb-4">Powered By</h1>
      <div class="flex justify-center">
        <div>
          <img :src="vue_js_logo" alt="Vue.js Logo" class="h-16 md:h-24 lg:h-32 px-28" />
          <h1 class="text-center text-xl mt-4">Vue Js</h1>
        </div>
        <h1 class="mt-auto mb-auto text-center text-3xl font-extrabold">+</h1>
        <div>
          <img :src="tailwind_css_logo" alt="Vue.js Logo" class="h-16 md:h-24 lg:h-32 px-20" />
          <h1 class="text-center text-xl mt-4">Tailwind CSS</h1>
        </div>
      </div>
    </div>
  </section>
</template>
