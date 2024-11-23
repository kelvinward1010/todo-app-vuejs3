import HomeView from '@/views/HomeView.vue'
import Layout from '@/views/Layout.vue'
import TodoView from '@/views/todoview/TodoView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'layout',
            component: Layout,
            children: [
                {
                    path: '/',
                    name: 'home',
                    component: HomeView
                },
                {
                    path: '/todo',
                    name: 'todo',
                    component: TodoView
                }
            ]
        }
    ]
})

export default router