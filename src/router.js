import {createRouter, createWebHistory} from 'vue-router';
import HomePage from './pages/HomePage'
import ServicesPage from './pages/ServicesPage';

const routes = [
    {
        path: '/',
        component: HomePage,
        name: 'home',
        meta: {
            id: 0
        }
    },
    {
        path: '/services',
        component: ServicesPage,
        name: 'services',
        meta: {
            id: 1
        }
    }
]
export const router = createRouter({
    history: createWebHistory(),
    routes
})
