const myLib = require('../dist2N/my-lib');

console.log('\nstart\n');

console.log(myLib);

const m = myLib.default;
let x;
let y;
let f;

x = 2;
f = m.funcA.func1;
console.log(x, f(x));

x = 2;
f = m.funcA.func2;
console.log(x, f(x));

x = 'azerty';
f = m.btoaNode;
console.log(x, f(x));

x = 2;
y = 10;
f = m.funcB.func1;
console.log(x, f(x, y));

x = 2;
y = 10;
f = m.funcB.func2;
console.log(x, f(x, y));

console.log('\ndone');
