# findIndex()
The `findIndex()` method returns the index of the first element in `array` that satisfies the provided testing function. Otherwise, `findIndex()` returns -1, indicating that no element passed the test.

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

<!-- Function Parameters -->
- The function should require an array as the first arguement.
- The function should require a callback function as the second arguement.
- The function should accept an optional `thisArg` as the third arguement.
- If `thisArg` is provided, it should be used as `this` inside the callback.
- If `thisArg` is not provided, the callback should use `undefined` as its `this` value.
<!-- Callback Parameters -->
- The callback should accept the `ith` item as the first arguement.
- The callback should accept the current index as the second arguement.
- The callback should accept the original array as the third arguement.
<!-- Functionality -->
- It should execute the callback once for every index in the array.
- If the callback finds an element that matches test conditions, the callback should return true.
- If the callback doesnt find an element, the callback should return false. 
- If the callback returns true, the function should return the index of the first element in the array.
- If the callback returns false, the function should return -1.
- If array's length is zero the function should return -1 without calling the callback.
<!-- Edge cases -->
- The callback should be called for all indexes, including those with unassigned values.
- The callback should process exactly the number of indexes provided at the time the function is run.
- The callback should process any modified element at the time the function visits the element.
- Elements that are deleted by the callback should still be visited by the function.





