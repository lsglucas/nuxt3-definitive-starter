<script setup lang="ts">
useHead({
  title: "Nuxt 3 Definitive Starter | Pinia",
});

const counter = useCounterStore();

const count1 = () => {
  counter.count++;
};

const count2 = () => {
  counter.$patch({ count: counter.count + 1 });
};

const countReset = () => {
  counter.reset();
};
</script>

<template>
  <div>
    <div>Current Count: {{ counter.count }}</div>
    <div>Double Count: {{ counter.doubleCount }}</div>

    <div>
      <Butt @click="count1">Counter +1</Butt>
      <button @click="count2">Counter +2</button>
    </div>

    <button @click="countReset">Counter Reset</button>
  </div>
</template>
