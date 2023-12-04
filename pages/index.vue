<script setup lang="ts">
const route = useRoute();
</script>

<template>
  <div>
    <h1>Nuxt Routing set up successfully!</h1>
    <p>Current route: {{ route.path }}</p>
    <button @click="$router.push('/pinia')">Pinia Showcase</button>
    <button @click="$router.push('/locale')">Locale Showcase</button>
  </div>
</template>
