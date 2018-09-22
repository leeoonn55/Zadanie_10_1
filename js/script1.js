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
	// Mustache.parse(fullProductList); // jednak ta linijka nie była potrzebna :-)

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