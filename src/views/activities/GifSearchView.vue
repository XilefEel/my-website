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
  <section class="min-h-screen bg-gray-900">
    <div class="mb-10 flex flex-col items-center justify-center">
      <div class="pb-2 pt-10 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
        <h1>GIF Search</h1>
      </div>
      <div class="text-base font-bold text-white md:text-lg lg:text-xl">
        <h1>Search for GIFs</h1>
      </div>
    </div>
    <div class="flex flex-col items-center justify-center gap-5 md:flex-row">
      <div class="">
        <input
          type="text"
          v-model="search_term"
          placeholder="Search for GIFs"
          class="rounded-lg border-b-2 border-b-green-400 bg-gray-700 p-2 px-10 text-sm text-white shadow-lg outline-none md:text-base"
        />
      </div>
      <div>
        <button
          class="block rounded-md bg-green-400 p-2 px-6 text-center text-sm text-white shadow-lg hover:bg-gray-500 md:text-base"
          @click="searchGif"
        >
          Search
        </button>
      </div>
    </div>
    <div
      v-if="hasSearched"
      class="grid grid-cols-1 gap-6 px-10 py-16 md:grid-cols-2 lg:grid-cols-4"
    >
      <div v-for="(, index) in gif_results.results" :key="index">
        <div class="flex h-full flex-col justify-between rounded-lg bg-gray-700 p-3 shadow-lg">
          <div>
            <img
              :src="gif_results.results[index].media_formats.tinygif.url"
              alt="GIF"
              class="w-full"
            />
          </div>
          <div class="pt-5">
            <button
              class="block rounded-md bg-green-400 p-2 px-6 text-center text-sm text-white shadow-lg hover:bg-gray-500 md:text-base"
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
