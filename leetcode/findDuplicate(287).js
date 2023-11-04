// 287. Find the Duplicate Number (middle)

var findDuplicate = function (nums) {
    let newArr = [nums[0]];
    for (let i = 1; i < nums.length; i++) {
      if (newArr.includes(nums[i])) return nums[i];
      else newArr.push(nums[i]);
    }
  };