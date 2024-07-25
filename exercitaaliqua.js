const promise1 = new Promise((resolve, reject) => {
  setTimeout(reject, 100, 'Error 1');
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 200, 'Success');
});
const promise3 = new Promise((resolve, reject) => {
  setTimeout(reject, 300, 'Error 3');
});

Promise.any([promise1, promise2, promise3]).then((value) => {
  console.log(value); // Output: 'Success'
}).catch((error) => {
  console.error('All promises rejected:', error);
});
