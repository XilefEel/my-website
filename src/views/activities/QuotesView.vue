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
const QUOTES_API_KEY = String(import.meta.env.VITE_QUOTES_API_KEY)

const getQuote = () => {
  isLoading.value = true
  axios
    .get('https://quotes15.p.rapidapi.com/quotes/random/', {
      headers: {
        'x-rapidapi-key': QUOTES_API_KEY,
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
    <div class="container flex flex-col items-center pt-5 pb-10">
      <div class="my-5 text-3xl md:text-4xl lg:text-5xl text-white font-bold">
        <h1>Quote Generator</h1>
      </div>
      <div class="block pt-5 px-5 sm:px-10 pb-20 md:w-3/4 bg-white rounded-lg shadow-lg">
        <div class="flex flex-col justify-center items-center">
          <div v-if="!isLoading" class="text-red-500 text-lg md:text-xl lg:text-2xl m-5 mb-12">
            <h1 v-if="!hasPressed" class="text-base md:text-lg lg:text-xl">
              Press the button to get a inspiring quote!
            </h1>
            <div class="flex flex-row justify-between items-center text-base md:text-lg lg:text-xl">
              <img
                v-if="hasPressed"
                :src="quotations"
                alt="Quotations"
                class="hidden sm:block sm:h-12"
              />
              <h1 class="sm:mx-5">{{ quote.content }}</h1>
              <img
                v-if="hasPressed"
                :src="quotations"
                alt="Quotations"
                class="hidden sm:block sm:h-12 rotate-180"
              />
            </div>
            <div class="text-base text-right text-black mt-6">
              <h1>{{ quote.originator.name }}</h1>
            </div>
          </div>
          <div v-else class="text-red-500 text-base md:text-lg lg:text-xl m-5 mb-12 space-y-2">
            <h1>Fetching inspiring quote...</h1>
          </div>
          <div class="w-full h-16">
            <div class="text-red-500 mb-2 text-base md:text-lg lg:text-xl">
              <p v-if="hasPressed">Not inspired enough?</p>
            </div>
            <button
              @click="getQuote"
              class="text-black block bg-red-400 rounded-md text-center text-base md:text-lg lg:text-xl h-full w-full p-4 shadow-lg hover:bg-gray-400"
            >
              Get a new quote
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
