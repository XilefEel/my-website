<script setup>
import Card from './Card.vue'
import { defineProps } from 'vue'

defineProps({
  activity: {
    type: Object,
  },
})
</script>

<template>
  <Card :bg="activity.bg">
    <h1>{{ activity.title }}</h1>
    <div class="flex items-center justify-center">
      <RouterLink :to="activity.link" class="block p-3">
        <img :src="activity.image" />
      </RouterLink>
    </div>
  </Card>
</template>
