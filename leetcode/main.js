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
//(easy) Write a function createHelloWorld. It should return a new function that always returns "Hello World".

var createHelloWorld = function() {
  return function(...args) {
      return "Hello World"
  }
};

// ============================================

// 287. Find the Duplicate Number (middle)
var findDuplicate = function(nums) {
  let newArr = [nums[0]]
  for(let i=1; i<nums.length; i++){
      if(newArr.includes(nums[i])) return nums[i]
      else newArr.push(nums[i])
  }
};

// ===============================================

// 2696. Minimum String Length After Removing Substrings(easy)

var minLength = function(s) {
  let len = s.length;
  while(s.includes('AB') || s.includes('CD')){
      if(s.includes('AB')) s=s.replaceAll('AB', '');
      if(s.includes('CD')) s=s.replaceAll('CD', '');
  }
  return  s.length
};