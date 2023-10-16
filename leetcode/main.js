
// ======================================
//(easy) Write a function createHelloWorld. It should return a new function that always returns "Hello World".

var createHelloWorld = function () {
  return function (...args) {
    return "Hello World";
  };
};

// ============================================

// 287. Find the Duplicate Number (middle)
var findDuplicate = function (nums) {
  let newArr = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    if (newArr.includes(nums[i])) return nums[i];
    else newArr.push(nums[i]);
  }
};

// ===============================================

// 2696. Minimum String Length After Removing Substrings(easy)

var minLength = function (s) {
  let len = s.length;
  while (s.includes("AB") || s.includes("CD")) {
    if (s.includes("AB")) s = s.replaceAll("AB", "");
    if (s.includes("CD")) s = s.replaceAll("CD", "");
  }
  return s.length;
};

//7. Reverse Integer

function reverseInt(x) {
  let newX = String(x);
  let a = "";
  if (x < 0) a = a.replace("-", "");

  for (let i = newX.length - 1; i >= 0; i--) {
    a += newX[i];
  }
  if (a[0] == "0") {
    let j = 0;
    let tr = true;
    while (tr) {
      if (a[j] != "0") {
        a = a.replace("0", "");
        j++;
      } else tr = false;
    }
  }
  a = x > 0 ? +a : +Number(a.replace("-", "")) * -1;
  if (a > 2 ** 31 - 1 && a < -(2 ** 31)) return 0;
  return a;
}

console.log(reverseInt(-605090));
