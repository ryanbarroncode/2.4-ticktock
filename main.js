(function(){
  "use strict";

  var isHovering = false;
  var clockFace = document.querySelector('.clock');var clockFace = document.querySelector('.clock');

  clockFace.addEventListener('mouseover', handleMouseover)
  clockFace.addEventListener('mouseout', handleMouseout)

  function handleMouseover(){
   isHovering = true;
  }

  function handleMouseout(){
   isHovering = false;
  }


  function showTime(){

    var clock = new Date(); //new date is a how you start getting the time
    var h = ('0' + clock.getHours()).slice(-2); //gets the hour value and slice only keeps the two numbers from the right.
    var m = ('0' + clock.getMinutes()).slice(-2); //gets the minute value / also this is where the ifis hovering grabs the time from
    var s = ('0' + clock.getSeconds()).slice(-2); //gets the second value

    var hHex = ('0' + clock.getHours().toString(16)).slice(-2);
    var mHex = ('0' + clock.getMinutes().toString(16)).slice(-2); // this is where the hexvalue gets used in the else statement.
    var sHex = ('0' + clock.getSeconds().toString(16)).slice(-2);

    var hours = document.querySelector('.clock .hours');//targets the hour in html
    var minutes = document.querySelector('.clock .minutes');//targets the minute in html
    var seconds = document.querySelector('.clock .seconds');//targets the seconds in html


    if(isHovering){
      hours.textContent = hHex; //if the mouse is hovering over the clock. show the hex value. isHovering True!!
      minutes.textContent = mHex;
      seconds.textContent = sHex;
    } else {
      hours.textContent = h; // takes the text content of 00 within the hours html and sets the hourscount to every hour minute or second.
      minutes.textContent = m;//if isHovering is false or not hovering then it will show the time.
      seconds.textContent = s;
    }




    var timeline = s / 60 * 100;// this is the code for making the timeline or the expanding bar move. at a perccentage



    document.getElementById("timeBar").style.width = timeline + "%";

    var color = '#' + hHex + mHex + sHex; // this is the hex color code.

    document.body.style.backgroundColor = color;// this goes into the html (document) > body > and chooses the css background color to be equal to the variable color.
    console.log(color);

    // updates the function, showTime every 1000ms or 1 second.

  }
  showTime();
setInterval(showTime, 20);
}());
