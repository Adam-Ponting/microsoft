function promiseTimeout(ms) {
    return new Promise((resolve, reject) => {
        // reject(123);
        setTimeout(resolve, ms);
    });
}

promiseTimeout(2000)
    .then(() => {
        console.log('Done!');
        return promiseTimeout(1000);
    })
    .then(() => {
        console.log('Also done!!');
        return Promise.resolve(42);
    })
    .then((result) => {
        console.log('result =>', result);
    })
    .catch((e) => {
        console.log('Error!', e);
    });
