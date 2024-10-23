<template>
    <div class="p-8 pb-0 mb-5">
        <h1 class="text-4xl font-bold mb-4 text-orange-500">Meals by Letter</h1>
        <div class="flex justify-center gap-2 mt-2">
            <router-link :to="{name: 'byLetter', params: { letter }}" v-for="letter of letters.split('')" :key="letter" class="w-2 h-2 flex items-center justify-center hover:text-orange-500 hover:scale-150 transition-all">
                {{ letter }}
            </router-link>
        </div>
    </div>
    <Meals :meals="meals" />
</template>

<script setup>
import store from '../store';
import { computed, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import Meals from '../components/Meals.vue'

const route = useRoute()
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const meals = computed(() => store.state.mealsByLetter);

const fetchMeals = () => {
  const letter = route.params.letter;
  if (letter) {
    store.dispatch('searchMealsByLetter', letter);
  }
};

watch(() => route.params.letter, fetchMeals);

onMounted(fetchMeals);

</script>