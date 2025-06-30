<script setup>
import Hero from '@/components/Hero.vue'
import ActivityCard from '@/components/ActivityCard.vue'
import projects from '@/projects_list'
</script>
<template>
  <Hero title="Projects" subtitle="Awesome Projects" />
  <section class="mx-10 my-5 md:mx-20">
    <div class="my-10 text-center text-xl font-bold">
      <div class="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-10 lg:grid-cols-3">
        <ActivityCard v-for="project in projects" :key="project.id" :activity="project" />
      </div>
    </div>
  </section>
</template>
