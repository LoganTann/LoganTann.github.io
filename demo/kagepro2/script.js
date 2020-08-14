
document.addEventListener('DOMContentLoaded', function() {
  var elem = document.querySelector('.dropdown-trigger');
  var instances = M.Dropdown.init(elem);

  new simpleParallax(document.querySelector('.AyanoParallax>img'), {
    orientation: "down left"
  });

  new simpleParallax(document.querySelector('.EneParallax>img'), {
    orientation: "up right"
  });
});
