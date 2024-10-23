<template>
    <div class="bg-white shadow rounded-xl hover:scale-105 transition-all">
        <img :src="meal.strMealThumb" alt="meal.strMeal" class="rounded-t-xl w-full h-64 object-cover"/>
        <div class="p-3">
            <h3 class="font-bold">{{ meal.strMeal }}</h3>
            <div class="mb-4">
                {{ $filters.truncateWords(meal.strInstructions, 20) }}...
            </div>
            <div class="flex items-center justify-between">
                <YouTubeButton :href="meal.strYoutube"/>
                <router-link :to="{name: 'mealDetail', params: {id: meal.idMeal}}" class="px-3 py-2 rounded border-2 text-white border-blue-600 bg-blue-500 hover:bg-blue-600 transition-colors">View More</router-link>
            </div>
        </div>
    </div>
</template>

<script setup>
import YouTubeButton from './YouTube.vue';

const { meal } = defineProps({
    meal: {
        required: true,
        type: Object
    }
})

</script>