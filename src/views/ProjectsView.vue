<script setup>
import Hero from '@/components/Hero.vue'
import ActivityCard from '@/components/ActivityCard.vue'
import projects from '@/projects_list'
</script>
<template>
  <Hero title="Projects" subtitle="Awesome Projects" />
  <section class="py-6 mx-20">
    <div class="text-center text-xl my-10 font-bold">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
        <ActivityCard v-for="project in projects" :key="project.id" :activity="project" />
      </div>
    </div>
  </section>
</template>
