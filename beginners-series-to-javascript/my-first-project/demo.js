const people = ['Aaron', 'Mel', 'John'];
const one = 1;
const str = 'Hello World!';
const b = true;
const person = {
    first: 'Adam',
    last: 'Ponting',
};
function hello(person) {
    console.log('Hello ' + person.first);
}

console.log('--- typeof ---');
console.log(typeof people);
console.log(typeof one);
console.log(typeof str);
console.log(typeof b);
console.log(typeof person);
console.log(typeof hello);

console.log('--- instanceof ---');
console.log(people instanceof Array);
console.log(one instanceof Number);
console.log(str instanceof String);
console.log(b instanceof Boolean);
console.log(person instanceof Object);
console.log(hello instanceof Function);
