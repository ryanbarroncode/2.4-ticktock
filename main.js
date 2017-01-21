(function(){
  "use strict";



  function showTime(){

    var clock = new Date(); //new date is a how you start getting the time
    var h = ('0' + clock.getHours()).slice(-2); //gets the hour value
    var m = ('0' + clock.getMinutes()).slice(-2); //gets the minute value
    var s = ('0' + clock.getSeconds()).slice(-2); //gets the second value

    var hours = document.querySelector('.clock .hours');//targets the hour in html
    var minutes = document.querySelector('.clock .minutes');//targets the minute in html
    var seconds = document.querySelector('.clock .seconds');//targets the seconds in html

    hours.textContent = h; // takes the text content of 00 within the hours html and sets the hourscount to every hour minute or second.
    minutes.textContent = m;
    seconds.textContent = s;

    var timeline = s / 60 * 50;
    console.log(timeline);


    document.getElementById("timeBar").style.width = timeline + "%";

    var color = "#" +h+m+s;


document.body.style.backgroundColor=color;



    // updates the function, showTime every 1000ms or 1 second.

  }
  showTime();
setInterval(showTime, 1000);
}());
