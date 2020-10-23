const blank = {};
console.log('Blank type', typeof blank);
console.log('Blank value', blank);

const book = {
    title: '1984',
    author: 'George Orwell',
    isAvailable: false,
    checkIn() {
        this.isAvailable = true;
    },
    checkOut() {
        this.isAvailable = false;
    },
};
// console.log('Book type', typeof book);
console.log('Book value\n', book);
book.checkIn();
console.log('Book value\n', book);
console.log(book.author);
console.log(book['author']);
console.log(globalThis);
console.log(this);
