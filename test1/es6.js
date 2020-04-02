import { numToWord, wordToNum } from '../dist1/webpack-numbers';

console.log('\nstart\n');

console.log(numToWord(2));
console.log(numToWord(3));
console.log(numToWord(4));
console.log(numToWord(10));

console.log(wordToNum('two'));
console.log(wordToNum('Two'));
console.log(wordToNum('Twos'));

console.log('\ndone');
