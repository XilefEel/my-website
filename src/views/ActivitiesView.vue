<script setup>
import Hero from '@/components/Hero.vue'
import ActivityCard from '@/components/ActivityCard.vue'
import activities from '@/activities_list'
</script>
<template>
  <Hero title="Activities" subtitle="Mini Projects" />
  <section class="py-6 mx-20">
    <div class="text-center text-xl my-10 font-bold">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <ActivityCard v-for="activity in activities" :key="activity.id" :activity="activity" />
      </div>
    </div>
  </section>
</template>
