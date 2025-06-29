<script setup>
import ActivityCard from '@/components/ActivityCard.vue'
import activities from '@/activities_list'
import { defineProps } from 'vue'

defineProps({
  limit: {
    type: Number,
    default: 4,
  },
})
</script>
<template>
  <section class="py-8 mx-10 md:mx-20">
    <div class="text-center my-10 font-bold space-y-4">
      <div class="text-center">
        <h1 class="text-2xl md:text-4xl text-blue-500 font-extrabold">Activities</h1>
        <h1 class="text-lg md:text-xl font-extrabold mt-3">
          Explore a variety of fun activities to enhance your learning experience.
        </h1>
      </div>
    </div>
    <div class="text-center text-xl my-10 font-bold">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <ActivityCard
          v-for="activity in activities.slice(0, limit || activities.length)"
          :key="activity.id"
          :activity="activity"
        />
      </div>
    </div>
    <section class="m-auto max-w-lg my-10 px-6">
      <RouterLink
        to="/activities"
        class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-800"
        >View All Activities
      </RouterLink>
    </section>
  </section>
</template>
