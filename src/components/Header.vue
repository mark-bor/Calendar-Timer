<script setup>
  import { useTimerStore } from "../stores/timerStore";

  const store = useTimerStore();
</script>

<template>
  <header class="header">
    <a
      class="link" 
      :style="{color: store.textColor}"
      href="https://the-kitsune-diary.vercel.app/"
      name="ovner's vebsite"
    >The Kitsune Diary</a>

    <p 
      class="title"
      :style="{color: store.color}"
    >Event Timer</p>
  </header>
</template>

<style scoped>
  .header {
    position: relative;
    width: 100%;
    height: 45px;
    padding: 0 30px;

    display: flex;
    align-items: center;

    line-height: 1.5;
  }
  
  .link {
    position: absolute;
    color: #2C3E50;
    font-size: 17px;
    font-weight: 600;
  }
  .link:hover {
    text-decoration-color: inherit;
    text-decoration-style: solid;
    text-decoration-line: underline;
  }

  .title {
    display: inline-block;
    width: 100%;

    text-align: center;
    font-size: 24px;
    font-weight: 600;
  }

  @media (min-width: 1024px) {
    .link {
      font-size: 19px;
    }

    .title {
      font-size: 28px;
    }
  }

  @media (max-width: 425px) {
    .header {
      height: auto;
      padding: 5px 30px;

      flex-wrap: wrap;
      row-gap: 5px;
    }

    .link {
      position: relative;
      font-size: 18px;
    }

    .title {
      font-size: 28px;
    }
  }
</style>