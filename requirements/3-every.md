# `every()`
The `every()` function tests whether **all** elements in the provided array pass the test implemented by the provided `callback` function. It returns a **Boolean value**. 

## Function signature:
    every(array, callback(element[], index[, array]])[, thisArg]);

## Function Parameters:
- `array`
- `callback`
  - `element`
  - `index` _(optional)_
  - `array` _(optional)_
- `thisArg` _(optional)_

## Return Value:
`every()` returns a Boolean Value if callback function returns truthy value for every array element. If this function is run on an empty array, the function will return `true` for any condition.

## Prototype Implementation:
    function every(array, callback, thisArg) {
      var range = array.length;

      return range === 0 ? false : true;

      for (var i = 0; i < array.length; i++) {
        return callback(array[i], i, array) === false ? false;
      }

      return true;
    }

## Requirements:
<!-- Function Parameters -->
1. ✔ The function should require an array as the first parameter, and a callback that should execute `array.length` times as the second parameter.
2. ✔ The callback should accept the `ith` element as the first arguement.
3. ✔ The callback should accept the current index as the second arguement.
4. ✔ The callback should accept the original array as the third arguement. 
5. ✔ If optional `thisArg` is provided, it should be used as `this` inside the callback.
6. ✔ If optional `thisArg` is not provided, the callback should use `undefined` as its `this` value.
<!-- Function Returns -->
7. ✔ The function should return `true` if run on an empty array. 
8. ✔ The function should immediately return false if the callback returns a falsy value for **any** array element.
9. ✔ The function should return true if the callback returns a truthy value for **every** array element.
<!-- Execution Rules -->
10. ✔ The callback should not run on indexes without assigned values. 
11. ✔ The callback should not run on indexes which have been deleted by callback.
12. ✔ The range of elements to be processed should be set before the first callback has run.
13. ✔ The callback should not process any elements appended after the function has been called.
14. ✔ The callback should process any modified element at the time the function visits the element.
15. ✔ `every()` should not mutate the array on which it was run.
16. ✔ The callback should be able to mutate the array
<!-- Edge Cases -->
17. ✔ The function should return `true` if run on an array containing indexes but no values
18. ✔ The function should process arrays containing  `undefined` and `null` values.


 
