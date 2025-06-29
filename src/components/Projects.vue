<script setup>
import ActivityCard from '@/components/ActivityCard.vue'
import projects from '@/projects_list'
</script>

<template>
  <section class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-10 py-8">
    <div class="flex flex-col items-center justify-evenly gap-10">
      <div class="text-center text-white">
        <h1 class="text-2xl md:text-4xl font-extrabold">Projects</h1>
        <h1 class="text-lg md:text-xl font-extrabold mt-3">Check out my awesome projects!</h1>
      </div>
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center text-xl font-bold md:w-3/4"
      >
        <ActivityCard
          v-for="project in projects.slice(0, 3)"
          :key="project.id"
          :activity="project"
        />
      </div>
      <div class="w-full max-w-lg">
        <RouterLink
          to="/projects"
          class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-800"
          >View All Projects
        </RouterLink>
      </div>
    </div>
  </section>
</template>
