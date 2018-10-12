// Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed 
// to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
function summed(num) {
  var count = 0;
  while (num > 0) {
    count += num;
    num--;
  }
  return count;
}
console.log(summed(3));


// Create a function that takes an array of positive numbers and strings and returns a new array without the strings. In other words, remove all strings from an array of elements.

function filterArray(arr) {
  var list = [];
    arr.map(function(value) {
        if (typeof value === 'number') {
            list.push(value);
        }
    })
    return list;
}

// Christmas Eve is almost upon us, so naturally we need to prepare some milk and cookies for Santa! Create a function that accepts a Date object and returns true if it's Christmas Eve 
// (December 24th) and false otherwise. Keep in mind JavaScript's Date month is 0 based, meaning December is the 11th month while January is 0.

function timeForMilkAndCookies(date) {
	var day = date.getDate();
  var month = date.getMonth();
	if (day === 24 && month === 11) {
		return true;
	} else {
		return false;
	}
}

// Create a function that takes a number as an argument and returns true or false depending on whether the number is symmetrical or not. A number is symmetrical when it is the same as its reverse.

function isSymmetrical(num) {
	var splitArr = num.toString().split("").reverse().join("");
	if (num === Number(splitArr)) {
		return true;
	} else {
		return false;
	}
	
}

// Create a function that takes an array as an argument and returns true or false depending on whether the average of all elements in the array is a whole number or not.
function isAvgWhole(arr) {
	var summed = arr.reduce(function(a, b) {
		return a + b;
	})
	var floatOrNot = summed / arr.length;
	if (Number.isInteger(floatOrNot)) {
		return true;
	} else {
		return false;
	}
}

// Create a function that takes a string and returns a string in which each character is repeated once.
function doubleChar(str) {
	var newList = [];
	var split = str.split("");
	split.forEach(function(letter) {
		newList += letter.repeat(2);
	})
	return newList;
}

// Take an array of integers (positive or negative or both) and return the sum of the absolute value of each element.
function getAbsSum(arr) {
	newArray = [];
	eachNum = arr.forEach(function(number){
		 newArray.push(Math.abs(number));
	})
	var summed = newArray.reduce(function(a, b){ 
	  return a + b;
	})
	return summed;
}

// Create a function that takes a string and returns the number (count) of vowels contained within it.
function countVowels(str) {
	var vowels = ['a', 'e', 'i', 'o', 'u'];
	var count = 0;
	var splitS = str.split("");
	for (var i = 0; i < splitS.length; i++) {
		for (var j = 0; j < vowels.length; j++) {
			if (splitS[i] === vowels[j]) {
				count++;
			 }
		}
	}
	return count;
}
