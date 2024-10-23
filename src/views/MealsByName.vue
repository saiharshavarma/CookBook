<template>
    <div class="p-8 pb-0">
        <input type="text" v-model="keyword" class="rounded border-2 border-grey-200 w-full" placeholder="Search for Meals" @change="searchMeals"/>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
        <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
    </div>
    <div v-if="!meals.length" class="flex justify-center text-gray-600">
        There are no meals
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import store from '../store';
import YouTubeButton from '../components/YouTube.vue';
import MealItem from '../components/MealItem.vue';

const route = useRoute();
const keyword = ref('');
const meals = computed(() => store.state.searchedMeals);

function searchMeals() {
    if (keyword.value) {
        store.dispatch('searchMeals', keyword.value);
    } else {
        store.commit('searchMeals', []);
    }
}

onMounted(() => {
    keyword.value = route.params.name
    if (keyword.value) {
        searchMeals()
    }
})

</script>