/**
 * @param {number[]} arr
 * @return {number}
 */

let reducer = (total, x) => total += x;

var sumOddLengthSubarrays = function (arr) {
    let len = arr.length, sumArr = [];
    for (let i = 0; 2 * i + 1 <= arr.length; i++) {
        let size = 2 * i + 1;
        let temp_arr = [];
        outer: for (let j = 0; j < arr.length; j++) {
            k = j;
            while (temp_arr.length < size) {
                if (arr[k] == undefined) break outer;
                temp_arr.push(arr[k])
                k++;
            }
            if (temp_arr.length == size) {
                sumArr.push(temp_arr.reduce(reducer, 0));
                temp_arr = [];
            }
        }
    }
    return sumArr.reduce(reducer, 0);

};