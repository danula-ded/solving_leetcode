/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
    let maps = [];
    arr.forEach((el, i) => {
        maps.push(fn(el, i))
    })
    return maps
};