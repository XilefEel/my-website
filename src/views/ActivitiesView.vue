<script setup>
import Hero from '@/components/Hero.vue'
import ActivityCard from '@/components/ActivityCard.vue'
import activities from '@/activities_list'
</script>
<template>
  <Hero title="Activities" subtitle="Mini Projects" />
  <section class="mx-20 py-6">
    <div class="my-10 text-center text-xl font-bold">
      <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
        <ActivityCard v-for="activity in activities" :key="activity.id" :activity="activity" />
      </div>
    </div>
  </section>
</template>
