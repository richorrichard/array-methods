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
1. ✓ It should return the original array, not a copy.

<!-- 2. Argument Handling ✓ -->
2. ✓ If no `array` it should throw a ReferenceError.
3. ✓ If no `target`, it should immediately return the original unmodified array.
4. ✓ It should not change the array's length.
5. ✓ If `target > 0`, it should fill with elements in range starting at `array[target]`.
6. ✓ If `target > array.length`, it should immediately return the original array.
7. ✓ If `target < 0`, it should fill with elements in range starting at `array.length + target`.
8. ✓ If no `start`, `start = 0`.
9. ✓ If `start > 0`, it should copying elements starting with `array[start]`.
10. ✓ It should only process `copiedRange.length` elements.
11. ✓ If `start > array.length`, it should immediately return the original array.
12. ✓ If `start < 0`, it should start copying from `array[array.length + start]`.
13. ✓ If no `end`, `end = array.length`.
14. ✓ If `end > 0`, it should copy up to, but not including `array[end]`.
15. ✓ If `end > array.length`, `end = array.length`.
16. ✓ If `end < 0`, it should copy up to, but not including `array[array.length + end]`
17. ✓ If `target > start`, the array should be trimmed to fit initial `array.length`.

<!-- 3. Functionality ✓ -->
18. ✓ It should work on array-like objects.
19. ✓ If `typeof array === 'object' && !array.length`, it should immediately return `array`.
20. ✓ It should respect holes.
21. ✓ If `array` is not an object it should throw a `TypeError`.

<!-- 4. Edge Cases ✓ -->


 
