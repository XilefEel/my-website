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
      <div class="text-white text-5xl font-bold pb-2 pt-10">
        <h1>To Do List</h1>
      </div>
      <div class="text-white text-xl font-bold">
        <h1>Manage your tasks</h1>
      </div>
    </div>

    <div class="flex flex-row pb-10 justify-center items-center gap-5">
      <div class="">
        <input
          type="text"
          v-model="task"
          placeholder="Add a new task"
          class="outline-none bg-slate-100 rounded-lg shadow-lg text-black border-b-2 p-2 px-10"
        />
      </div>
      <div>
        <button
          class="text-black block bg-lime-500 rounded-md text-center text-lg shadow-lg p-2 px-6 hover:bg-gray-500"
          @click="addTask"
        >
          Add
        </button>
      </div>
    </div>
    <div class="flex flex-col p-8 gap-6 mx-28">
      <div v-for="(todo, index) in todos" :key="index">
        <div
          class="flex flex-row justify-between items-center bg-slate-100 p-4 px-10 rounded-lg shadow-lg"
        >
          <div class="flex items-center gap-4 text-black">
            <input type="checkbox" v-model="todo.completed" />
            <input
              type="text"
              class="text-black text-xl outline-none bg-transparent"
              :class="{ 'line-through italic ': todo.completed }"
              v-model="todo.text"
            />
          </div>
          <div
            class="block bg-red-500 rounded-md p-3 text-black hover:bg-red-700 cursor-pointer"
            @click="todos.splice(index, 1)"
          >
            Delete
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
