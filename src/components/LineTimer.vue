<script setup>
  import { onMounted } from "vue";
  import { useTimerStore } from "../stores/timerStore";

  const store = useTimerStore();
  defineProps(['timerItems']);
  
  onMounted(() => {
    store.changeProgressLenght(100);
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

      <span 
        :id="item" 
        class="line"
        :style="{backgroundColor: store.blockColor}"
      >
        <span 
          class="progress-line" 
          :style="{width: store.progress[item]+'%', backgroundColor: store.color}"
        ></span>
      </span>
    </li>
  </ul>
</template>
  
<style scoped>
  .timer-list, 
  .list-item {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  .timer-list {
    width: 30vw;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
  .timer.full-screen .timer-list {
    width: 40vw;
    gap: 40px;
  }

  .list-item {
    width: 100%;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    row-gap: 2px;
  }
  
  .item-name, 
  .item-number {
    display: inline-block;
    line-height: 1.1em;
  }
  .item-name {
    font-size: 15px;
    font-weight: 400;
  }
  .item-number {
    font-size: 20px;
    font-weight: 700;
  }

  .line,
  .progress-line {
    display: block;
    border-radius: 7px;
  }
  .line {
    width: 100%;
    height: 7px;
    
    background-color: #F5F5F5;
    overflow: hidden;
  }
  .progress-line {
    width: 50%;
    height: 100%;

    transition: 1s;
    transition-timing-function: linear;
  }

  @media (max-width: 768px) {
    .timer-list {
      width: 50vw;
    }
    .timer.full-screen .timer-list {
      width: 50vw;
      gap: 30px;
    }
  }

  @media (max-width: 530px) {
    .timer-list {
      width: 60vw;
    }
    .timer.full-screen .timer-list {
      width: 60vw;
      gap: 40px;
    }
  }
</style>