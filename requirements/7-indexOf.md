# `indexOf()`
The `indexOf()` function returns the first index at which a given element can be found in the array, or -1 if it is not present.

## Function signature:
    indexOf(searchElement[, fromIndex]);

## Function Parameters:
- `searchElement`
- `fromIndex` _(optional index to start search at)_

## Return Value:
- Function returns index at which `searchElement` is found in an array.
- If `searchElement` is not found, return `-1`.

## Requirements:
<!-- 1. Basic Returns -->
- If `searchElement === array[i]`, return `i`.
- If `searchElement` is not found, return `-1`.
- If `searchElement` is not provided, return `-1`.

<!-- 2. Arguement Handling -->
- If `array` is not provided, throw ReferenceError.
- If `array` is not an array, throw SyntaxError.
- If no `fromIndex` is provided, process array starting at `array[0]`.
- If `fromIndex` is provided, process array starting at `array[fromIndex]`.  

<!-- 3. Functionality -->
- If `fromIndex >= array.length`, return `-1` without processing array.
- If `fromIndex < 0`, process array starting `-(fromIndex)` indexes from the last element of array. 
- If `fromIndex < 0`, and `-(fromIndex) >= array.length`, return `-1` without processing array.
- If `fromIndex < 0`, array should be processed front-to-back.

<!-- 4. Edge Cases -->
- It should accept holes
- It should return index of explicitly defined standard built-in values.

 
