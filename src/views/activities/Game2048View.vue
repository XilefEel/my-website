<script setup>
import { ref, onMounted } from 'vue'

const size = 4
const board = ref([])
const gameOver = ref(false)
const boardRef = ref(null)

let startX = 0
let startY = 0

function initBoard() {
  board.value = Array(size * size).fill(0)
  gameOver.value = false
  addRandomTile()
  addRandomTile()
}

const restartGame = () => {
  initBoard()
}

const getTile = (row, col) => {
  return board.value[row * size + col]
}

const setTile = (row, col, value) => {
  board.value[row * size + col] = value
}

const addRandomTile = () => {
  const empty = board.value.map((val, i) => (val === 0 ? i : -1)).filter((i) => i !== -1)

  if (empty.length === 0) return

  const index = empty[Math.floor(Math.random() * empty.length)]
  board.value[index] = Math.random() > 0.9 ? 4 : 2
}

const slide = (row) => {
  const arr = row.filter((val) => val !== 0)
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i + 1]) {
      arr[i] *= 2
      arr[i + 1] = 0
    }
  }
  return arr
    .filter((val) => val !== 0)
    .concat(Array(size - arr.filter((val) => val !== 0).length).fill(0))
}

const move = (direction) => {
  let moved = false

  if (direction === 'left') {
    for (let row = 0; row < size; row++) {
      const current = []
      for (let col = 0; col < size; col++) current.push(getTile(row, col))
      const newRow = slide(current)
      for (let col = 0; col < size; col++) {
        if (getTile(row, col) !== newRow[col]) moved = true
        setTile(row, col, newRow[col])
      }
    }
  }

  if (direction === 'right') {
    for (let row = 0; row < size; row++) {
      const current = []
      for (let col = size - 1; col >= 0; col--) current.push(getTile(row, col))
      const newRow = slide(current).reverse()
      for (let col = 0; col < size; col++) {
        if (getTile(row, col) !== newRow[col]) moved = true
        setTile(row, col, newRow[col])
      }
    }
  }

  if (direction === 'up') {
    for (let col = 0; col < size; col++) {
      const current = []
      for (let row = 0; row < size; row++) current.push(getTile(row, col))
      const newCol = slide(current)
      for (let row = 0; row < size; row++) {
        if (getTile(row, col) !== newCol[row]) moved = true
        setTile(row, col, newCol[row])
      }
    }
  }

  if (direction === 'down') {
    for (let col = 0; col < size; col++) {
      const current = []
      for (let row = size - 1; row >= 0; row--) current.push(getTile(row, col))
      const newCol = slide(current).reverse()
      for (let row = 0; row < size; row++) {
        if (getTile(row, col) !== newCol[row]) moved = true
        setTile(row, col, newCol[row])
      }
    }
  }

  if (moved) {
    addRandomTile()
    if (checkGameOver()) {
      gameOver.value = true
    }
  }
}

const checkGameOver = () => {
  if (board.value.includes(0)) return false

  for (let row = 0; row < size; row++) {
    for (let col = 0; col < size; col++) {
      const current = getTile(row, col)
      if (col < size - 1 && current === getTile(row, col + 1)) return false
      if (row < size - 1 && current === getTile(row + 1, col)) return false
    }
  }
  return true
}

const tileClasses = (val) => {
  const colors = {
    0: 'bg-gray-600',
    2: 'bg-yellow-100 text-gray-800',
    4: 'bg-yellow-200 text-gray-800',
    8: 'bg-orange-400',
    16: 'bg-orange-500',
    32: 'bg-orange-600',
    64: 'bg-orange-700',
    128: 'bg-green-400',
    256: 'bg-green-500',
    512: 'bg-green-600',
    1024: 'bg-blue-400',
    2048: 'bg-purple-600',
  }
  return colors[val] || 'bg-white text-black'
}

const handleTouchStart = (e) => {
  const touch = e.changedTouches[0]
  startX = touch.clientX
  startY = touch.clientY
}

const handleTouchEnd = (e) => {
  const touch = e.changedTouches[0]
  const dx = touch.clientX - startX
  const dy = touch.clientY - startY

  if (Math.abs(dx) > Math.abs(dy)) {
    dx > 0 ? move('right') : move('left')
  } else {
    dy > 0 ? move('down') : move('up')
  }
}

onMounted(() => {
  initBoard()

  window.addEventListener(
    'keydown',
    (e) => {
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
        e.preventDefault()
      }

      if (gameOver.value) return

      if (e.key === 'ArrowLeft') move('left')
      if (e.key === 'ArrowRight') move('right')
      if (e.key === 'ArrowUp') move('up')
      if (e.key === 'ArrowDown') move('down')
    },
    { passive: false },
  )
})
</script>

<template>
  <div
    class="flex min-h-screen select-none flex-col items-center justify-center bg-gray-900 p-4 text-white"
  >
    <h1 class="mb-5 text-5xl font-bold">2048 Game</h1>

    <button
      @click="restartGame"
      class="mb-5 rounded bg-purple-600 px-4 py-2 font-semibold text-white transition hover:bg-purple-700"
    >
      Restart
    </button>

    <div
      class="grid grid-cols-4 gap-2 rounded bg-gray-700 p-2"
      ref="boardRef"
      @touchstart="handleTouchStart"
      @touchend="handleTouchEnd"
    >
      <div
        v-for="(tile, index) in board"
        :key="index"
        class="flex h-16 w-16 items-center justify-center rounded text-xl font-bold transition-all duration-200"
        :class="tileClasses(tile)"
      >
        {{ tile !== 0 ? tile : '' }}
      </div>
    </div>

    <p v-if="gameOver" class="mt-4 text-lg font-bold text-red-400">Game Over!</p>
    <p v-else class="mt-4 text-sm text-gray-400">Use arrow keys or swipe to play</p>
  </div>
</template>
