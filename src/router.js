import {createRouter, createWebHistory} from 'vue-router';
import HomePage from './pages/HomePage'
import ServicesPage from './pages/ServicesPage';

const routes = [
    {
        path: '/',
        component: HomePage,
        name: 'home'
    },
    {
        path: '/services',
        component: ServicesPage,
        name: 'services'
    }
]
export const router = createRouter({
    history: createWebHistory(),
    routes
})
