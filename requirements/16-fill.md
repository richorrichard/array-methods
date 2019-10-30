# `fill()`
The `fill()` function fills (modifies) all the elements of an array from a start index (default zero) to an end index (default array length) with a static value. It returns the modified array.

## Function signature:


## Function Parameters:
- `array`
- `value`
- `start` _(optional)_
- `end` _(optional)_

## Return Value:
Returns the modified array.

## Requirements:
<!-- 1. Basic Returns ✓ -->
- ✓ It should return the modified original array (not a copy).

<!-- 2. Argument Handling ✓ -->
- ✓ It should replace all elements in range with `value`.
- ✓ If no `start`, fill beginning with `start = 0`.
- ✓ If `start > 0`, fill beginning with `start`.
- ✓ If `start < 0`, fill beginning with `start = array.length + start`.
- ✓ If no `end`, fill up to but not including `end = array.length`.
- ✓ If `end > 0`, fill up to but not including `end`.
- ✓ If `end < 0`, fill up to but not including `end = array.length + end`.

<!-- 3. Functionality ✓ -->
- ✓ It should work with array-like objects.
- ✓ If passed an object, it will fill specified elements with references to that object.
- ✓ It should fill with all data types.
- ✓ If a non-object is passed into the function it should throw TypeError.

<!-- 4. Edge Cases ✓ -->
- ✓ It should fill holes.
- ✓ If passed an object with no `length` property, immediately return original unaltered array.
- ✓ If `array.length === 0`, it should immediately return original unaltered array.