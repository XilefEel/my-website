<script setup>
import { ref } from 'vue'
import { useTodoStore } from '@/stores/todo'
import { useToast } from 'vue-toastification'

const todoStore = useTodoStore()
const task = ref('')
const toast = useToast()

const addTask = () => {
  if (task.value.trim() !== '') {
    todoStore.addTodo(task.value.trim())
    task.value = ''
    toast.success('Task added successfully!')
  } else {
    toast.error('Please enter a task before adding.')
  }
}
const deleteTask = (id) => {
  todoStore.deleteTodo(id)
  toast.info('Task deleted!')
}
</script>
<template>
  <section class="min-h-screen bg-gradient-to-tr from-green-400 to-lime-400 py-10">
    <div class="mb-10 flex flex-col items-center justify-center">
      <div class="pb-2 pt-10 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
        <h1>To Do List</h1>
      </div>
      <div class="text-xl font-bold text-white">
        <h1>Manage your tasks</h1>
      </div>
    </div>
    <div class="flex flex-col items-center justify-center gap-5 pb-10 md:flex-row">
      <input
        type="text"
        v-model="task"
        placeholder="Add a new task"
        class="rounded-lg border-b-2 bg-slate-100 p-2 px-10 text-black shadow-lg outline-none"
      />
      <div>
        <button
          class="block rounded-md bg-lime-500 p-2 px-6 text-center text-lg text-white shadow-lg hover:bg-gray-500"
          @click="addTask"
        >
          Add
        </button>
      </div>
    </div>
    <div class="flex flex-col gap-6 px-4 md:px-10 lg:px-16">
      <div v-for="todo in todoStore.todos" :key="todo.id">
        <div
          class="flex flex-col justify-between rounded-lg bg-slate-100 p-4 shadow-lg sm:flex-row md:px-16"
        >
          <div class="flex gap-4 text-black">
            <input type="checkbox" v-model="todo.done" />
            <input
              type="text"
              class="w-full bg-transparent text-base text-black outline-none md:text-lg lg:text-xl"
              :class="{ 'italic line-through': todo.done }"
              v-model="todo.text"
            />
          </div>
          <button
            class="mt-3 block w-full cursor-pointer rounded-md bg-red-500 p-3 text-center text-sm text-black hover:bg-red-700 sm:mt-0 sm:w-auto md:text-base lg:text-lg"
            @click="deleteTask(todo.id)"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
