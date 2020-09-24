/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function (head) {
    let sum = 0;
    temp = head;
    while (temp != null) {
        sum = sum * 2 + temp.val;
        temp = temp.next;
    }
    return sum;
};