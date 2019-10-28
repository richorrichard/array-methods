# `find()`
The `find()` function returns the value of the first element in the provided array that satisfies the provided testing function.

## Function signature:
    arrayFind(originalArray, [callback, [thisArg]])

## Function Parameters:  
- `array`
- `callback`
  - `element`  
  - `index` _(optional)_  
  - `array` _(optional)_ 
- `thisArg` _(optional)_

## Return Value:
The value of the first element in `originalArray` that satisfies the provided testing function. Otherwise, `undefined` is returned

## Prototype Implementation:
    function arrayFind(originalArray, callback, thisArg) {
      var arrayFindCallback = callback;

      if (thisArg) {
        arrayFindCallback = callback.bind(thisArg);
      }

      for (var i = 0, i < originalArray.length, i++) {
        var truthy = callback(originalArray[i], i, originalArray);
        if (truthy) {
          return originalArray[i];
        }
      }

      return undefined;
    }

## Requirements:
1.  ✓ `callback` should run `array.length` times.
2.  ✓ If the `callback` function is true, it should return the current index value from `array`. 
3.  ✓ If the `callback` function is not true, it should return undefined.
4.  ✓ `callback` should accept the current element as the first arguement.
5.  ✓ `callback` should accept the current element index as the second arguement.
6.  ✓ `callback` should accept the original `array` as the third arguement.
7.  ✓ `callback` should visit all indexes, even those without assigned values.
8.  ✓ `callback` should be able to mutate original `array`.
9.  ✓ `arrayFind()` should not mutate original `array`.
10. ✓ `callback` should not process any elements appended after `arrayFind()` has begun.
11. ✓ If `callback` changes an element that has not yet been visited, `callback` will process that element at the time that elements index is run.
12. ✓ If `callback` deletes an element, the index for that element should still be visited.
13. ✓ `arrayFind()` should accept an optional `thisArg` as the third paremeter, and it should be used as the this value inside each `callback` call.

## Description from Docs
Executes the `callback` function once per index of `originalArray`, until returns truthy
- If it finds a truthy condition, it returns the value of that element
- Otherwise, returns undefined

callback runs on every index of `originalArray`, not just assigned values

`thisArg` is optional. Will provide `this` to callback function. 
- If not provided, `this` is undefined

`arrayFind` does not mutate `originalArray`.
`callback` can mutate `originalArray`
- If `callback` mutates array, the array to be processed is set _before_ first `callback` invocation

- `callback` will not see any items added to `originalArray` after `arrayFind()` has begun
- If `callback` changes a yet-to-be visited element, the value at the time that element's index is run will be the value processed by the callback
  - **Note - consider multiple changes to same future element & empty elements
  - **Note - check typing 
- If an element is deleted by `callback`, they are still visited