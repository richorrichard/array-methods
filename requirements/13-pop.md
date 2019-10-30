# `pop()`
The `pop()` function removes the last element from an array and returns that element. This method changes the length of the array.

## Function signature:
    pop(array);

## Function Parameters:
- `array`

## Return Value:
Returns the last element of the array upon which it was called.

## Requirements:
<!-- 1. Basic Returns ✓ -->
- If `array.length > 0`, return `array[array.length-1]`.
- If `array.length === 0`, return `undefined`.

<!-- 2. Argument Handling ✓ -->

<!-- 3. Functionality ✓ -->
- It should remove `array[array.length - 1]` from array.
- Resulting array length should be `array.length - 1`.
- If `array[i]` is `undefined` or a hole, return explicit `undefined`.
- If `typeof array !== 'object'`, throw TypeError "You must pass an object into this function".
- If `typeof array === 'object'`, and is an array-like-object, it should work on array-like elements.
- If `typeof array === 'object'`, and is not array-like-object, `array.length` should be set to `0`.
- It should process `array[i]` of any data type.

<!-- 4. Edge Cases ✓ -->


 
