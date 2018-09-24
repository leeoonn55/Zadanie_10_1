'use strict';

// Initialize and add the map

(function () {
    window.initMap = function () {
        // Znaczniki na maopie
        var urll = [
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
                center: urll[1]
            });

        // pętla ustawiająca punkty na mapie
        for (var i = 0; i < urll.length; i++) {
            var markerOne = new google.maps.Marker({
                position: urll[i],
                map: map
            });

            markerOne.addListener('click', function () {
                // Wewnątrz funcji wpisujemy kod, który ma się wykonać po kliknięciu markera. W tym przykładzie wyświetlimy tekst na stronie. 
                infos.innerHTML = 'You clicked markerOne';
            });
        };
    }
})();


