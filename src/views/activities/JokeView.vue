<script setup>
import axios from 'axios'
import { ref } from 'vue'
import laughing_emoji from '@/assets/images/laughing_emoji.svg'

const jokes = ref({
  setup: 'This is a joke',
  punchline: 'Press the button to get a hilarious joke',
})
const hasPressed = ref(false)
const isLoading = ref(false)

const getJoke = () => {
  isLoading.value = true
  axios
    .get('https://official-joke-api.appspot.com/random_joke')
    .then((response) => {
      jokes.value = response.data
    })
    .catch((error) => {
      console.error('Error fetching joke:', error)
    })
    .finally(() => {
      hasPressed.value = true
      isLoading.value = false
    })
}
</script>

<template>
  <section
    class="flex min-h-screen flex-col items-center bg-gradient-to-tr from-yellow-400 to-red-400 py-10 pb-16 text-center"
  >
    <div class="container flex flex-col items-center">
      <div class="my-5 text-3xl font-bold md:text-4xl lg:text-5xl">
        <h1>Joke Generator</h1>
      </div>
      <div class="block rounded-lg bg-black p-10 shadow-lg md:w-2/3">
        <div class="flex flex-col items-center justify-center md:text-xl">
          <div class="mx-auto my-2 size-40">
            <img :src="laughing_emoji" alt="Laughing Emoji" />
          </div>
          <div v-if="!isLoading" class="m-5 my-16 h-44 space-y-2 text-white">
            <h1>{{ jokes.setup }}</h1>
            <h1>{{ jokes.punchline }}</h1>
          </div>
          <div v-else class="m-5 my-16 h-44 space-y-2 text-white">
            <h1>Fetching hilarious joke...</h1>
          </div>
          <div class="h-auto w-2/3">
            <div class="mb-2 text-white">
              <p v-if="hasPressed">Not funny?</p>
            </div>
            <button
              @click="getJoke"
              class="block h-full w-full rounded-md bg-yellow-400 p-4 text-center text-lg text-black hover:bg-gray-400"
            >
              Get a new joke
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
