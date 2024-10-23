import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import MealsByName from '../views/MealsByName.vue';
import MealsByLetter from '../views/MealsByLetter.vue';
import MealsByIngredient from '../views/MealsByIngredient.vue';
import DefaultLayout from '../components/DefaultLayout.vue';
import GuestLayout from '../components/GuestLayout.vue';

const routes = [
    {
        path: '/',
        component: DefaultLayout,
        children: [
            {
                path: '/',
                name: 'home',
                component: Home
            },
            {
                path: '/by-letter/:letter?',
                name: 'byLetter',
                component: MealsByLetter
            },
            {
                path: '/by-name/:name?',
                name: 'byName',
                component: MealsByName
            },
            {
                path: '/ingredient/:ingredient?',
                name: 'byIngredient',
                component: MealsByIngredient
            }
            {
                path: '/meal/:id',
                name: 'mealDetail',
                component: mealDetail
            }
        ]
    },
    {
        path: '/guest',
        component: GuestLayout,
        children: [
        ]
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;