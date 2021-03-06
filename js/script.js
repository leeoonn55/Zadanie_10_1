'use strict';

(function () {

	/* W kodzie HTML tego przykładu  dodaliśmy też dwa szablony: 
	- template-product-list, który jest wrapperem caruzeli , oraz
	- template-product-item, który jest szablonem pojedynczej lini okrteślającej pojedynczy slajd. 	
	Oprócz tego dodaliśmy też tablicę, zapisaną w zmiennej productsData, zawierającą adres do obrazka. 	
	Szablony:
	*/
  var templateList = document.getElementById('template-product-list').innerHTML;
  var templateItem = document.getElementById('template-product-item').innerHTML;

  // Następnie zoptymalizujemy drugą z nich, ponieważ tylko ona będzie wykonywana wielokrotnie. 	
  Mustache.parse(templateItem);
  Mustache.parse(fullProductList); // jednak ta linijka nie była potrzebna :-)

  // kod HTML wszystkich slajdów. 	
  var listItems = '';

  // Czas napisać pętlę, która dla każdego elementu z listy	wygeneruje kod HTML 	
  for (var i = 0; i < productsData.length; i++) {
    console.log(productsData);
    listItems += Mustache.render(templateItem, productsData[i]);
  }
  var fullProductList = Mustache.render(templateList, { products: listItems });
  results.insertAdjacentHTML('beforeend', fullProductList);

})();


// mapy ****************************************************************************

// Initialize and add the map

(function () {
  window.initMap = function () {
    // Znaczniki na maopie
    var marker = [
      { lat: 50.1974535, lng: 18.9826401 },
      { lat: 50.2015379, lng: 18.9910042 },
      { lat: 50.1934108, lng: 18.987402 },
      { lat: 50.2443231, lng: 18.996667 },
      { lat: 50.172091, lng: 18.9022362 }
    ];

    // Ustawienie punktu centralnego
    var map = new google.maps.Map(
      document.getElementById('map'), {
        zoom: 12,
        center: marker[1]
      });

    // pętla ustawiająca punkty na mapie
    for (var i = 0; i < marker.length; i++) {
      var markerOne = new google.maps.Marker({
        position: marker[i],
        map: map
      });

      
      google.maps.event.addListener(marker, 'click', (function (marker, i) { 
      	return function () {
          console.log(marker, i);
          flkty.select(i);
      	}
      })(marker, i));

    };
  }
})();

// Carusel *****************************************************************
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




