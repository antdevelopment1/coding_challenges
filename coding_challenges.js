// Create a function that takes a number as an argument. Add up all the numbers 
// from 1 to the number you passed to the function. For example, if the input is 
// 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
function addUp(num) {
    var count = 0;
    for (var i = 0; i <= num; i++) {
        count += i;
    }
    return count;
}
console.log(addUp(4));


// Create a function that takes a string as 
// its argument and returns the string in reversed order.
function reverse(str) {
    return str.split("").reverse().join("");
}
console.log(reverse("April Copes"));

// Create a function that takes two numbers as 
// arguments and return their sum.
function add(a, b) {
    return a + b;
}
console.log(add(10, 20));

// Create a function that takes a number as an argument, 
// increments the number by +1 and returns the result.
function increment(num) {
    return num + 1;
}
console.log(increment(10));

// Create a function that takes a number as its only 
// argument and returns true if it's less than or equal 
// to zero, otherwise return false.
function none(num) {
  if (num === 10) {
      return true;
  }
  else {
      return false;
  }
}
console.log(none(0));

// Create a function that accepts an array and returns 
// the last item in the array.
function last(num) {
    return num.pop();
}
console.log(last([1, 2, 3, 4, 'one']));

var person = [];
person.name = "Mrs. White";
var who = person.name;
console.log(who);

// Create a function that takes a number as an argument and returns "even" 
// for even numbers and "odd" for odd numbers.
function isEvenOrOdd(num) {
	if (num % 2 == 0) {
		return 'even';
	} else {
		return 'odd';
	}
}

// Create a function that takes a number as an argument and returns the amount of digits it has.

function findDigitAmount(num) {
    var string = num.toString();
    var list = [];
    for (var i = 0; i < string.length; i++) {
      list.push(string[i]);  
    }
    return list.length;
}

// Create a function that takes a base number and an exponent number and returns the calculation.
function calculateExponent(num, exp) {
	return Math.pow(num, exp);
}

// Create a function that takes an array and a string as arguments and return the index of the string.
function find_index(arr, str) {
	return arr.indexOf(str);
}

// Create a function that takes a number (from 1 to 12) and return its corresponding month name as a string.

function month_name(num) {
	var year = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	return year[num - 1];
}

// Create a function that takes a string and returns the word count. The string will be a sentence
function countWords(str) {
	return str.split(" ").length;
}

// Create a function that takes a number (from 1 - 60) and returns a corresponding string of hyphens.
function Go(num) {
	return "-".repeat(num);
}

// Create a function that reverses a boolean value and returns the string "boolean expected" 
// if another variable type is given.
function reverse(bool) {
	if (bool === true) {
		return false;
	} else if (bool === false) {
		return true;
	} else {
		return "boolean expected";
	}
}

// Create a function that takes an array of numbers. Return the largest number in the array.
function findLargestNum(arr) {
	var sorted = arr.sort(function(a, b) {
		return b - a;
	})
	return sorted[0];
}

// Create a function that takes an array of numbers and returns the smallest number in the set.
function findSmallestNum(arr) {
	min = arr.sort(function(a, b) {
		return a - b;
	})
	return min[0];
}

// Create a function that accepts a string (of a persons first and last name) and returns a string with the first and last name swapped.
function nameShuffle(str) {
	return str.split(" ").reverse().join(" ");
}

// Create a function to multiply all values in an array by the amount of values in that array.
function MultiplyByLength(arr) {
	for (var i = 0; i < arr.length; i++) {
		arr[i] = arr[i] * arr.length;
	}
	return arr;
}

// Create a function that takes a string as its argument and returns the string in reversed order.
function reverse(str) {
	var newStr = '';
	for (var i = str.length - 1; i >= 0; --i) {
	  newStr += str[i];
	}
	return newStr;
}
// Create a function that takes two strings and returns true if the first argument ends with the second argument; otherewise return false .
function checkEnding(str1, str2) {
	if (str1.endsWith(str2)) {
		return true;
	} else {
		return false;
	}
}

// Create a function that takes an array as an argument and returns true or false depending 
// on whether the average of all elements in the array is a whole number or not.

function isAvgWhole(arr) {
	sum = arr.reduce(function(a, b) {
		return a + b;
	})
	average = sum / arr.length;
	if (Number.isInteger(average)) {
		return true;
	} else {
		return false;
	}	
}

