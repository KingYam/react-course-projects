//es5 function
// don't need to set up variable, can just name it
const square = function(x){
	return x * x;
};

console.log(square(8));

//es6 arrow function
// always anonymous, only lives in the variable


// const squareArrow = (x) => {
// 	return x * x;
// };

const squareArrow = (x) => x * x;

console.log(squareArrow(9));

//-----

const getFirstNameVerbose = (fullName) => {
	return fullName.split(' ')[0];
}
console.log(getFirstNameVerbose('Will Foley'));

const getFirstName = (fullName) => fullName.split(' ')[0];
console.log(getFirstName('Will Foley'));

