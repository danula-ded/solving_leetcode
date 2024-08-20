/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        const element_one = nums[i];
        for (let j = 1; j < nums.length; j++) {
            const element_two = nums[j];
            if (i === j)
                continue
            else if ((element_one + element_two) === target)
                return [i, j]
        }
    }
};
// @lc code=end

