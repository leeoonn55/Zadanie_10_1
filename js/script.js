
var elem = document.querySelector('.main-carousel');

var flkty = new Flickity(elem, {
  // options  
  autoPlay: 2000,
  freeScroll: true,
  pageDots: false,
  cellAlign: 'left',
  contain: true,
  hash: true,
});
var buttonGroup = document.querySelector('.button-group');
var buttons = buttonGroup.querySelectorAll('.button');
buttons = fizzyUIUtils.makeArray(buttons);
buttonGroup.addEventListener('click', function (event) {
  // filter for button clicks
  if (!matchesSelector(event.target, '.button')) {
    return;
  }
  var index = buttons.indexOf(event.target);
  flkty.select(index);
});




