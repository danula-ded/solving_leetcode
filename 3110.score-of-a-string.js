/*
 * @lc app=leetcode id=3110 lang=javascript
 *
 * [3110] Score of a String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function (s) {
    let total = 0;
    for (let i = 1; i < s.length; i++) {
        total += Math.abs(s.charCodeAt(i - 1) - s.charCodeAt(i));
    }
    return total;
};
// @lc code=end

