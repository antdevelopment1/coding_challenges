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

// Given a number n, write a function that returns PI to n decimal places.
function myPi(n) {
	return Number(Math.PI.toFixed(n));
}

// Create a function that takes a string and returns a new string with all vowels removed.
function silenceTrump(str) {
	return str.replace(/[aiueo]/gi, "");
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

// Write a function that takes four string arguments. You will be comparing the first string to the three next strings. Verify if the first string starts with the second string, 
// includes the third string, and ends with the fourth string. If the first string passes all checks, return the string "My head, body, and tail.", otherwise, return "Incomplete.".
function verifySubstrs(mainStr, head, body, tail) {
	if (mainStr.startsWith(head) && mainStr.includes(body) && mainStr.endsWith(tail)) {
		return "My head, body, and tail.";
	} else {
		return "Incomplete.";
	}
}

// Create a function that takes an array of numbers and returns a new array, sorted in ascending order (smallest to biggest).
// Sort numbers array in ascending order. If functions argument is null, an empty array or undefined, return an empty array. Return new array of sorted numbers.
function sortNumsAscending(arr) {
	if (arr === null || arr === [] || arr === undefined) {
		return [];
	} else {
		var sorted = arr.sort(function(a, b) {
			return a - b;
		})
	}
	return sorted;
}

// Create a function that takes an array of arrays with numbers. Return a new (single) array with the largest numbers of each.
function findLargestNums(arr) {
	var emptyArr = [];
	for (var i = 0; i < arr.length; i++) {
		var maxVal = arr[i].sort(function(a, b){
		return b - a;
		});
		emptyArr.push(maxVal[0]);
		}
	return emptyArr;
}

// You need to detect what browser is being used. Create a function that takes a string (browser identifier) and returns the browser name.
function detectBrowser(userAgent){
	if (userAgent.includes('Firefox')) {
		return "Mozilla Firefox";
	} else if (userAgent.includes('Chrome')){
		return "Google Chrome";
	} else {
		return "Internet Explorer";
	}
}

// Create a function that takes an array of numbers and returns the following statistics:
// Minimum Value, Maximum Value, Sequence Length, Average Value
function minMaxLengthAverage(arr) {
	var minNumSort = arr.sort(function(a,b) {return a - b;})
	var minNum = minNumSort[0];
	var maxNumSort = arr.sort(function(a,b) {return b - a;})
	var maxNum = maxNumSort[0];
	var sequence = arr.length;
	var sum = arr.reduce(function(a,b) {return a + b;})
	var average = sum / sequence;
	return [minNum, maxNum,sequence, average];
}

// Create a function that takes an array of strings and return an array, sorted from shortest to longest.
function sortByLength(arr) {
	let inOrder = arr.sort(function(a, b) {
		return a.length - b.length;
	})
	return inOrder
}

// Create a function that accepts a string of space separated numbers and returns the highest and lowest number (as a string).
function highLow(str) {
    let splitStr = str.split(" ");
    let numbers = splitStr.map(function(number) {
      number = Number(number);
      return number;
    })
    let sorted = numbers.sort(function(a, b) {
      return a - b;
    });
    let min = numbers[0];
    let max = numbers[numbers.length - 1];
    return `${max} ${min}`;
}

// Create a function that takes a string, checks if it has the same number of 'x's and 'o's and returns either true or false.
// Return a boolean value (true or false).
// The string can contain any character.
// When neither an x nor an o is in the string, return true.
function XO(str) {
    let x = 0;
    let o = 0;
    str = str.toLowerCase();
    let splitStr = str.split("");
    for (var i = 0; i < splitStr.length; i++) {
        if (splitStr[i] === 'x') {
            x++;
        } else if (splitStr[i] === 'o') {
            o++;
        }
    }
    if (x === o) {
        return true;
    } else if (x === 0 && o === 0) {
        return true;
    } else {
        return false;
    }
}

// Create a function that takes an integer and returns the factorial of that integer. That is, the integer multiplied by all positive lower integers.
function factorial(int) {
	if (int < 0) {
		return -1;
	} else if (int === 0) {
		return 1;
	} else {
		return int * factorial(int - 1);
	}
}

// Create a function that takes two strings as arguments and return either true or false depending on whether the number of their charcters is equal or not.
function comp(str1, str2) {
  if (str1.length === str2.length) {
	return true;
  } else {
	  return false;
  }
}

// Create a function that takes a string as an argument and returns a coded (h4ck3r 5p34k) version of the string.
function hackerSpeak(str) {
	let splitSen = str.toLowerCase().split('');
	let newArr = [];
	for (let i = 0; i < splitSen.length; i++) {
		if (splitSen[i] === 'a') {
			splitSen[i] = '4';
		} else if (splitSen[i] === 'e') {
		  	splitSen[i] = '3';
		} else if (splitSen[i] === 'i') {
			splitSen[i] = '1';
		} else if (splitSen[i] === 'o') {
			splitSen[i] = '0';
		} else if (splitSen[i] === 's') {
			splitSen[i] = '5';
		} else {
			splitSen[i] = splitSen[i];
		}
	}
	return splitSen.join('');
 }

//  Create a function that alternates the case of the characters in a string.
 function alternatingCaps(str) {
	str = str.toLowerCase();
	let splitStr = str.split('');
	let newString =[];
	splitStr.forEach((letter,index) => {
	  if (index % 2 === 0 ) {
		newString.push(letter.toUpperCase());
	  } else {
		newString.push(letter);
	  }
	  })
	return newString.join('');
	}
	
// Create a function that takes three arguments (txt, txt_length, txt_suffix) and returns a truncated string.
function truncate(txt, txt_length, txt_suffix = null){
	if (txt_suffix === null) {
			txt_suffix = '';
	}
	charRemoveCount = txt_length - txt_suffix.length;
	part1 = txt.slice(0, charRemoveCount);
	part2 = txt_suffix;
	finalString = part1 + part2;
	return finalString;
}

// console.log(truncate("CatDogDuck", 9, "Rat"))

// Create a function that takes an object and returns the keys and values as separate arrays.
function keysAndValues(obj) {
	let obj1 = obj;
	let keys = [];
	let values = [];
	let final = [];

	for (let key in obj1) {
		keys.push(key);
		values.push(obj1[key]);
	}
	final.push(keys, values);
	return final;

}

console.log(keysAndValues({a: 1, b: 2, c: 3}))