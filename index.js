/*Create a ternary that correctly returns a pluralised string
    Create a program that takes two variables, “item” which is equal to the name of an item and “count” which is equal to the number of items I have. Create a ternary statement that returns a sentence as such ‘I have ’’. However the word count and item should be replaced by the values in the variables and item should have a s on the end if there is more than one item.
    
    */

function plural(item, count) {
  return count > 1 ? `I have ${count} ${item}s` : `I have ${count} ${item}`;
}

console.log(plural("apple", 8));

//Return the length of a string

let str = "futureproof";

console.log(str.length);

//console.log the word train from this sentence “I dislike trains as a mode of transport”

const train = "I dislike trains as a mode of transport";

console.log(train.slice(9, 15));

//Return the fifth letter of the alphabet from this string ‘abcdefghijklmnopqrstuvwxyz’

const alphabet = "abcdefghijklmnopqrstuvwxyz";

function alpha(a) {
  return a.slice(4, 5);
}
console.log(alpha(alphabet));

//Make this string shouty by making it all upper case ‘I love you’

let word = "I love me";
function upperCase(word) {
  return word.toUpperCase();
}
console.log(upperCase(word));




//console.log this number to 2 decimal places 1.23456789
// 👇️ if the value is a string
// call parseFloat to convert it to a number first

let num = 1.23456789

console.log(num.toFixed(2))


//Change this string into a number “45”
let str2 = '45'

console.log(parseFloat(str2))

