const status = 400;
if (status === 200) {
    console.log('is 200');
} else if (status === 400) {
    console.log('Error!');
} else {
    console.log('Unknown status');
}

const statusA = 200;
// let message = '';
// if (statusA === 200) {
//     message = 'OK!';
// } else {
//     message = 'Nope!';
// }
const message = status === 200 ? 'Ok!' : 'Error';
console.log(message);
