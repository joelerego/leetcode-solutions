/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function (nums) {
    let arr = [];
    for (let i = 0; i < nums.length / 2; i++) {
        for (let j = 0; j < nums[2 * i]; j++) {
            arr.push(nums[2 * i + 1]);
        }
    }
    return arr;
};