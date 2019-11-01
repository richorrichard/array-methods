# `splice()`
The `splice()` function changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

## Function signature:
    splice(array, start[, deleteCount[, item1, ...[, itemN]])

## Function Parameters:
- `array`
- `start`
- `deleteCount` _(optional)_
- `itemN` _(optional)_

## Return Value:
Returns new array containing the deleted elements, beginning from `start`.

## Requirements:
<!-- 1. Basic Returns ✓ -->
1. ✓ It should return a new array, not original array.
2. ✓ It should return an array containing elements removed from original array.

<!-- 2. Argument Handling ✓ -->
3. ✓ If no `start`, immediately return empty array. 
4. ✓ If no `start`, do not modify original array.
5. ✓ If `start > 0`, begin removing elements from array at `array[start]`.
6. ✓ If `start < 0`, begin removing elements from `array[array.length + start]`.
7. ✓ If `start > array.length`, `start = array.length`.
8. ✓ If no `deleteCount`, remove all indexes where `i >= start`.
9. ✓ If `deleteCount > 0`, remove all indexes where `start <= i < start + count`.
10. ✓ If `deleteCount <= 0`, do not delete any element. 
11. ✓ If no `itemN`, it should only remove elements from array.
12. ✓ If `itemN`, insert all `itemN` into array at `array[start]` in order.

<!-- 3. Functionality ✓ -->
13. ✓ It should respect holes.
14. ✓ It should work with all data types.
15. ✓ It should work with array-like-objects.
16. ✓ If `array` is not an object, throw ReferenceError.
17. ✓ If `!array.length`, throw TypeError. 

<!-- 4. Edge Cases ✓ -->


 
