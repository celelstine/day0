/**
 * A function to implement fizzbuzz
 * @Author okorocelstine@gmail.com (Okoro Celestine)
 */
'use strict'


var fizzBuzz = function(num) {
	if (typeof(num) === 'number') {
		if((num%3 ==0 )&& (num%5 ==0)) {
		return 'FizzBuzz';
		} else if(num%3==0) {
			return 'Fizz';
		} else if(num%5==0) {
			return 'Buzz';
		} else 	{
					return num
		}
	}
	 else {
		return "expecting a number";
	}

}

module.exports = fizzBuzz;

