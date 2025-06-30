<script setup>
import axios from 'axios'
import { ref } from 'vue'

const word = ref('')
const result = ref([
  {
    word: '',
    phonetics: [
      {
        text: '',
        audio: '',
      },
    ],
    meanings: [
      {
        partOfSpeech: '',
        definitions: [
          {
            definition: '',
          },
        ],
      },
    ],
  },
])

const getDefinition = () => {
  axios
    .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word.value}`)
    .then((response) => {
      result.value = response.data
    })
    .catch((error) => {
      console.error('Error fetching definition:', error)
      result.value = 'No definition found'
    })
    .finally(() => {
      word.value = ''
    })
}
</script>
<template>
  <section
    class="flex min-h-screen flex-col justify-center bg-gradient-to-tr from-purple-500 to-pink-300"
  >
    <div class="my-10">
      <div class="my-1 mt-5 text-center text-3xl font-bold text-white md:text-4xl lg:text-5xl">
        <h1>Dictionary</h1>
      </div>
      <div class="my-1 mb-6 text-center text-lg text-white md:text-xl lg:text-2xl">
        <h2>Search for any word</h2>
      </div>
      <div class="mx-auto block rounded-lg bg-white p-8 shadow-lg sm:w-2/3">
        <div class="flex flex-col items-center justify-between sm:flex-row sm:gap-5">
          <input
            class="w-full border-b-2 border-b-purple-300 p-2 outline-none"
            type="text"
            placeholder="Type the word here..."
            v-model="word"
          />

          <button
            class="mt-5 block w-1/2 rounded-md bg-purple-400 p-3 text-center text-lg text-white shadow-lg hover:bg-gray-500 sm:mt-0 sm:w-1/3"
            @click="getDefinition"
          >
            Search
          </button>
        </div>
      </div>
    </div>
    <div
      v-if="result[0].word"
      class="mx-auto mb-20 block rounded-lg bg-white p-8 shadow-lg sm:w-5/6"
    >
      <div>
        <div>
          <h1 class="text-2xl font-bold md:text-3xl lg:text-4xl">
            {{ result[0].word }}
          </h1>
          <p class="text-gray-500">{{ result[0].phonetics[0].text }}</p>
        </div>
        <div>
          <div
            v-for="(partOfSpeech, index) in result[0].meanings"
            :key="index"
            class="mt-8 text-base md:text-lg lg:text-xl"
          >
            <p class="text-gray-500">{{ partOfSpeech.partOfSpeech }}</p>
            <div
              v-for="(definition, index) in result[0].meanings[index].definitions.slice(
                0,
                3 || result[0].meanings[index].definitions.length,
              )"
              :key="index"
              class="mt-3 text-base md:text-lg lg:text-xl"
            >
              <p class="border-l-2 border-gray-300 pl-4">{{ definition.definition }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
