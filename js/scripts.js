var h = document.querySelector("header");
var stuck = false;
var stickPoint = getDistance();

function getDistance() {
  var topDist = h.offsetTop;
  return topDist;
}

window.onscroll = function(e) {
  var distance = getDistance() - window.pageYOffset;
  var offset = window.pageYOffset;

  if ( (distance <= 0) && !stuck) {
    h.style.position = 'fixed';
    h.style.top = '0px';
    h.style.width = '100%';
    stuck = true;
  } else if (stuck && (offset <= stickPoint)){
    h.style.position = 'static';
    stuck = false;
  }
}

document.addEventListener("DOMContentLoaded", function() {
  var el = document.querySelector('.learn ul li')
  var info = document.querySelector('.learn p')
  var plus = document.querySelector('.plus')
  var minus = document.querySelector('.minus')
  var btn = document.querySelector('.mobile-toggle')
  var nav = document.querySelector('nav')

  el.onclick = function() {
    info.classList.toggle('active');
    plus.classList.toggle('d-none');
    minus.classList.toggle('d-none');
  }

  btn.onclick = function() {
    nav.classList.toggle('active')
    btn.classList.toggle('active')
  }
});