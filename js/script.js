var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  // options
  autoPlay: 2000,
  freeScroll: true,
  pageDots: false, 
  cellAlign: 'left',
  contain: true  
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel', {
  // options
  
});

var flkty = new Flickity('.carousel');
var buttonGroup = document.querySelector('.button-group');
var buttons = buttonGroup.querySelectorAll('.button');
buttons = fizzyUIUtils.makeArray( buttons );
buttonGroup.addEventListener( 'click', function( event ) {
  // filter for button clicks
  if ( !matchesSelector( event.target, '.button' ) ) {
    return;
  }
  var index = buttons.indexOf( event.target );
  flkty.select( index );
});


