import reduce from 'lodash/reduce';
import arrRef from './ref.json';

const numToWord = (num) => {
  return reduce(
    arrRef,
    (acc, v) => {
      return v.num === num ? v.word : acc;
    },
    'unknown'
  );
};

const wordToNum = (word) => {
  return reduce(
    arrRef,
    (acc, v) => {
      return v.word.toLowerCase() === word.toLowerCase() ? v.num : acc;
    },
    -1
  );
};

export { numToWord, wordToNum };
