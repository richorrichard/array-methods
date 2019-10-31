# `copyWithin()`
The `copyWithin()` function shallow copies part of an array to another location in the same array and returns it without modifying its length.

## Function signature:
    copyWithin(array, target[, start[, end]])

## Function Parameters:
- `array`
- `target`
- `start` _(optional)_
- `end` _(optional)_

## Return Value:
Returns the modified original array

## Requirements:
<!-- 1. Basic Returns ✓ -->
- It should return the original array, not a copy.

<!-- 2. Argument Handling ✓ -->
- If no `array` it should throw a ReferenceError
- If no `target`, it should immediately return the original unmodified array.
- If `target > 0`, it should fill with elements in range starting at `array[target]`.
- If `target > array.length`, It should not modify the array.
- If `target < 0`, it should fill with elements in range starting at `array.length + target`.
- If no `start`, `start = 0`.
- If `start > 0`, it should copying elements starting with `array[start]`.
- If `start > array.length`, it should not modify the array.
- If `start < 0`, it should start copying from `array[array.length + start]`.
- If no `end`, `end = array.length`.
- If `end > 0`, it should copy up to, but not including `array[end]`.
- If `end > array.length`, `end = array.length`.
- If `end < 0`, it should copy up to, but not including `array[array.length + end]`
- If `target > start`, the array should be trimmed to fit initial `array.length`.

<!-- 3. Functionality ✓ -->
- It should work on array-like objects.
- If `typeof array === 'object' && !array.length`, it should immediately return `array`.
- It should respect holes.
- If `array` is not an object it should throw a `TypeError`.

<!-- 4. Edge Cases ✓ -->


 
