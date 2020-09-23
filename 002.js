/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let result = new ListNode(0), carry = 0;
    let p = l1, q = l2, current = result;

    while (p != null || q != null) {
        let x = p != null ? p.val : 0;
        let y = q != null ? q.val : 0;

        let sum = x + y + carry;
        carry = sum >= 10 ? 1 : 0;

        current.next = new ListNode((sum) % 10);
        current = current.next;

        if (p != null) p = p.next;
        if (q != null) q = q.next;

    }
    if (carry == 1) current.next = new ListNode(1);
    return result.next;
};