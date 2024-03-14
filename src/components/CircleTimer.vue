<script setup>
  import { onMounted } from "vue";
  import { useTimerStore } from "../stores/timerStore";

  const store = useTimerStore();
  defineProps(['timerItems']);
  
  onMounted(() => {
    store.changeProgressLenght(385);
  });
</script>

<template>
  <ul class="timer-list">
    <li class="list-item" v-for="item in timerItems">
      <p 
        class="item-name"
        :style="{color: store.textColor}"
      >{{ item }}:</p>
      <p 
        class="item-number"
        :style="{color: store.color}"
      >{{ store.timer[item] }}</p>

      <svg 
        class="svg"
        :style="{boxShadow: `inset 0 0 0px 7px ${store.blockColor}`}"
      >
        <circle 
          class="circle" 
          :style="{stroke: store.color, strokeDashoffset: 385 - store.progress[item]}" 
          cx="65" 
          cy="65" 
          r="61.5" 
        />
      </svg>
    </li>
  </ul>
</template>
  
<style scoped>
  .timer-list {
    display: grid;
    grid-template-rows: 130px 130px;
    grid-template-columns: 130px 130px 130px;
    gap: 20px;
  }
  .timer.full-screen .timer-list {
    display: flex;
    justify-content: center;
    align-self: center;
    gap: 20px;
  }

  .timer-list, 
  .list-item {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  .list-item {
    position: relative;
    width: 130px;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .item-name {
    font-size: 17px;
    font-weight: 400;
    line-height: 1.2em;
  }
  .item-number {
    font-size: 23px;
    font-weight: 700;
    line-height: 1.2em;
  }

  .svg {
    position: absolute;
    width: 130px;
    height: 130px;
    padding: 0;

    border-radius: 50%;
    box-shadow: inset 0 0 0px 7px #D9D9D9;    
  }
  .circle {
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    
    transform: rotate(-90deg);
    transform-origin: 50% 50%;
    transition: 1s;
    transition-timing-function: linear;

    stroke-width: 7px;
    stroke-linecap: round;
    stroke-dasharray: 385;
    fill: transparent;
  }

  @media (max-width: 1024px) {
    .timer.full-screen .timer-list {
      display: grid;
      grid-template-rows: 130px 130px;
      grid-template-columns: 130px 130px 130px;
      gap: 50px;
    }
  }

  @media (max-width: 530px) {
    .timer-list {
      grid-template-rows: 130px 130px 130px;
      grid-template-columns: 130px 130px;
    }
    .timer.full-screen .timer-list {
      grid-template-rows: 130px 130px 130px;
      grid-template-columns: 130px 130px;
      gap: 30px;
    }
  }
</style>