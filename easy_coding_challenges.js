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
