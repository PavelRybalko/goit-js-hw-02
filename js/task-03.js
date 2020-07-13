const findLongestWord = function(string){
const wordsArray = string.split(' ');
let longestWord = wordsArray[0];
for (let i=1; i<wordsArray.length; i += 1){
 if (longestWord.length < wordsArray[i].length){
 	longestWord = wordsArray[i];
 }
}
return longestWord;
};

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
console.log(findLongestWord('Google do a roll'));
console.log(findLongestWord('May the force be with you'));
