
//Test one 
// add "way" to the end words

const word= ["This"];
const vowelWord = ["way"];
const pigLatinWord = word.concat(vowelWord);
const superPigLatinWord = pigLatinWord.join("");

//Test Two
//need to splice or slice the first letter of the word
const word= ["This"];
const vowelWord = ["way"];
let stringWord = word.toString();
let splitWord = stringWord.split("");
let sliceWord = splitWord.slice(1);

// Test Three
// target Fist letter of word
const word = ["This"];
const vowelWord = ["way"];
let stringWord = word.toString();
let oneLetterWord = stringWord.charAt(0);

//Test Four
// recognize if first letter is a vowl
const word = ["This"];
const vowelWord = ["way"];
let stringWord = word.toString();
let oneLetterWord = stringWord.charAt(0);
  if oneLetterWord === ["a","e","i","o","u"]
    const pigLatinWord = word.concat(vowelWord);
    const superPigLatinWord = pigLatinWord.join("");





//Test two 
// Target words beginning with consonants, ( include "y" and include "qu") 

//move all of the first consecutive consonants to the end, 

// add "ay" at the end 


// console.log(superPigLatinWord);
// function piglatin(word) {
// if word[0] === /aeiou/
//     add + "way" at word.length-1

// function pigLatinvowl(userInput) {
// 	let vowelEnd = "way"
// 	let consEnd = "ay"
// 	let vowels = ["a", "e", "i", "o", "u"];
//   userInput = [];
  
//   array.forEach(function(element){
//   	Translation.push(element(vowels.charAt(0)+vowelEnd));
//     });
//    });