(function(){
'use strict';

var clock = document.getElementById('clock');
var hexColor = document.getElementById('hex-color');
var isHovering = false;

function colorClock() {
  var time = new Date();

  var hours = ('0' + (time.getHours()%12)).slice(-2);
  var minutes = ('0' + time.getMinutes()).slice(-2);
  var seconds = ('0' + time.getSeconds()).slice(-2);

  var hexRed = ('0' + time.getHours().toString(16)).slice(-2);
  var hexGreen = ('0' + time.getMinutes().toString(16)).slice(-2);
  var hexBlue = ('0' + time.getSeconds().toString(16)).slice(-2);

  var timeCode = hours + ':' + minutes + ':' + seconds;
  var hexCode = hexRed + hexGreen + hexBlue;

  // updating clock display
  if (isHovering) {
    clock.textContent = hexCode;
  } else {
    clock.textContent = timeCode;
  }

  // updating progress bar
  var timeLine = seconds / 60 * 100;
  document.getElementById('bar').style.width = timeLine + "%";

  // updating background color
  // hexCode.split("") => "1" "2" "3"
  var reverseHex = hexCode.split("").reverse().join("");
  document.body.style.backgroundImage = "radial-gradient(ellipse farthest-corner , #" + reverseHex + " 0%, #" + hexCode + " 95%)"
}

  clock.addEventListener('mouseover', handleMouseOver);
  clock.addEventListener('mouseout', handleMouseOut);

  function handleMouseOver(){
    isHovering = true;
  }

  function handleMouseOut(){
    isHovering = false;
  }

  window.setInterval(colorClock, 100)

}());
