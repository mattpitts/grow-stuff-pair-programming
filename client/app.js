$(document).ready(function() {
	getMaturationPackages();
});


function getMaturationPackages() {
	$.get('http://localhost:3000/info').then(createCards);
}


function createCards(data) {
	// console.log(data);
	data.forEach(function(item) {
		let name = item.name;
		let price = item.price;
		let description = item.description;
		let $newMaturationCard = $(`<div class="col s12 m3"></div>`)
			.append($(`<h5 class="center-align">${name}</h5>`))
			.append($(`<p>${price}</p>`))
			.append($(`<p class="light">${description}</p>`));
		$('#packages-container').append($newMaturationCard);
	});
}
