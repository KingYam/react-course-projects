//arguments object no longer bound with arrow functions
const add = (a,b) => {
	// console.log(arguments);
	return a + b;
};
console.log(add(55, 1, 1001));


//"this" keyword no longer bound
const user = {
	name: 'Will',
	cities: ['Philadelphia','Ferrell', 'Blackwood'],
	printPlacesLived() {
		return this.cities.map((city) => this.name + ' has lived in ' + city)
	}
};

console.log(user.printPlacesLived());

// Challenge Area
const multiplier = {
	// numbers - array of numbers
	numbers: [1, 13, 69],
	// mulitplyBy - single number
	mulitplyBy: 2,
	// multiply - return a new array where the numbers have been multiplied
	multiply() {
		return this.numbers.map((number) => number * this.mulitplyBy);
	}
}

console.log(multiplier.multiply());