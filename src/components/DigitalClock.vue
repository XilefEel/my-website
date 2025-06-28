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
  <section class="m-10 mx-20">
    <div class="bg-gradient-to-r from-purple-300 to-purple-600 p-5 rounded-3xl shadow-lg">
      <div class="flex flex-col mb-10 font-bold text-xl md:text-3xl lg:text-4xl">
        <div class="text-center text-white mt-10">
          {{ current_time.day }}, {{ current_time.date }} {{ current_time.month }}
          {{ current_time.year }}
        </div>
        <div class="flex flex-row items-center justify-evenly mt-10 mb-5">
          <div
            class="flex flex-col justify-center items-center bg-white rounded-lg shadow-lg h-32 md:h-48 lg:h-48 w-32 md:w-48 lg:w-48"
          >
            <div>{{ current_time.hours }}</div>
            <h1 class="text-sm mt-2">HOURS</h1>
          </div>
          <div><h1 class="text-white">:</h1></div>
          <div
            class="flex flex-col justify-center items-center bg-white rounded-lg shadow-lg h-32 md:h-48 lg:h-48 w-32 md:w-48 lg:w-48"
          >
            <div>{{ current_time.minutes }}</div>
            <h1 class="text-sm mt-2">MINUTES</h1>
          </div>
          <div class="text-white"><h1>:</h1></div>
          <div
            class="flex flex-col justify-center items-center bg-white rounded-lg shadow-lg h-32 md:h-48 lg:h-48 w-32 md:w-48 lg:w-48"
          >
            <div>{{ current_time.seconds }}</div>
            <h1 class="text-sm mt-2">SECONDS</h1>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
