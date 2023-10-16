
// 2620. Counter

function createCounter(n) {
    let count = n - 1;
    return function () {
      count++;
      return count;
    };
  }
  