var progress = document.getElementById('progressbar');
var totalWidth = document.body.scrollHeight - window.innerHeight;
window.onscroll = function() {
  let progressWidth = (window.pageYOffset / totalWidth) * 100;
  progress.style.width = progressWidth + "%";
}

function showBG() {
  var x = document.getElementById('bg');
  if (x.style.display === "block") {
    x.style.animation = "fade-out 0.3s";
    setTimeout(function() {
      x.style.display = "none";
    }, 300);
  } else {
    x.style.display = "block";
    x.style.animation = "fade-in 0.3s";
  }
}

function showSkills() {
  var x = document.getElementById('skills');
  if (x.style.display === "block") {
    x.style.animation = "fade-out 0.3s";
    setTimeout(function() {
      x.style.display = "none";
    }, 300);
  } else {
    x.style.display = "block";
    x.style.animation = "fade-in 0.3s";
  }
}

ScrollReveal().reveal('.top', {delay: 500});
ScrollReveal().reveal('.about', {delay: 500});
ScrollReveal().reveal('.personal-background', {delay: 500});
ScrollReveal().reveal('.projects', {delay: 500});
ScrollReveal().reveal('.square', {delay: 500});
ScrollReveal().reveal('.non-top-hr', {delay: 500});
ScrollReveal().reveal('hr', {delay: 500});
ScrollReveal().reveal('footer', {delay: 500});
