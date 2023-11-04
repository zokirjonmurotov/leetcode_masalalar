/**
 * @param {number} num
 * @return {number}
 */


// Number of Steps to Reduce a Number to Zero(1341) easy

var numberOfSteps = function(num) {
    let count = 0;
    while(num > 0){
        if(num%2==0){
            count++
            num = num/2;
        }else{
            count++;
            num = (num -1);
        }
    }
    return count;
};