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
- It should return a new array with elements from `array[begin]` to `array[end - 1]`.

<!-- 2. Argument Handling ✓ -->
- If `begin < 0`, extract elements starting with `begin + array.length`.
- If `begin > array.length`, return empty array.
- If no `begin`, extract elements starting with `array[0]`.
- If `end`, extract elements up to and including `end - 1`.
- If `end < 0`, extract elements up to and including `array.length + (end - 1)`.
- If no `end`, extract all remaining elements.
- If `end > array.length`, extract all remaining elements.
- If `begin` is not a number, extract elements starting with `array[0]`.
- If `end` is not a number, extract elements until with `array.length`.

<!-- 3. Functionality ✓ -->
- The original array should not be modified.
- If `!begin && end`, throw SyntaxError "Unexpected token ','". 
- If `begin && (end === undefined || '')`, extract all remaining elements.
- If copying object refs, result array and original array should reference same object.

<!-- 4. Edge Cases ✓ -->
- It should copy empty elements to new array.
- It should work on array-like objects.
- It should accept explicitly defined `null` and `undefined` arguments.
- If first argument is not an array or object, return `[]`.


 
