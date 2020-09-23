/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function (n) {
    let temp = n, sum = 0, product = 1;

    while (temp != 0) {
        let digit = temp % 10;
        sum = sum + digit;
        product = product * digit;
        temp = parseInt(temp / 10);
    }
    return product - sum;
};