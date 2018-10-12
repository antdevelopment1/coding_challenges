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
