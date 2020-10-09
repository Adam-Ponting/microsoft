console.log('object 🐛');
const place = 'World';
const greet = 'Hello';
console.log('Hello %s 🌍 %s', place, greet);
console.log(`${greet}, ${place}`);
// TODO fgdlgj
const value = 'Reverse me!';
let reversedValue = '';
value.split('').forEach((char) => {
    reversedValue = char + reversedValue;
});
console.log(reversedValue);

function reverseString(value) {
    let reversedResult = '';
    value.split('').forEach((char) => {
        reversedResult = char + reversedResult;
    });
    return reversedResult;
}
