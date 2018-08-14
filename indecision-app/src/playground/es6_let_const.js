var nameVar = 'Andrew';
var nameVar = 'Mike';

console.log('nameVar', nameVar);

//let - can reassign; can't redeclare
let nameLet = 'Jenn';
nameLet = 'Julie';

console.log('nameLet', nameLet);

//const - can't reassign const; can't redeclare
const nameConst = 'Frank';

console.log('nameConst', nameConst);

//var + let + const are scope to the function, get be accessed outside the function
// function getPetName(){
// 	let petName = "Hal";
// 	return petName;
// }

// getPetName();
// console.log(petName);


//let + const are block-level scoped
var fullName = 'Andrew Mead';
let firstName;

//block
if (fullName) {
	firstName = fullName.split(' ')[0];
	console.log(firstName);

}
//var will print here, const no let no
console.log(firstName);



//variable assignment order of operations:
//1. const (value doesn't change)
//2. let (value can be changed)
//never. var