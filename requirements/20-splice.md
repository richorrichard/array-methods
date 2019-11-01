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
- It should return a new array, not original array.
- It should return array containing all deleted elements.

<!-- 2. Argument Handling ✓ -->
- If no `start`, immediately return empty array. 
- If no `start`, do not modify original array.
- If `start > 0`, begin removing elements from array at `array[start]`.
- If `start < 0`, begin removing elements from `array[array.length + start]`.
- If `start > array.length`, begin removing elements from `0`.
- If no `deleteCount`, remove all indexes where `i >= start`.
- If `deleteCount > 0`, remove all indexes where `start <= i < start + count`.
- If `deleteCount <= 0`, do not delete any element. 
- If no `itemN`, it should only remove elements from array.
- If `itemN`, insert all `itemN` into array at `array[start]` in order.

<!-- 3. Functionality ✓ -->
- It should respect holes.
- It should work with all data types.
- It should work with array-like-objects.
- If `array` is not an object, throw ReferenceError.
- If `typeof array === 'object' && !array.length`, throw TypeError. 

<!-- 4. Edge Cases ✓ -->


 
