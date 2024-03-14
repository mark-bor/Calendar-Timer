import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

type TimerObjectData = {
  "years": number,
  "months": number,
  "days": number,
  "hours": number,
  "minutes": number,
  "seconds": number,
}

let eventTimer: any;

export const useTimerStore = defineStore('timerStore', () => {
  const date = ref<string>("0000-00-00");
  const time = ref<string>("00:00");
  const type = ref<string>("circle");

  const color = ref<string>("#8A2BE2");
  const textColor = ref<string>("#2C3E50");
  const backgroundColor = ref<string>("#FFFFFF");
  const blockColor = ref<string>("#D9D9D9");

  const progressLenght = ref<number>(0);
  const timer = ref<TimerObjectData>({
    "years": 0,
    "months": 0,
    "days": 0,
    "hours": 0,
    "minutes": 0,
    "seconds": 0,
  });
  const progress = ref<TimerObjectData>({
    "years": 50,
    "months": 50,
    "days": 50,
    "hours": 50,
    "minutes": 50,
    "seconds": 50,
  });
  
  function setSettingInLocalDB() {
    const dataToSet = {
      date: date.value,
      time: time.value,
      type: type.value,
    }
    localStorage.setItem('setting', JSON.stringify(dataToSet));
  }
  function setOptionsInLocalDB() {
    const dataToSet = {
      color: color.value,
      textColor: textColor.value,
      backgroundColor: backgroundColor.value,
      blockColor: blockColor.value,
    }
    localStorage.setItem('options', JSON.stringify(dataToSet));
  }

  const dataBase = computed(() => {
    const setting = localStorage.getItem('setting');
    const options = localStorage.getItem('options');
    
    if (setting) {
      const parsedData = JSON.parse(setting);
      date.value = parsedData.date;
      time.value = parsedData.time;
      type.value = parsedData.type;
    } 
    else setSettingInLocalDB();
    
    if (options) {
      const parsedData = JSON.parse(options);
      color.value = parsedData.color;
      textColor.value = parsedData.textColor;
      backgroundColor.value = parsedData.backgroundColor;
      blockColor.value = parsedData.blockColor;
    } 
    else setOptionsInLocalDB();

    return 'done';
  })

  function changeDate(param: string) {
    date.value = param;
    setSettingInLocalDB()
  }
  function changeTime(param: string) {
    time.value = param;
    setSettingInLocalDB();
  }
  function changeType(param: string) {
    type.value = param;
    setSettingInLocalDB();
  }
  
  function changeColor(param: string) {
    color.value = param;
    setOptionsInLocalDB();
  }
  function changeTextColor(param: string) {
    textColor.value = param;
    setOptionsInLocalDB();
  }
  function changeBackgroundColor(param: string) {
    backgroundColor.value = param;
    const app: any = document.getElementById('app');
    app.style.backgroundColor = param;
    setOptionsInLocalDB();
  }
  function changeBlockColor(param: string) {
    blockColor.value = param;
    setOptionsInLocalDB();
  }

  function changeProgressLenght(param: number) {
    progressLenght.value = param;
  }

  function resetSetting() {
    clearInterval(eventTimer);

    date.value = "0000-00-00";
    time.value = "00:00";
    timer.value = {
      years: 0,
      months: 0,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
    progress.value = {
      years: 50,
      months: 50,
      days: 50,
      hours: 50,
      minutes: 50,
      seconds: 50
    }

    setSettingInLocalDB();
  }
  
  function resetOptions() {
    color.value = "#8A2BE2";
    textColor.value = "#2C3E50";
    backgroundColor.value = "#FFFFFF";
    blockColor.value = "#D9D9D9";
    
    const app: any = document.getElementById('app');
    app.style.backgroundColor = "#FFFFFF";

    setOptionsInLocalDB();
  }

  async function startTimer() {
    clearInterval(eventTimer);

    eventTimer = setInterval(() => {
      const event = new Date(`${date.value}T${time.value}`).getTime();
      const now = new Date().getTime();
      const distance = event - now;
      const valuePL = progressLenght.value;
      
      const timeI = {
        years: Math.floor(distance / 1000 / 60 / 60 / 24 / 31 / 12),
        months: Math.floor(distance / 1000 / 60 / 60 / 24 / 31) % 12,
        days: Math.floor(distance / 1000 / 60 / 60 / 24) % 31,
        hours: Math.floor(distance / 1000 / 60 / 60) % 24,
        minutes: Math.floor(distance / 1000 / 60) % 60,
        seconds: Math.floor(distance / 1000) % 60,
      };
      
      const progressI = {
        years: (valuePL * timeI.years) / timeI.years || 0,
        months: (valuePL * timeI.months) / 12,
        days: (valuePL * timeI.days) / 31,
        hours: (valuePL * timeI.hours) / 24,
        minutes: (valuePL * timeI.minutes) / 60,
        seconds: (valuePL * timeI.seconds) / 60
      }

      timer.value = {...timeI};
      progress.value = {...progressI};          
    }, 1000)
  }

  return {
    date, time, type, 
    color, textColor, backgroundColor, blockColor, 
    progressLenght, timer, progress,
    dataBase,
    changeDate, changeTime, changeType, 
    changeColor, changeTextColor, changeBackgroundColor, changeBlockColor, 
    changeProgressLenght,
    resetSetting, resetOptions, startTimer
  }
})
