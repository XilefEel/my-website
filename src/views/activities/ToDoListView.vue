<script setup>
import { ref } from 'vue'

const todos = ref([])
const task = ref('')

const addTask = () => {
  if (task.value.trim() !== '') {
    todos.value.push({ text: task.value.trim(), completed: false })
    task.value = ''
  }
}
</script>
<template>
  <section class="bg-gradient-to-tr from-green-400 to-lime-400 py-10">
    <div class="flex flex-col justify-center items-center mb-10">
      <div class="text-white text-3xl md:text-4xl lg:text-5xl font-bold pb-2 pt-10">
        <h1>To Do List</h1>
      </div>
      <div class="text-white text-xl font-bold">
        <h1>Manage your tasks</h1>
      </div>
    </div>
    <div class="flex flex-col md:flex-row pb-10 justify-center items-center gap-5">
      <input
        type="text"
        v-model="task"
        placeholder="Add a new task"
        class="outline-none bg-slate-100 rounded-lg shadow-lg text-black border-b-2 p-2 px-10"
      />
      <div>
        <button
          class="text-white block bg-lime-500 rounded-md text-center text-lg shadow-lg p-2 px-6 hover:bg-gray-500"
          @click="addTask"
        >
          Add
        </button>
      </div>
    </div>
    <div class="flex flex-col px-4 md:px-10 lg:px-16 gap-6">
      <div v-for="(todo, index) in todos" :key="index">
        <div
          class="flex flex-col sm:flex-row md:px-16 justify-between bg-slate-100 rounded-lg shadow-lg p-4"
        >
          <div class="flex gap-4 text-black">
            <input type="checkbox" v-model="todo.completed" />
            <input
              type="text"
              class="text-black text-base md:text-lg lg:text-xl outline-none bg-transparent w-full"
              :class="{ 'line-through italic ': todo.completed }"
              v-model="todo.text"
            />
          </div>
          <button
            class="block bg-red-500 rounded-md p-3 text-black text-sm md:text-base lg:text-lg hover:bg-red-700 cursor-pointer w-full sm:w-auto text-center mt-3 sm:mt-0"
            @click="todos.splice(index, 1)"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
