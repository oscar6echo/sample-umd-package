import myLib from '../dist2N/my-lib';

console.log('\nstart\n');

console.log(myLib);
console.log(myLib.funcA);
console.log(myLib.funcB);
console.log(myLib.btoaNode);

let x;
let y;
let f;

x = 2;
f = myLib.funcA.func1;
console.log(x, f(x));

x = 2;
f = myLib.funcA.func2;
console.log(x, f(x));

x = 'azerty';
f = myLib.btoaNode;
console.log(x, f(x));

x = 2;
y = 10;
f = myLib.funcB.func1;
console.log(x, f(x, y));

x = 2;
y = 10;
f = myLib.funcB.func2;
console.log(x, f(x, y));

console.log('\ndone');
