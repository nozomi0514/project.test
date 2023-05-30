const daysEl=document.getElementById('days')
const hoursEl=document.getElementById('hours')
const minsEl=document.getElementById('mins')
const secondsEl=document.getElementById('seconds')

const newYear="1 jan 2023";
function countdown(){
  const newYearDate=new Date(newYear);
  const currentDate=new Date();
  const second=(newYearDate-currentDate)/1000;
  const days=Math.floor(second/3600/24);
  const hours=Math.floor(second/3600)%24;
  const mins=Math.floor((second/3600)/24)%60;
  const secs=Math.floor(second%24);
  console.log(second)

  daysEl.innerHTML=formatTime(days);
  hoursEl.innerHTML=formatTime(hours);
  minsEl.innerHTML=formatTime(mins);
  secondsEl.innerHTML=formatTime(secs);
 }
 function formatTime(time){
   return (time<10)?`0${time}`:time;
 }
 countdown()
 setInterval(countdown,1000);