import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import MealsByName from '../views/MealsByName.vue';
import MealsByLetter from '../views/MealsByLetter.vue';
import MealsByIngredient from '../views/MealsByIngredient.vue';
import Ingredients from '../views/Ingredients.vue';
import MealDetail from '../views/MealDetail.vue';
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
                component: Home,
            },
            {
                path: '/by-letter/:letter?',
                name: 'byLetter',
                component: MealsByLetter,
            },
            {
                path: '/by-name/:name?',
                name: 'byName',
                component: MealsByName,
            },
            {
                path: '/ingredients',
                name: 'ingredients',
                component: Ingredients,
            },
            {
                path: '/ingredient/:ingredient',
                name: 'byIngredient',
                component: MealsByIngredient,
            },
            {
                path: '/meal/:id',
                name: 'mealDetail',
                component: MealDetail,
            }
        ]
    },
    {
        path: '/guest',
        component: GuestLayout,
    }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;