<template>
    <div class="p-8">
        <input type="text" v-model="keyword" class="rounded border-2 border-grey-200 w-full" placeholder="Search for Meals" @change="searchMeals"/>
    </div>
    <div>
        <pre>{{ meals }}</pre>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import store from '../store';

const keyword = ref('');
const meals = computed(() => store.state.searchedMeals);
function searchMeals() {
    store.dispatch('searchMeals', keyword.value)
}

</script>