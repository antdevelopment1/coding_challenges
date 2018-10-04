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