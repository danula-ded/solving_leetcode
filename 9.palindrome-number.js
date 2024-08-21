/*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    const arr = x.toString().split("")
    const gran = Math.floor(arr.length / 2)
    for (let i = 0; i < gran; i++) {
        if (arr[i] === arr[arr.length - i - 1]) {
            continue
        }
        else {
            return false
        }
    }
    return true
};
// @lc code=end

