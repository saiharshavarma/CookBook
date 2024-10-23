<template>
    <div class="mx-auto p-8">
        <div class="flex flex-col justify-center">
            <h1 class="text-5xl text-center font-bold mb-5">{{ meal.strMeal }}</h1>
            <img :src="meal.strMealThumb" alt="meal.strMeal" />
            <div class="grid grid-cols-1 items-center text-center justify-center sm:grid-cols-3 text-lg py-2">
                <div>
                    <strong class="font-bold">Category:</strong> {{ meal.strCategory }}
                </div>
                <div>
                    <strong class="font-bold">Area:</strong> {{ meal.strArea }}
                </div>
                <div>
                    <strong class="font-bold">Tags:</strong> {{ meal.strTags }}
                </div>
            </div>
            <div class="py-3">
                {{ meal.strInstructions }}
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2">
                <div>
                    <h2 class="text-2xl font-semibold mb-2">Ingredients</h2>
                    <ul>
                        <template v-for="(el, ind) of new Array(20)">
                            <li v-if="meal[`strIngredient${ind+1}`]">{{ ind+1 }}. {{ meal[`strIngredient${ind+1}`] }}</li>
                        </template>
                    </ul>
                </div>
                <div>
                    <h2 class="text-2xl font-semibold mb-2">Measures</h2>
                    <ul>
                        <template v-for="(el, ind) of new Array(20)">
                            <li v-if="meal[`strMeasure${ind+1}`]">{{ ind+1 }}. {{ meal[`strMeasure${ind+1}`] }}</li>
                        </template>
                    </ul>
                </div>
            </div>
            <div class="flex mt-3">
                    <YouTubeButton :href="meal.strYoutube"> Go to YouTube</YouTubeButton>
                    <a :href="href" target="_blank" class="px-3 ml-5 py-2 rounded border-2 text-white border-blue-600 bg-blue-500 hover:bg-blue-600 transition-colors">Source</a>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import axiosClient from '../axiosClient';
import YouTubeButton from '../components/YouTube.vue';

const route = useRoute();
const meal = ref([]);

onMounted(() => {
    axiosClient.get(`lookup.php?i=${route.params.id}`)
    .then(({ data }) => {
        meal.value = data.meals[0] || {}
    })
})
</script>