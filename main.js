// 2619. Array Prototype Last
Array.prototype.last = function () {
  return this.length === 0 ? -1 : this[this.length - 1];
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */

// =======================================

// 2620. Counter

function createCounter(n) {
  let count = n - 1;
  return function () {
    count++;
    return count;
  };
}


// ======================================