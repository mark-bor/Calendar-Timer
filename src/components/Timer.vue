<script setup>
  import { ref } from "vue";
  import { useTimerStore } from "../stores/timerStore";
  import LineTimer from "./LineTimer.vue";
  import CircleTimer from "./CircleTimer.vue";
  import maximize from "../assets/maximize.svg";
  import minimize from "../assets/minimize.svg";

  const isFullScreen = ref(false);
  const store = useTimerStore();
  const timerItems = ['years', 'months', 'days', 'hours', 'minutes', 'seconds'];

  const toggleFullScreen = () => {
    isFullScreen.value = !isFullScreen.value;
  }
</script>

<template>
  <section 
    :class="{'timer': true, 'full-screen': isFullScreen}"
    :style="isFullScreen ? {backgroundColor: store.backgroundColor} : {}"
  >
    <LineTimer v-if="store.type==='line'" :timerItems="timerItems" />
    <CircleTimer v-if="store.type==='circle'" :timerItems="timerItems" />
    
    <button
      class="increse-decrese"
      @click="toggleFullScreen()"
      name="full screen"
    >
      <img 
        class="increse-decrese-image"
        :src="isFullScreen ? minimize : maximize" 
        alt="maximize and minimize"
        width="20" 
        height="20" 
      />
    </button>
  </section>
</template>
  
<style scoped>
  .timer {
    grid-area: timer;
    position: relative;
    z-index: 5;
    
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .timer.full-screen {
    width: 100%;
    height: 100%;
    
    position: fixed;
    top: 0;
    left: 0;

    background-color: #FFFFFF;
  }

  .increse-decrese {
    padding: 3px;
    
    position: absolute;
    right: 0;
    bottom: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #D9D9D9;
    border-radius: 5px;
    cursor: pointer;
  }
  .timer.full-screen > .increse-decrese {
    right: 7px;
    bottom: 7px;
  }
</style>