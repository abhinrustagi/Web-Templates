var i = 2;

function changeColor (i) {
  switch (i) {
    case i%1 == 0:
      document.getElementById("activityDesigning").style.color = "#F3A712";
      break;
    case i%2 == 0:
      document.getElementById("activityExploring").style.color = "#F3A712";
      break;
    case i%3 == 0:
      document.getElementById("activityCricket").style.color = "#F3A712";
      break;
    case i%4 == 0:
      document.getElementById("activityProgramming").style.color = "#F3A712";
      break;
    case i%5 == 0:
      document.getElementById("activityLearning").style.color = "#F3A712";
      document.getElementById("activityProgramming").style.color = "#888888";
      document.getElementById("activityExploring").style.color = "#888888";
      document.getElementById("activityCricket").style.color = "#888888";
      document.getElementById("activityDesigning").style.color = "#888888";
      break;
    default:
  }

}

while (True){
  setTimeout(changeColor(i), 3000);
 i += 1;
}
