/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function (n, start) {
    let nums = [], xor = 0;

    for (let i = 0; i < n; i++) {
        nums.push(start + 2 * i);
        xor = xor ^ nums[i];
    }
    return xor;
};