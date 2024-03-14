<script setup lang="ts">
  import { useTimerStore } from "../stores/timerStore";

  const store = useTimerStore();
  const types: string[] = ['line', 'circle'];
</script>

<template>
  <section class="options">
    <h2 class="title">Options</h2>

    <section class="option-section">
      <h3 class="section-title">Type:</h3>

      <div class="style-switch">
        <div v-for="item in types" class="switch-item">
          <input 
            :id="item" 
            name="style" 
            type="radio" 
            :value="item" 
            @input="store.changeType(($event.target as HTMLInputElement).value)" 
            :checked="item===store.type"
          >
          <label :id="item+'-label'" :for="item">
            <span :class="item"></span>
          </label>
        </div>
      </div>
    </section>

    <section class="option-section">
      <section>
        <h3 class="section-title">Main color:</h3>
  
        <label class="select-color" for="color">
          <input 
            id="color" 
            type="color" 
            :value="store.color" 
            @input="store.changeColor(($event.target as HTMLInputElement).value)"
          >
        </label>
      </section>

      <section>
        <h3 class="section-title">Text color:</h3>
  
        <label class="select-color" for="color">
          <input 
            id="color" 
            type="color" 
            :value="store.textColor" 
            @input="store.changeTextColor(($event.target as HTMLInputElement).value)"
          >
        </label>
      </section>
    </section>

    <section class="option-section">
      <section>
        <h3 class="section-title">Background color:</h3>
    
        <label class="select-color" for="bg-color">
          <input 
            id="bg-color" 
            type="color" 
            :value="store.backgroundColor" 
            @input="store.changeBackgroundColor(($event.target as HTMLInputElement).value)"
          >
        </label>
      </section>
      
      <section>
        <h3 class="section-title">Underline color:</h3>
    
        <label class="select-color" for="b-color">
          <input 
            id="b-color" 
            type="color" 
            :value="store.blockColor" 
            @input="store.changeBlockColor(($event.target as HTMLInputElement).value)"
          >
        </label>
      </section>
    </section>

    <button
      class="reset-button"
      @click="store.resetOptions"
    >Reset</button>
  </section>
</template>
  
<style scoped>
  .options {
    grid-area: options;
    padding: 20px 30px;

    display: flex;
    flex-wrap: wrap;
    row-gap: 15px;
    column-gap: 40px;

    background-color: #D9D9D9;
    border-radius: 15px;
  }
  
  .title {
    width: 100%;
    height: auto;
    line-height: 1.2em;
  }

  .option-section {
    display: flex;
    flex-direction: column;
    row-gap: 5px;
  }

  .section-title {
    font-size: 14px;
    line-height: 1.2em;
  }

  .style-switch {
    width: auto;
    padding: 7px;

    display: inline-flex;
    gap: 7px;
    
    background-color: #FFFFFF;
    border-radius: 10px;
  }
  .switch-item {
    width: 50px;
    height: 50px;
  }
  .switch-item > input {
    display: none;
  }
  .switch-item > label {
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #F5F5F5;
    border-radius: 7px;
    transition: 50ms;
    cursor: pointer;
  }
  .switch-item > label:hover,
  .switch-item > input:checked + label {
    border: 2px solid #8A2BE2;
  }

  .line, .circle {
    display: block;
  }
  .line {
    width: 32px;
    height: 4px;

    background-color: #8A2BE2;
    border-radius: 3px;
  }
  .circle {
    width: 32px;
    height: 32px;

    border: 4px solid #8A2BE2;
    border-radius: 50%;
  }

  .select-color > input {
    width: 120px;
    height: 20px;
    padding: 0px 2px;

    border: none;
    background-color: #FFFFFF;
    border-radius: 3px;
  }

  .option-section > section > .section-title {
    line-height: 1.2em;
  }
  
  .reset-button {
    margin: auto 0;
    padding: 3px 7px;

    background-color: #8A2BE2;
    border-radius: 5px;
    cursor: pointer;
    transition: 200ms;

    color: #F5F5F5;
    font-size: 15px;
  }

  @media (max-width: 425px) {
    .options {
      padding: 20px;
      column-gap: 20px;
      row-gap: 20px;
    }
  }
</style>