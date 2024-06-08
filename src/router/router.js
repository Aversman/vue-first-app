import MainPage from '@/pages/MainPage.vue'
import PostsPage from '@/pages/PostsPage.vue'
import PostPage from '@/pages/PostPage.vue'
import AboutPage from '@/pages/AboutPage.vue'
import NotFoundPage from '@/pages/NotFoundPage.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    meta: { title: 'Home page' },
    component: MainPage
  },
  {
    path: '/posts',
    meta: { title: 'Posts' },
    component: PostsPage
  },
  {
    path: '/about',
    meta: { title: 'About us' },
    component: AboutPage
  },
  {
    path: '/posts/:id',
    meta: { title: 'More about post' },
    component: PostPage
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    meta: { title: '404 Not Found' },
    component: NotFoundPage
  }
]

const router = createRouter({
  routes,
  history: createWebHistory()
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'First App';
  next();
})

export default router;