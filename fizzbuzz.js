exports.count = function(start, end){
	// initial size the output variable
	var output = start;

	//modify output to contain the desired sequence
	for(var counter = start; counter <= end; counter += 1) {
		//stuff here gets repeated
		output = output + " " + (counter + 1);

	//adding in the "FizzBuzz" statement
		if (i % 15 == 0){
        console.log("FizzBuzz");
    		else if (i % 3 == 0)
        		console.log("Fizz");
    		else if (i % 5 == 0)
        		console.log("Buzz");
   				 else
        			console.log(i);

	});
	//return the output
	return output;

});

//test for fizzbuzz
exports.fizzer = function(num) {
	return 0 === num % 3 ? "fizz" : num;
};

//test for buzz
exports.buzzer = function(num) {
	return 0 === num % 5 ? "buzz" : num;

};
// all return lines do the same thing, just written differently 
exports.fizzbuzzer = function(num) {
	return (0=== num % 3) && (0 === num % 5) ? "fizzbuzz" : num;
	return 0 === (num % 3 + num % 5) ? "fizzbuzz" : num;
	return 0 === num % 15 ? "fizzbuzz" : num;
}

var count, fizzer, buzzer, fizzbuzzer;
module.exports = {
	count: count,
	fizzer: fizzer,
	buzzer: buzzer,
	fizzbuzzer: fizzbuzzer,
};

//what professor benton has
// Test specification for the fizzbuzz program
var fb = require('../fizzbuzz'):
describe("A program that implements fizzbuzz", function() { //anonymous function

	it("can count from 1 to 5", function() {
		expect(fb.count(1,5)).tobe("1 2 3 4 5");
	});
	
	it("can take a number return 'fizz' if it's a multiple of 3",
		expect(fb.fizzer(3)).tobe('fizz');
		expect(fb.fizzer(3)).tobe(5);

	it("can take a number return 'buzz' if it's a multiple of 5",
		expect(fb.fizzer(5)).tobe('buzz');

	it("can take a number return 'fizzbuzz' if it's a multiple of 3 and 5 or 15",
		expect(fb.fizzer(15)).tobe('fizzbuzz');
}):