/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function (fn) {
    let isCalls = false;
    let val;

    return function (...args) {
        if (!isCalls) {
            isCalls = true
            val = fn(...args)
            return val
        }
        else
            return undefined

    }
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
