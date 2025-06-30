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
    class="flex min-h-screen flex-col items-center justify-center bg-gradient-to-tr from-red-500 to-rose-400 text-center"
  >
    <div class="container flex flex-col items-center pb-10 pt-5">
      <div class="my-5 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
        <h1>Quote Generator</h1>
      </div>
      <div class="block rounded-lg bg-white px-5 pb-20 pt-5 shadow-lg sm:px-10 md:w-3/4">
        <div class="flex flex-col items-center justify-center">
          <div v-if="!isLoading" class="m-5 mb-12 text-lg text-red-500 md:text-xl lg:text-2xl">
            <h1 v-if="!hasPressed" class="text-base md:text-lg lg:text-xl">
              Press the button to get a inspiring quote!
            </h1>
            <div class="flex flex-row items-center justify-between text-base md:text-lg lg:text-xl">
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
                class="hidden rotate-180 sm:block sm:h-12"
              />
            </div>
            <div class="mt-6 text-right text-base text-black">
              <h1>{{ quote.originator.name }}</h1>
            </div>
          </div>
          <div v-else class="m-5 mb-12 space-y-2 text-base text-red-500 md:text-lg lg:text-xl">
            <h1>Fetching inspiring quote...</h1>
          </div>
          <div class="h-16 w-full">
            <div class="mb-2 text-base text-red-500 md:text-lg lg:text-xl">
              <p v-if="hasPressed">Not inspired enough?</p>
            </div>
            <button
              @click="getQuote"
              class="block h-full w-full rounded-md bg-red-400 p-4 text-center text-base text-black shadow-lg hover:bg-gray-400 md:text-lg lg:text-xl"
            >
              Get a new quote
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
