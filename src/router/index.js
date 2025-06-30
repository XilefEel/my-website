import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ProjectsView from '@/views/ProjectsView.vue'
import ActivitiesView from '@/views/ActivitiesView.vue'
import JokeView from '@/views/activities/JokeView.vue'
import DictionaryView from '@/views/activities/DictionaryView.vue'
import QuoteView from '@/views/activities/QuotesView.vue'
import GifSearchView from '@/views/activities/GifSearchView.vue'
import ToDoSearchView from '@/views/activities/ToDoListView.vue'
import CalculatorView from '@/views/activities/CalculatorView.vue'
import Game2048View from '@/views/activities/Game2048View.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsView,
    },
    {
      path: '/activities',
      name: 'activities',
      component: ActivitiesView,
    },
    {
      path: '/activities/joke',
      name: 'joke',
      component: JokeView,
    },
    {
      path: '/activities/dictionary',
      name: 'dictionary',
      component: DictionaryView,
    },
    {
      path: '/activities/quote',
      name: 'quotes',
      component: QuoteView,
    },
    {
      path: '/activities/gif-search',
      name: 'gif search',
      component: GifSearchView,
    },
    {
      path: '/activities/todo',
      name: 'todo',
      component: ToDoSearchView,
    },
    {
      path: '/activities/calculator',
      name: 'calculator',
      component: CalculatorView,
    },
    {
      path: '/activities/2048-game',
      name: '2048',
      component: Game2048View,
    },
  ],
})

export default router
