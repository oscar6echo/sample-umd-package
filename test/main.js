const mod = require('../dist/webpack-numbers');

const { numToWord, wordToNum } = mod;

console.log('\nstart\n');

console.log(mod);
console.log(numToWord(2));
console.log(numToWord(3));
console.log(numToWord(4));
console.log(numToWord(10));

console.log(wordToNum('two'));
console.log(wordToNum('Two'));
console.log(wordToNum('Twos'));

console.log('\ndone');
