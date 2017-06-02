$(document).ready(function() {
	getMaturationPackages();
});


function getMaturationPackages() {
	$.get('hhtp://localhost:3000/info').then(createCards);
}


function createCards(data) {
	console.log(data);
}
