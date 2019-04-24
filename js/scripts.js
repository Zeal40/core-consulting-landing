document.addEventListener("DOMContentLoaded", function() {
  var el = document.querySelector('.learn ul li')
  var info = document.querySelector('.learn p')
  var plus = document.querySelector('.plus')
  var minus = document.querySelector('.minus')

  el.onclick = function() {
    info.classList.toggle('active');
    plus.classList.toggle('d-none');
    minus.classList.toggle('d-none');
  }
});