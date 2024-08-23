/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
    let result = [];
    arr.forEach((el, i) => {
        if (fn(el, i)) {
            result.push(el)
        }
    })
    return result
};