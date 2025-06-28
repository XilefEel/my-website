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
  <section class="flex flex-col justify-center bg-gradient-to-tr from-purple-500 to-pink-300">
    <div class="m-10">
      <div class="my-1 mt-5 text-center text-white text-5xl font-bold">
        <h1>Dictionary</h1>
      </div>
      <div class="my-1 mb-6 text-center text-white text-xl">
        <h2>Search for any word</h2>
      </div>
      <div class="block max-w-[600px] mx-auto bg-white rounded-lg shadow-lg p-8">
        <div class="flex flex-row justify-between">
          <div>
            <input
              class="outline-none border-b-purple-300 border-b-2 w-96 p-2"
              type="text"
              placeholder="Type the word here..."
              v-model="word"
            />
          </div>
          <div>
            <button
              class="text-white block bg-purple-400 rounded-md text-center text-lg shadow-lg p-3 hover:bg-gray-500"
              @click="getDefinition"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="result[0].word"
      class="block w-[800px] mx-auto mb-20 bg-white rounded-lg shadow-lg p-8"
    >
      <div>
        <div>
          <h1 class="text-3xl font-bold">
            {{ result[0].word }}
          </h1>
          <p class="text-gray-500">{{ result[0].phonetics[0].text }}</p>
        </div>
        <div>
          <div
            v-for="(partOfSpeech, index) in result[0].meanings"
            :key="index"
            class="text-lg mt-8"
          >
            <p class="text-gray-500">{{ partOfSpeech.partOfSpeech }}</p>
            <div
              v-for="(definition, index) in result[0].meanings[index].definitions.slice(
                0,
                3 || result[0].meanings[index].definitions.length,
              )"
              :key="index"
              class="text-lg mt-3"
            >
              <p class="border-l-2 border-gray-300 pl-4">{{ definition.definition }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
