
/*
Таймер обратного отсчета
*/
if($('*').is('.form-time-1')){
  var _time = $('.form-time-1:first').data('time')*1000 
  initializeClock('.form-time-1',_time);
}
function initializeClock(atr, endtime){
  var clock = document.querySelectorAll(atr);
  var ti = setInterval(function(){
  var t = getTimeRemaining(endtime);
  for (var i = 0; i < clock.length; i++) {
   (t.day!=0)? clock[i].innerHTML = t.days +' дней ' + t.hours+':' + t.minutes + ':' + t.seconds+ ' секунд.':clock[i].innerHTML = t.hours+':' + t.minutes + ':' + t.seconds+ ' секунд.';
   if(t.total<=0){
    clearInterval(ti);
    clock[i].innerHTML="Время закончилось!"
    }
  }
  },1000);
}
function getTimeRemaining(endtime){
  //var t = Date.parse(endtime) - Date.parse(new Date());
  var t = endtime - Date.parse(new Date());
  var seconds = Math.floor( (t/1000) % 60 );
  var minutes = Math.floor( (t/60000) % 60 );
  var hours = Math.floor( (t/3600000) % 24 );
  var days = Math.floor( t/86400000 );
  //console.log(t);
  return {
   'total': t,
   'days': days,
   'hours': hours,
   'minutes': minutes,
   'seconds': seconds
  };
}
