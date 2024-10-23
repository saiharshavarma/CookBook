<template>
    <div class="flex flex-col p-8 justify-center">
        <Meals :meals="meals" />  
    </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import store from '../store';
import axiosClient from '../axiosClient.js'
import Meals from "../components/Meals.vue";

const meals = ref([]);

onMounted(async () => {
  for (let i = 0; i < 12; i++) {
    axiosClient
      .get(`random.php`)
      .then(({ data }) => meals.value.push(data.meals[0]));
  }
});
</script>