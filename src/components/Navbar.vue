<template>
    <header class="bg-white shadow-md h-16 flex justify-between items-stretch">
        <router-link :to="{name: 'home'}" class="text-2xl inline-flex items-center h-full px-5 text-orange-500 font-bold">
        CookBook
        </router-link>
        <div class="flex items-center gap-1">
        <router-link :to="{name: 'byName'}" class="inline-flex items-center px-2 h-full transition-colors hover:bg-purple-100">
            Search Meals
        </router-link>
        <router-link :to="{name: 'byLetter'}" class="inline-flex items-center px-2 h-full transition-colors hover:bg-purple-100">
            Meals by letter
        </router-link>
        <router-link :to="{name: 'ingredients'}" class="inline-flex items-center px-2 h-full transition-colors hover:bg-purple-100">
            Meals by Ingredients
        </router-link>
        </div>
    </header>
</template>

<script setup>
</script>