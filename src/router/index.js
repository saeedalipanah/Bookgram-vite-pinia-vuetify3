import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      redirect:{name:'books'},
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/books',
      name: 'books',
      component: () => import('../views/books/BooksView.vue')
    },
    {
      path: "/books/:id",
      name: "book",
      component: () => import('../views/books/SingleBook.vue')
    },
    {
      path: '/authors',
      name: 'authors',
      component: () => import('../views/authors/AuthorsView.vue')
    },
    {
      path: "/authors/:id",
      name: "author",
      component: () => import('../views/authors/SingleAuthor.vue')
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }; // Scroll to top on route change
  }
})

export default router
