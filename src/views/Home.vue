<template>
  <div class="flex flex-col p-8 justify-center">
    <Meals :meals="meals" />
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import axiosClient from '../axiosClient.js';
import Meals from '../components/Meals.vue';

const meals = ref([]);

onMounted(async () => {
  try {
    const { data } = await axiosClient.get('search.php?s=');
    meals.value = data.meals.slice(0, 12);
  } catch (error) {
    console.error('Error fetching meals:', error);
  }
});
</script>