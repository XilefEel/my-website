<script setup>
import { ref } from 'vue'
import { evaluate } from 'mathjs'
const operations = [
  { operation: '(', bg: 'bg-gray-700' },
  { operation: ')', bg: 'bg-gray-700' },
  { operation: 'AC', bg: 'bg-blue-600' },
  { operation: 'DEL', bg: 'bg-blue-600' },
  { operation: '/', bg: 'bg-amber-500' },
  { operation: '*', bg: 'bg-amber-500' },
  { operation: '^2', bg: 'bg-gray-700' },
  { operation: '^', bg: 'bg-gray-700' },
  { operation: '7', bg: 'bg-gray-400' },
  { operation: '8', bg: 'bg-gray-400' },
  { operation: '9', bg: 'bg-gray-400' },
  { operation: '-', bg: 'bg-amber-500' },
  { operation: 'sqrt', bg: 'bg-gray-700' },
  { operation: '!', bg: 'bg-gray-700' },
  { operation: '4', bg: 'bg-gray-400' },
  { operation: '5', bg: 'bg-gray-400' },
  { operation: '6', bg: 'bg-gray-400' },
  { operation: '+', bg: 'bg-amber-500' },
  { operation: 'sin', bg: 'bg-gray-700' },
  { operation: 'cos', bg: 'bg-gray-700' },
  { operation: '1', bg: 'bg-gray-400' },
  { operation: '2', bg: 'bg-gray-400' },
  { operation: '3', bg: 'bg-gray-400' },
  { operation: '=', bg: 'bg-red-500 row-span-2' },
  { operation: 'tan', bg: 'bg-gray-700' },
  { operation: 'log', bg: 'bg-gray-700' },
  { operation: '%', bg: 'bg-gray-400' },
  { operation: '0', bg: 'bg-gray-400' },
  { operation: '.', bg: 'bg-gray-400' },
]

const display = ref('0')

const addToDisplay = (operation) => {
  if (operation.operation === 'AC') {
    display.value = '0'
  } else if (operation.operation === 'DEL') {
    display.value = display.value.slice(0, -1) ? display.value.slice(0, -1) : '0'
  } else if (display.value === '0' || display.value === 'Syntax Error') {
    display.value = operation.operation
  } else {
    display.value += operation.operation
  }
}

const calculate = () => {
  try {
    display.value = evaluate(String(display.value))
  } catch (error) {
    display.value = 'Syntax Error'
  }
}
</script>
<template>
  <section
    class="flex min-h-screen flex-col items-center justify-center bg-gradient-to-tr from-pink-500 to-amber-400 py-10 md:p-10"
  >
    <div class="mb-8 text-3xl font-extrabold md:text-4xl lg:text-5xl">
      <h1>Calculator</h1>
    </div>
    <div
      class="w-11/12 rounded-lg bg-gray-900 p-5 text-lg text-white shadow-md md:w-4/5 md:p-10 md:text-xl lg:w-2/3 lg:text-2xl"
    >
      <div
        type="text"
        class="mb-4 rounded-lg bg-gray-600 p-2 px-4 text-2xl font-bold md:mb-10 md:text-3xl lg:text-4xl"
      >
        {{ display }}
      </div>

      <div class="grid grid-cols-6 gap-2 md:gap-5">
        <button
          v-for="(operation, index) in operations"
          :key="index"
          @click="operation.operation === '=' ? calculate() : addToDisplay(operation)"
          class="rounded-lg py-1 font-bold text-white transition-opacity duration-200 hover:opacity-80 md:py-4"
          :class="operation.bg"
        >
          {{ operation.operation }}
        </button>
      </div>
    </div>
  </section>
</template>
