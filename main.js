(function(){
  "use strict";
 var hours = document.querySelector('.clock .hours');
 var minutes = document.querySelector('.clock .minutes');
 var seconds = document.querySelector('.clock .seconds');

 var clock = new Date();
 var hoursCount = clock.getHours();
 var minutesCount = clock.getMinutes();
 var secondsCount = clock.getSeconds();

 hours.textContent = hoursCount;
 minutes.textContent = minutesCount;
 seconds.textContent = secondsCount;
 






  //
}());
