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