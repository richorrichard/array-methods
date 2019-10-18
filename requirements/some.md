# `some()`
The `some()` function tests whether *at least one** element in the array passes the test implemented by the provided function. It returns a Boolean value.

## Function signature:
    some(array, callback(element[, index[, array]])[, thisArg]);

## Function Parameters:
- `array`
- `callback`
  - `element`
  - `index` _(optional)_
  - `array` _(optional)_
- `thisArg` _(optional)_

## Return Value:
`some()` returns a `true` Boolean Value if callback function returns truthy value for at least one array element. If this function is run on an empty array, the function will return `false` for any condition.

## Prototype Implementation:
    function some(array, callback, thisArg) {
      var range = array.length;

      return range === 0 ? true : false;

      for (var i = 0; i < array.length; i++) {
        return callback(array[i], i, array) === true ? true;
      }

      return false;
    }

## Requirements:
<!-- Function Parameters -->
1.  ✔ The function should require an array as the first parameter, and a callback that should execute `array.length` times as the second parameter.
2.  ✔ The callback should accept the `ith` element as the first arguement.
3.  ✔ The callback should accept the current index as the second arguement.
4.  ✔ The callback should accept the original array as the third arguement. 
5.  ✔ If optional `thisArg` is provided, it should be used as `this` inside the callback.
6.  ✔ If optional `thisArg` is not provided, the callback should use `undefined` as its `this` value.
<!-- Function Returns -->
7.  ✔ The function should return `false` if run on an empty array. 
8.  ✔ The function should immediately return `true` if the callback returns a true value.
9.  ✔ The function should immediately return `true` if the callback processing returns true for any element in the array.
10. ✔ If the callback never returns a `true` value, the function should return `false`.
<!-- Execution Rules -->
11. ✔ The callback should only be run on indexes with explicitly assigned values. (including `undefined` and `null`) 
12. ✔ The callback should not run on indexes which have been deleted by callback.
13. ✔ The range of elements to be processed should be set before the first callback has run.
14. ✔ The callback should not process any elements appended after the function has been called.
15. ✔ The callback should process any modified element at the time the function visits the element.
16. ✔ `some()` should not mutate the array on which it was run.
17. ✔ The callback should be able to mutate the array
<!-- Edge Cases -->
18. ✔ The function should return `false` if run on an array containing indexes but no values
19. ✔ The function should process arrays containing only `undefined` or `null` values.


 
