//custom map method for array

Array.prototype.myMap = function (callback) {
  let mapArray = [];
  for (let i = 0; i < this.length; i++) {
    let result = callback(this[i]);
    mapArray.push(result);
  }
  return mapArray;
};


console.log('hi');