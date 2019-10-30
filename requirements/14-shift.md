# `shift()`
The `shift()` function removes the first element from an array and returns that removed element. This method changes the length of the array.

## Function signature:
    shift(array)

## Function Parameters:
- `array`

## Return Value:
The removed element from the array, `undefined` if the array is empty.

## Requirements:
<!-- 1. Basic Returns ✓ -->
- ✓ If `array.length > 0`, return `array[0]`.
- ✓ If `array.length === 0`, return `undefined`.

<!-- 2. Argument Handling ✓ -->

<!-- 3. Functionality ✓ -->
- ✓ It should remove `array[0]` from array.
- ✓ It should shift the values of all indexes down `1` index.
- ✓ Resulting array length should be `array.length - 1`.
- ✓ If `array[i]` is `undefined` or a hole, return explicit `undefined`.
- ✓ If `typeof array !== 'object'`, throw TypeError.
- ✓ If `typeof array === 'object'`, and is an array-like-object, it should work.
- ✓ If `typeof array === 'object'`, and is not array-like-object, `array.length` should be set to `0`.
- ✓ It should process `array[i]` of any data type.

<!-- 4. Edge Cases ✓ -->


 
