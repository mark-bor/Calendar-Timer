<script setup>
  import Setting from '../components/Setting.vue';
  import Options from '../components/Options.vue';
  import Timer from '../components/Timer.vue';
</script>

<template>
  <main class="home">
    <Timer />
    <Setting />
    <Options />
  </main>
</template>

<style scoped>
  .home {
    min-height: calc(100vh - 45px);
    padding: 30px;

    display: grid;
    grid-template-rows: 60% auto;
    grid-template-columns: auto 30vw;
    grid-template-areas: 
    "timer setting"
    "options options"
    ;
    gap: 30px;
  }

  @media (max-width: 768px) {
    .home {
      grid-template-rows: 50vh auto;
      grid-template-columns: repeat(2, calc(50% - (30px / 2)));
      grid-template-areas: 
      "timer timer"
      "setting options"
      ;
    }
  }

  @media (max-width: 530px) {
    .home {
      display: flex;
      flex-direction: column;
    }
  }
</style>