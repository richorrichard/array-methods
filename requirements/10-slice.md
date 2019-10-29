# `slice()`
The `slice()` function returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included) where begin and end represent the index of items in that array. The original array will not be modified.

## Function signature:
    slice(array[, begin[, end]]);

## Function Parameters:
- `array`
- `begin` _(optional)_
- `end` _(optional)_

## Return Value:
Returns a new array containing the extracted elements.

## Requirements:
<!-- 1. Basic Returns ✓ -->
- [x] It should return a new array composed of elements copied from original array.
- [x] It should return a new array with extracted elements starting with `array[begin]` up to but not including `array[end - 1]`.

<!-- 2. Argument Handling ✓ -->
- [x] If `begin < 0`, extract elements starting with index `begin + array.length`.
- [x] If `begin > array.length`, return empty array.
- [x] If no `begin`, extract elements starting with `array[0]`.
- [x] If `end`, extract elements up to but not including `end`.
- [x] If `end < 0`, extract elements up to but not including `array.length + end`.
- [x] If no `end`, extract all remaining elements.
- [x] If `end > array.length`, extract all remaining elements.
- [x] If `begin` is not a number, extract elements starting with `array[0]`.
- [x] If `end` is not a number, extract elements until `array.length`.

<!-- 3. Functionality ✓ -->
- [x] The original array should not be modified.
- [x] If `begin && (end === undefined || '')`, extract all remaining elements.
- [x] If copying object refs, result array and original array should reference same object.
- [x] It should respect holes.

<!-- 4. Edge Cases ✓ -->
- [x] It should work on array-like objects.
- [x] It should accept explicitly defined `null` and `undefined` arguments.
- [x] If first argument is not an array or object, return `[]`.


 
