<script setup>
import ActivityCard from '@/components/ActivityCard.vue'
import projects from '@/projects_list'
</script>

<template>
  <section class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-10 py-8">
    <div class="flex flex-col items-center justify-evenly gap-10">
      <div class="text-center text-white">
        <h1 class="text-2xl font-extrabold md:text-4xl">Projects</h1>
        <h1 class="mt-3 text-lg font-extrabold md:text-xl">Check out my awesome projects!</h1>
      </div>
      <div
        class="grid grid-cols-1 gap-8 text-center text-xl font-bold md:w-3/4 md:grid-cols-2 lg:grid-cols-3"
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
          class="block rounded-xl bg-black px-6 py-4 text-center text-white hover:bg-gray-800"
          >View All Projects
        </RouterLink>
      </div>
    </div>
  </section>
</template>
