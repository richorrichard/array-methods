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
- It should return the length of the object upon which it was called.

<!-- 2. Argument Handling ✓ -->
- If no `element`, It should not modify the original array.

<!-- 3. Functionality ✓ -->
- It should append each `element` to the end of the object.
- It should begin appending elements at `array[array.length]`.
- It should increase the array's length by `arguments.length - 1`.
- It should work on objects resembling arrays.
- If `argument` is an array, append array items.
- If `argument[i]` is an array, it should not recurse into child array.
- If array has no length (e.g. object), it should begin appending elements at 0.
- If `typeof array !== object`, throw SyntaxError "Invalid or unexpected token".

<!-- 4. Edge Cases ✓ -->


 
