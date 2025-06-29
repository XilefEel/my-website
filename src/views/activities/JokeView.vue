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
    class="flex flex-col text-center items-center bg-gradient-to-tr from-yellow-400 to-red-400"
  >
    <div class="container flex flex-col items-center">
      <div class="my-5 text-3xl md:text-4xl lg:text-5xl font-bold">
        <h1>Joke Generator</h1>
      </div>
      <div class="block p-10 md:w-2/3 bg-black rounded-lg shadow-lg">
        <div class="flex flex-col justify-center items-center md:text-xl">
          <div class="size-40 mx-auto my-2">
            <img :src="laughing_emoji" alt="Laughing Emoji" />
          </div>
          <div v-if="!isLoading" class="text-white m-5 my-16 h-44 space-y-2">
            <h1>{{ jokes.setup }}</h1>
            <h1>{{ jokes.punchline }}</h1>
          </div>
          <div v-else class="text-white m-5 my-16 h-44 space-y-2">
            <h1>Fetching hilarious joke...</h1>
          </div>
          <div class="w-2/3 h-auto">
            <div class="text-white mb-2">
              <p v-if="hasPressed">Not funny?</p>
            </div>
            <button
              @click="getJoke"
              class="text-black block bg-yellow-400 rounded-md text-center text-lg h-full w-full p-4 hover:bg-gray-400"
            >
              Get a new joke
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
