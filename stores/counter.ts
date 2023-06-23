// * read more about pinia stores https://pinia.vuejs.org/
export const useCounterStore = defineStore(
  "counter",
  () => {
    const count = ref(0);

    const doubleCount = computed(() => count.value * 2);

    function increment() {
      count.value++;
    }

    function reset() {
      count.value = 0;
    }

    return { count, doubleCount, increment, reset };
  },
  { persist: true } // * persist state to cookies by default https://prazdevs.github.io/pinia-plugin-persistedstate/
);
