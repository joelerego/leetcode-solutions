/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
    let r = 0, l = 0, count = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] == 'R') {
            r++;
        } else {
            l++;
        }

        if (r == l) {
            r = 0;
            l = 0;
            count++;
        }
    }
    return count;
};