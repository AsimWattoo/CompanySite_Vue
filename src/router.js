import {createRouter, createWebHistory} from 'vue-router';
import HomePage from './pages/HomePage'

const routes = [
    {
        path: '/',
        component: HomePage,
        name: 'home'
    }
]
export const router = createRouter({
    history: createWebHistory(),
    routes
})
