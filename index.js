// Code your solutions in this file
const writeCards = (arr, event) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(`Thank you, ${arr[i]}, for the wonderful ${event} gift!`);
  }
  return result;
};

function countDown(num) {
  let i = num;
  while (i >= 0) {
    console.log(i);
    i--;
  }
}
