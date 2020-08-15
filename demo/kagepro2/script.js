
document.addEventListener('DOMContentLoaded', function() {
  var i_dropdown = M.Dropdown.init(document.querySelector('.dropdown-trigger'));
  var i_modal = M.Modal.init(document.querySelector('.modal'));

  new simpleParallax(document.querySelector('.AyanoParallax>img'), {
    orientation: "down left"
  });

  new simpleParallax(document.querySelector('.EneParallax>img'), {
    orientation: "up right"
  });
});
