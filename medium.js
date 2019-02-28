// Create a function that takes a string as an argument and converts the first character of each word to uppercase. Return the newly formatted string.
function makeTitle(str) {
    function makeTitle(str) {
        let newArray = str.split(" ");
        let finalWord = [];
        for (let i = 0; i < newArray.length; i++) {
            let word = newArray[i];
            let part1 = word[0].toUpperCase();
            let part2 = word.slice(1);
            finalWord.push(part1 + part2);
        }
      return finalWord.join(" ");
    }
}

console.log(makeTitle("Hi how are you today"))

// Given an array of numbers, write a function that returns an array that...
// Has all duplicate elements removed.
// Is sorted from least to greatest value.
function uniqueSort(arr) {
	arr = arr.sort((a, b) => {
		return a - b;
	})
	if (arr.length === 0) {
        return 0;
    }
    let newArr = [];
    newArr.push(arr[0]);
    let i = 0;
    for (let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            newArr.push(arr[j]);
            arr[i] = arr[j];
        }
    }
    return newArr;
}

// Given two strings, firstName and lastName, return a single string in the format "last, first".
function concatName(firstName, lastName) {
	return lastName.concat(", " + firstName);
}