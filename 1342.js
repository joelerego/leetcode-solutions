/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function (num) {
    let count = 0;
    while (num) {
        if (num % 2 == 0) {
            num = num / 2;
            count++;
        }
        else {
            num--;
            count++;
        }
    }
    return count;
};