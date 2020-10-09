let num1 = '150';
let flo1 = '1.50';

console.log('-- Basic Math --');
console.log(num1 + 25);
console.log(num1 - 25);
console.log(num1 * 25);
console.log(num1 / 25);

console.log('-- Additional Math --');
console.log(num1 % 1500);
console.log(++num1);
console.log(--num1);
console.log(num1++);
console.log(num1--);

console.log('-- Math Object --');
console.log(Math.PI);
console.log(Math.sqrt(num1));

console.log(0.01 + 0.02);

let flo = '1.20000';
console.log(parseInt('0xF'));
console.log(+(+flo).toFixed(2));
console.log(parseFloat(flo));
console.log('---');
console.log(parseFloat(flo).toFixed(flo.split('.')[1].length));
console.log(parseInt(05));
