setInterval(clock,1000);
function clock() {
  let date = new Date();
  let  hours = date.getHours();
  let  minutes = date.getMinutes();
  let  seconds = date.getSeconds();
  if(hours < 10) {
    hours = '0'+hours;
  }
  if(seconds < 10) {
    seconds = '0'+seconds;
  }
  if(minutes < 10) {
    minutes = '0'+minutes;
  }
  document.getElementById('clock').innerText= hours+":"+minutes+":"+seconds;
  document.body.style.background = getColor(hours,minutes,seconds);
}

function getColor(h,m,s) {
  return "rgb("+ (Math.round(h/24*255)) + "," +(Math.round(m/60*255))+ ","+ (Math.round(s/60*255))+")";
}