function printHello(name = 'John') {
    // console.log(`Hello ${name}!`);
    return name + ' Hello';
}
// console.log(typeof printHello);
// console.log(printHello.name);
// printHello('Adam');
let result = printHello();
console.log(result);
