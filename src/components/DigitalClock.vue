<script setup>
import { ref } from 'vue'

const current_time = ref({
  year: '0001',
  month: 'January',
  day: 'Monday',
  date: '1',
  hours: '00',
  minutes: '00',
  seconds: '00',
})

setInterval(() => {
  const time = new Date()
  current_time.value.year = String(time.getFullYear())
  current_time.value.month = time.toLocaleString('default', { month: 'long' })
  current_time.value.day = time.toLocaleString('default', { weekday: 'long' })
  current_time.value.date = String(time.getDate()).padStart(2, '0')
  current_time.value.hours = String(time.getHours()).padStart(2, '0')
  current_time.value.minutes = String(time.getMinutes()).padStart(2, '0')
  current_time.value.seconds = String(time.getSeconds()).padStart(2, '0')
}, 1000)
</script>
<template>
  <section
    class="rounded-b-3xl bg-gradient-to-r from-yellow-300 to-rose-600 px-1 py-6 md:px-4 md:py-10"
  >
    <div class="text-white">
      <div class="flex flex-col items-center gap-5 text-xl font-bold md:text-3xl lg:text-5xl">
        <div class="flex w-11/12 flex-row items-center justify-evenly md:w-5/6">
          <div
            class="flex h-32 w-32 flex-col items-center justify-center rounded-xl shadow-2xl md:h-48 md:w-48 lg:h-48 lg:w-48"
          >
            <div>{{ current_time.hours }}</div>
            <h1 class="text-sm">HOURS</h1>
          </div>
          <div><h1 class="">:</h1></div>
          <div
            class="flex h-32 w-32 flex-col items-center justify-center rounded-xl shadow-2xl md:h-48 md:w-48 lg:h-48 lg:w-48"
          >
            <div>{{ current_time.minutes }}</div>
            <h1 class="text-sm">MINUTES</h1>
          </div>
          <div class=""><h1>:</h1></div>
          <div
            class="flex h-32 w-32 flex-col items-center justify-center rounded-xl shadow-2xl md:h-48 md:w-48 lg:h-48 lg:w-48"
          >
            <div>{{ current_time.seconds }}</div>
            <h1 class="text-sm">SECONDS</h1>
          </div>
        </div>
        <div class="text-center text-xl md:text-2xl lg:text-3xl">
          {{ current_time.day }}, {{ current_time.date }} {{ current_time.month }}
          {{ current_time.year }}
        </div>
      </div>
    </div>
  </section>
</template>
