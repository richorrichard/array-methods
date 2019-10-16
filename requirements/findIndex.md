# findIndex()
The `findIndex()` function returns the index of the first element in an array that satisfies the provided testing function. Otherwise, `findIndex()` returns -1, indicating that no element passed the test.

## Function signature:
    findIndex(array, callback(element[, index[, array]])[, thisArg])

## Function Parameters:
- `callback`
  - `element`
  - `index` _(optional)_
  - `array` _(optional)_  

- `thisArg` _(optional)_

## Return Value:
`findIndex()` returns the index of the first element that satisfies the testing function. If no element satisfies the testing condition, `findIndex()` returns `-1`

## Prototype Implementation:
    
    function findIndex(array, callback, thisArg) {
      var arrayLength = array.length;
      var fnCallback = callback;

      if (arrayLength === 0) {
        return -1;
      }

      for(var i = 0; i < arrayLength; i++) {
        if (fnCallback(array[i], i, array)) {
          return i;
        }
      }
      
      return -1;
    }

## Requirements:
<!-- Callback Parameters -->
1. [x] The function should require a callback function as the second arguement and execute the callback once for every index in the array.
2. [x] The callback should accept the `ith` item as the first arguement.
3. [x] The callback should accept the current index as the second arguement.
4. [x] The callback should accept the original array as the third arguement.
<!-- Function Parameters -->
5. [x] If optional `thisArg` is provided, it should be used as `this` inside the callback.
6. [x] If optional `thisArg` is not provided, the callback should use `undefined` as its `this` value.

<!-- Functionality --> 
7. [x] If the callback returns true, the function should return the index of that element in the array.
8. [x] If the callback returns false, the function should return -1.
9. [x] If array's length is zero the function should return -1 without calling the callback.
<!-- Edge cases -->
10. [ ] The callback should be called for all indexes, including those with unassigned values.
11. [ ] The callback should process exactly the number of indexes provided at the time the function is run.
12. [ ] The callback should process any modified element at the time the function visits the element.
13. [ ] Elements that are deleted by the callback should still be visited by the function.





