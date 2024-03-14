<script setup>
  import { onMounted } from "vue";
  import { useTimerStore } from './stores/timerStore'
  import Header from './components/Header.vue'
  import Home from './views/HomeView.vue'

  const store = useTimerStore();
  const data = store.dataBase;

  onMounted(() => {
    const app = document.getElementById('app');
    app.style.backgroundColor = store.backgroundColor;
  });
</script>

<template>
  <Header />
  <Home />
</template>

<style scoped></style>
