
async function fetchData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

fetchData();

function promiseTimeout(ms) {
    return new Promise((resolve, reject) => {
        // reject(123);
        setTimeout(resolve, ms);
    });
}

async function longRunningOperation() {
    // logic
    return 42;
}


async function run() {
    // logic
    console.log('Start!!');
    await promiseTimeout(2000);
    console.log('Done!');
    await promiseTimeout(1000);
    console.log('Also done!!');
    const result = await Promise.resolve(42);
    console.log('result =>', result);
    const lro = await longRunningOperation();
    console.log('lro =>', lro);
}
run()