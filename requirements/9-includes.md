# `includes()`
The `includes()` function determines whether an array includes a certain value among its entries, returning `true` or `false` as appropriate.

## Function signature:
    includes(array, valueToFind[, fromIndex]);

## Function Parameters:
- `array`
- `valueToFind`
- `fromIndex` _(optional)_

## Return Value:
Returns a Boolean. Returns `true` if `valueToFind` is found within the array (or part specified therein), otherwise `false`.

## Requirements:
<!-- 1. Basic Returns ✓ -->
- If `valueToFind === array[i]` while traversing array from left to right, return true.
- If `valueToFind` is not found, return false. 

<!-- 2. Arguement Handling ✓ -->
- If `array` is not present, throw ReferenceError.
- If `array` is not an array or array-like object, throw SyntaxError.
- If `valueToFind` is not provided, treat as empty value.
- If `fromIndex` is not provided, default starting index is `0`.
- If `fromIndex`, process array starting at `array[fromIndex]`.
- If `fromIndex >= array.length`, return false without searching array.
- If `fromIndex < 0`, process array starting at `array.length + fromIndex`.
- If `(fromIndex + array.length) < 0`, process entire array, starting at `array[0]`.

<!-- 3. Functionality ✓ -->
- `valueToFind` should be case-sensitive.
- It should work on array-like objects.
- It should work on strings.

<!-- 4. Edge Cases ✓ -->
- It should treat holes as undefined
- It should process all defined standard primitives.