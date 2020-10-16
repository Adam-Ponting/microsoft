// const name = '';

// if (!name) {
//     console.log('No name');
// } else {
//     console.log('we have a name');
// }

// const status = 'error';

// if (status.toUpperCase() == 'ERROR') {
//     console.log('Something went wrong');
// } else {
//     console.log('Looks great');
// }

// const status = 500;

// if (status === 200) {
//     console.log('OK!');
// } else if (status === 400 || status === 500) {
//     console.log('Error');
// } else {
//     console.log('Unknown status');
// }

const status = 200;
switch (status) {
    case 200:
        console.log('OK');
        break;
    case 400:
    case 500:
        console.log('Error');
        break;
    default:
        console.log('Unknown status');
        break;
}
