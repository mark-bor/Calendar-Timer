<script setup lang="ts">
  import { ref } from "vue";
  import { useTimerStore } from "../stores/timerStore";

  const validationColor = ref('#2C3E50');
  const store = useTimerStore();

  const validate = () => {
    if (store.date === '0000-00-00') {
      validationColor.value = '#FF4524';
      return;
    }

    validationColor.value = '#2C3E50';
    store.startTimer();
  }
</script>

<template>
  <section class="setting">
    <h2 class="title">Setting</h2>
    
    <label for="date" class="date">
      <span 
        :style="{color: validationColor==='#FF4524' ? validationColor : ''}"
      >Set date *</span>
      <input 
        id="date"
        type="date"
        :style="{
          color: validationColor==='#FF4524' ? validationColor : '', 
          border: validationColor==='#FF4524' ? `2px solid ${validationColor}`: 'none'
        }"
        :value="store.date"
        @input="(store.changeDate(($event.target as HTMLInputElement).value))"
      >
    </label>
    
    <label for="time" class="time">
      <span>Set time</span>
      <input
        id="time"
        type="time"
        :value="store.time"
        @input="store.changeTime(($event.target as HTMLInputElement).value)"
      >
    </label>

    <div class="buttons">
      <button 
        class="button reset" 
        @click="store.resetSetting"
      >Reset</button>
      <button 
        class="button start" 
        @click="validate"
      >Start</button>
    </div>
  </section>
</template>
  
<style scoped>
  .setting {
    grid-area: setting;
    padding: 25px 30px;

    display: flex;
    flex-direction: column;
    gap: 20px;

    background-color: #D9D9D9;
    border-radius: 15px;
  }
  
  .title {
    height: auto;
    line-height: 1.2;
  }
  
  .date, .time {
    display: flex;
    flex-direction: column;
  }
  .date > span, 
  .time > span {
    font-size: 14px;
  }
  .date > input, 
  .time > input {
    width: 100%;
    padding: 7px 10px;

    background-color: #FFFFFF;
    border-radius: 5px;
    outline: none;
    cursor: pointer;
    
    color: #8A2BE2;
    font-size: 15px;
  }

  .buttons {
    width: 100%;
    margin-top: 10px;

    display: flex;
    justify-content: space-between;
  }
  .button {
    padding: 3px 7px;

    border-radius: 5px;
    cursor: pointer;
    transition: 200ms;
    
    color: #F5F5F5;
    font-size: 15px;
  }
  .button:hover {
    transform: scale(1.07);
  }

  .button.reset {
    border: 2px solid #8A2BE2;
    color: black;
  }
  .button.start {
    background-color: #8A2BE2;
  }

  @media (max-width: 425px) {
    .setting {
      padding: 20px;
    }
  }
</style>