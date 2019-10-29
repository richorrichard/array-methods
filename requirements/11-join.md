# `join()`
The `join()` method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.

## Function signature:
    join(array[, separator])

## Function Parameters:
- `array`
- `separator` _(optional)_

## Return Value:
Returns a string  with all elements in array concatenated with commas (default) or an optional separator string.

## Requirements:
<!-- 1. Basic Returns ✓ -->
- If no `separator`, return a string containing all elements in the array separated by commas.
- If `array.length === 0`, return empty string.
- If `array.length === 1`, return that element without a separator.
- If `separator` is an empty string, return a string containing all elements with no joining characters.

<!-- 2. Argument Handling ✓ -->
- If `separator`, return string joined with `separator`.
- If `separator` is not a string, convert to a string.
- If `array` is not an array or an array-like-object, throw SyntaxError "Invalid or unexpected token".

<!-- 3. Functionality ✓ -->
- If `array[i] === undefined || null`, an empty string should be added to return string.
- If `array[i]` is any other primitive, it should convert element to a string before being added to return string.
- If `typeof array[i] === "object"`, object's default return value should be added to return string ([object Object]).
- It should work with array-like objects.

<!-- 4. Edge Cases ✓ -->
- It should respect holes.



 
