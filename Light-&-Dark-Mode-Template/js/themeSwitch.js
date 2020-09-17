function themeSwitch() {
  var x = document.getElementById("theme");
  var b = document.getElementsByTagName("body")[0];
  var c = document.getElementsByClassName("card");
  if (x.className == "fas fa-moon") {
    x.className = "fas fa-sun";
    b.classList.remove("dark");
    b.classList.add("light");
    for (var i = 0; i < c.length; i++) {
      c[i].classList.remove("dark-card");
      c[i].classList.add("light-card");
    }
  }
  else {
    x.className = "fas fa-moon";
    b.classList.remove("light");
    b.classList.add("dark");
    for (var i = 0; i < c.length; i++) {
      c[i].classList.remove("light-card");
      c[i].classList.add("dark-card");
    }
  }
}
