<script setup>
import nilou_1 from '@/assets/images/genshin stickers/nilou_1.png'
import ProfileCard from './ProfileCard.vue'
</script>

<template>
  <section class="py-12 md:px-16">
    <div class="flex flex-col items-center justify-center md:flex-row">
      <div>
        <img
          :src="nilou_1"
          alt="Nilou"
          class="w-40 rounded-full object-cover shadow-2xl md:w-60 lg:w-80"
        />
      </div>
      <div class="mt-4 px-10 md:mt-0 md:w-1/2">
        <div class="flex flex-col gap-6">
          <h2 class="text-xl font-bold text-blue-500 sm:text-2xl">About Me</h2>
          <p class="text-justify text-sm sm:text-base">
            Hello! I'm Felix Lee, a passionate programmer with a love for coding and technology. I
            enjoy creating innovative solutions and exploring new programming languages and
            frameworks. In my free time, I like to contribute to open-source projects and learn
            about the latest trends in software development.
          </p>
          <div class="flex flex-row items-center justify-evenly gap-4 text-2xl lg:text-4xl">
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
