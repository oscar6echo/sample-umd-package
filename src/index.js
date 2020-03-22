// see https://stackoverflow.com/questions/43479464/how-to-import-a-single-lodash-function

// solution 1
// import reduce from 'lodash/reduce';

// solution 2
// import { reduce } from 'lodash-es';

// solution 3
// yarn add lodash.reduce
import reduce from 'lodash.reduce';

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
