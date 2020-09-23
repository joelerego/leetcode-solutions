/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
    let arr = [], max = Math.max(...candies);
    for (let i = 0; i < candies.length; i++) {
        arr.push(candies[i] + extraCandies >= max);
    }
    return arr;
};