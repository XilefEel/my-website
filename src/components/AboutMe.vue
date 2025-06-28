<script setup>
import nilou_1 from '@/assets/images/genshin stickers/nilou_1.png'
import ProfileCard from './ProfileCard.vue'
</script>

<template>
  <section class="py-12 px-16">
    <div class="flex flex-col md:flex-row items-center justify-center">
      <div>
        <img
          :src="nilou_1"
          alt="Nilou"
          class="w-40 md:w-60 lg:w-80 object-cover rounded-full shadow-2xl"
        />
      </div>
      <div class="px-10 md:w-1/2 mt-4 md:mt-0">
        <div class="flex flex-col gap-6">
          <h2 class="text-2xl font-bold text-blue-500">About Me</h2>
          <p class="text-justify">
            Hello! I'm Felix Lee, a passionate programmer with a love for coding and technology. I
            enjoy creating innovative solutions and exploring new programming languages and
            frameworks. In my free time, I like to contribute to open-source projects and learn
            about the latest trends in software development.
          </p>
          <div class="flex flex-row gap-4 text-2xl lg:text-4xl items-center justify-evenly">
            <i class="bi bi-github cursor-pointer"></i>
            <i class="bi bi-linkedin cursor-pointer"></i>
            <i class="bi bi-discord cursor-pointer"></i>
            <i class="bi bi-instagram cursor-pointer"></i>
          </div>
        </div>
      </div>
    </div>
    <ProfileCard />
  </section>
</template>
