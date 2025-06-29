<script setup>
import axios from 'axios'
import { ref } from 'vue'

const clientkey = 'my_test_app'
const limit = 16
const search_term = ref('')
const TENOR_API_KEY = import.meta.env.VITE_TENOR_API_KEY

const gif_results = ref({
  results: [
    {
      media_formats: {
        tinygif: {
          url: '',
        },
      },
    },
  ],
})
const hasSearched = ref(false)
const searchGif = () => {
  axios
    .get(
      `https://tenor.googleapis.com/v2/search?q=${search_term.value}&key=${TENOR_API_KEY}&client_key=${clientkey}&limit=${limit}`,
    )
    .then((response) => {
      gif_results.value = response.data
    })
    .catch((error) => {
      console.error('Error fetching GIFs:', error)
    })
    .finally(() => {
      search_term.value = ''
      hasSearched.value = true
    })
}

const copyLink = (link) => {
  navigator.clipboard.writeText(link).then(
    () => {
      console.log('Link copied to clipboard:', link)
    },
    (err) => {
      console.error('Could not copy text: ', err)
    },
  )
}
</script>
<template>
  <section class="bg-gray-900 pt-5 pb-10">
    <div class="flex flex-col justify-center items-center mb-10">
      <div class="text-white text-3xl md:text-4xl lg:text-5xl font-bold pb-2 pt-10">
        <h1>GIF Search</h1>
      </div>
      <div class="text-white text-base md:text-lg lg:text-xl font-bold">
        <h1>Search for GIFs</h1>
      </div>
    </div>
    <div class="flex flex-col md:flex-row justify-center items-center gap-5">
      <div class="">
        <input
          type="text"
          v-model="search_term"
          placeholder="Search for GIFs"
          class="outline-none text-sm md:text-base bg-gray-700 border-b-green-400 rounded-lg shadow-lg text-white border-b-2 p-2 px-10"
        />
      </div>
      <div>
        <button
          class="text-white block text-sm md:text-base bg-green-400 rounded-md text-center shadow-lg p-2 px-6 hover:bg-gray-500"
          @click="searchGif"
        >
          Search
        </button>
      </div>
    </div>
    <div
      v-if="hasSearched"
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-10 py-16"
    >
      <div v-for="(, index) in gif_results.results" :key="index">
        <div class="flex bg-gray-700 h-full p-3 rounded-lg shadow-lg flex-col justify-between">
          <div>
            <img
              :src="gif_results.results[index].media_formats.tinygif.url"
              alt="GIF"
              class="w-full"
            />
          </div>
          <div class="pt-5">
            <button
              class="text-white block bg-green-400 rounded-md text-center text-sm md:text-base shadow-lg p-2 px-6 hover:bg-gray-500"
              @click="copyLink(gif_results.results[index].media_formats.tinygif.url)"
            >
              Copy Link
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
