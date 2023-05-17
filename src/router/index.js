import { defineAsyncComponent } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import BooksView from '../views/books/BooksView.vue'

const SingleBook = defineAsyncComponent(()=> import('../views/books/SingleBook.vue'))
const AuthorsView = defineAsyncComponent(()=> import('../views/authors/AuthorsView.vue'))
const SingleAuthor = defineAsyncComponent(()=> import('../views/authors/SingleAuthor.vue'))

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      redirect: { name: 'books' },
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/books',
      name: 'books',
      component: BooksView
    },
    {
      path: '/books/:id',
      name: 'book',
      component:  SingleBook 
    },
    {
      path: '/authors',
      name: 'authors',
      component:  AuthorsView 
    },
    {
      path: '/authors/:id',
      name: 'author',
      component:  SingleAuthor 
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 } // Scroll to top on route change
  }
})

export default router
