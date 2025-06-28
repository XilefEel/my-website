<script setup>
import { defineProps } from 'vue'
import nilou_1 from '@/assets/images/genshin stickers/nilou_1.png'

defineProps({
  title: {
    type: String,
    default: 'title',
  },
  subtitle: {
    type: String,
    default: 'subtitle',
  },
})
</script>

<template>
  <section class="bg-gradient-to-t from-blue-400 to-blue-600 p-10 py-16">
    <div class="flex flex-row items-center justify-evenly">
      <div class="text-left text-white">
        <h1 class="flex flex-wrap text-3xl md:text-6xl font-extrabold">{{ title }}</h1>
        <p class="text-sm md:text-xl">{{ subtitle }}</p>
      </div>
      <div>
        <img :src="nilou_1" alt="Nilou" class="w-40 md:w-60 lg:w-80" />
      </div>
    </div>
  </section>
</template>
