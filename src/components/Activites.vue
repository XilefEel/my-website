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
  <section class="mx-10 py-8 md:mx-20">
    <div class="my-10 space-y-4 text-center font-bold">
      <div class="text-center">
        <h1 class="text-2xl font-extrabold text-blue-500 md:text-4xl">Activities</h1>
        <h1 class="mt-3 text-lg font-extrabold md:text-xl">
          Explore a variety of fun activities to enhance your learning experience.
        </h1>
      </div>
    </div>
    <div class="my-10 text-center text-xl font-bold">
      <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
        <ActivityCard
          v-for="activity in activities.slice(0, limit || activities.length)"
          :key="activity.id"
          :activity="activity"
        />
      </div>
    </div>
    <section class="m-auto my-10 max-w-lg px-6">
      <RouterLink
        to="/activities"
        class="block rounded-xl bg-black px-6 py-4 text-center text-white hover:bg-gray-800"
        >View All Activities
      </RouterLink>
    </section>
  </section>
</template>
