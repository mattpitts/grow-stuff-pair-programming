const express = require('express');
const cors = require('cors');


const app = express();

app.use(cors());

const maturationPackages = [{
	name: "Toddler to Teenager",
	price: "$5000",
	description: "Does your kid still lack conversational skills. For a small fee we can mature it to a point where you can discuss basic global issues."
}, {
	name: "Tween to High School Senior",
	price: "$8000",
	description: "Is your kid being a little shit? Skip over those awkward adolescent years and get right to the good stuff."
}, {
	name: "Kindergartner to College Grad",
	price: "$10000",
	description: "So you enjoyed having a baby, but now you just want it out of the house? This package is for you."
}, {
	name: "Newborn to Adult",
	price: "$12000",
	description: "Think you made a mistake? Not cut out for parenting? For a small fee you can skip the hard part of being a parent and go straight to having a young professional to call your own."
}];


app.get('/info', (request, response) => {
	response.json(maturationPackages);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
	console.log('Listening on port 3000!');
});
