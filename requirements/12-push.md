# `push()`
The `push()` function adds one or more elements to the end of an array and returns the new length of the array.

## Function signature:
    push(array, element1[, ...[, elementN]])

## Function Parameters:
- `array`
- `elementN`

## Return Value:
It returns the length property of the object upon which it was called.

## Requirements:
<!-- 1. Basic Returns ✓ -->
1. ✓ It should return the length of the object upon which it was called.

<!-- 2. Argument Handling ✓ -->
2. ✓ If no `element`, It should not modify the original array.

<!-- 3. Functionality ✓ -->
3. ✓ If `arguments.length > 1`, it should append each `element` to the end of array.
4. ✓ It should begin appending elements at `array[array.length]`.
5. ✓ It should work with many `element` arguments.
6. ✓ It should increase the array's length by `arguments.length - 1`.
7. ✓ It should work on objects resembling arrays.
8. ✓ If `argument` is an array, append the array.
9. ✓ If array has no length (e.g. object), it should begin appending elements at 0.
10. ✓ If `typeof array !== object`, throw SyntaxError "Invalid or unexpected token".

<!-- 4. Edge Cases ✓ -->


 
