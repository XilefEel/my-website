<script setup>
import axios from 'axios'
import { ref } from 'vue'
import quotations from '@/assets/images/quote.png'

const quote = ref({
  quote: '',
  originator: {
    name: '',
  },
})
const hasPressed = ref(false)
const isLoading = ref(false)

const getQuote = () => {
  isLoading.value = true
  axios
    .get('https://quotes15.p.rapidapi.com/quotes/random/', {
      headers: {
        'x-rapidapi-key': '8392e85394mshb7835a3d63c8ae3p1dcee8jsn94079e1406a0',
      },
    })
    .then((response) => {
      quote.value = response.data
    })
    .catch((error) => {
      console.error('Error fetching quote:', error)
    })
    .finally(() => {
      hasPressed.value = true
      isLoading.value = false
    })
}
</script>

<template>
  <section
    class="flex flex-col justify-center text-center items-center bg-gradient-to-tr from-red-500 to-rose-400"
  >
    <div class="m-10 mb-20">
      <div class="my-5 text-5xl text-white font-bold">
        <h1>Quote Generator</h1>
      </div>
      <div class="block p-10 pb-20 w-[700px] bg-white rounded-lg shadow-lg">
        <div class="flex flex-col justify-center items-center">
          <div v-if="!isLoading" class="text-red-500 text-xl m-5 mb-12">
            <h1 v-if="!hasPressed" class="text-xl">Press the button to get a inspiring quote!</h1>
            <div class="flex flex-row justify-between items-center">
              <img v-if="hasPressed" :src="quotations" alt="Quotations" class="h-12" />
              <h1 class="mx-5">{{ quote.content }}</h1>
              <img v-if="hasPressed" :src="quotations" alt="Quotations" class="h-12 rotate-180" />
            </div>
            <div class="text-base text-right text-black mt-6">
              <h1>{{ quote.originator.name }}</h1>
            </div>
          </div>
          <div v-else class="text-red-500 text-xl m-5 mb-12 space-y-2">
            <h1>Fetching inspiring quote...</h1>
          </div>
          <div class="w-full h-16">
            <div class="text-red-500 mb-2">
              <p v-if="hasPressed">Not inspired enough?</p>
            </div>
            <button
              @click="getQuote"
              class="text-black block bg-red-400 rounded-md text-center text-lg h-full w-full p-4 shadow-lg hover:bg-gray-400"
            >
              Get a new quote
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
