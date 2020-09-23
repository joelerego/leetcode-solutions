/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function (s, indices) {
    let str = ""
    for (let i = 0; i < s.length; i++) {
        str = str + s[indices.indexOf(i)]
    }
    return str;
};