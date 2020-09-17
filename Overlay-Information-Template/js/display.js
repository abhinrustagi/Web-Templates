/* Open when someone clicks on the span element */
var b = document.querySelector("body");

function openbg() {
  var x = document.getElementById("bgoverlay");
  x.style.animation = "fadeIn 1s";

  b.style.overflowY = "hidden";

  var sw = parseInt(screen.width);
  if (sw < 800) {
    x.style.width = "100%";
  }
  else {
    x.style.width = "60%";
  }
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closebg() {
  var x = document.getElementById("bgoverlay");
  x.style.animation = "fadeOut 1s";
  setTimeout(function() {x.style.width = "0%";}, 1000);
  b.style.overflowY = "scroll";
}
function opentindog() {
  var x = document.getElementById("tindog");
  x.style.animation = "fadeIn 1s";
b.style.overflowY = "hidden";
  var sw = parseInt(screen.width);
  if (sw < 800) {
    x.style.width = "100%";
  }
  else {
    x.style.width = "60%";
  }
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closetindog() {
  var x = document.getElementById("tindog");
  x.style.animation = "fadeOut 1s";
  setTimeout(function() {x.style.width = "0%";}, 1000);
  b.style.overflowY = "scroll";
}

function opendonors() {
  var x = document.getElementById("donors");
  x.style.animation = "fadeIn 1s";
  var sw = parseInt(screen.width);
b.style.overflowY = "hidden";
  if (sw < 800) {
    x.style.width = "100%";
  }
  else {
    x.style.width = "60%";
  }
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closedonors() {
  var x = document.getElementById("donors");
  x.style.animation = "fadeOut 1s";
  setTimeout(function() {x.style.width = "0%";}, 1000);
  b.style.overflowY = "scroll";
}
