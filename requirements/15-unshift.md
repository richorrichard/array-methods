# `unshift()`
The `unshift()` function adds one or more elements to the beginning of an array and returns the new length of the array.

## Function signature:
    unshift(array, element1[, ...[, elementN]])

## Function Parameters:
- `array`
- `elementN`

## Return Value:
Returns the new length of the array.

## Requirements:
<!-- 1. Basic Returns ✓ -->
- ✓ It should return the length of the array upon which it was called.

<!-- 2. Argument Handling ✓ -->
- ✓ It should insert `elementN` to the beginning of array upon which it was called.
- ✓ If multiple `element`s are passed in, it should insert all new elements in order.
- ✓ If no `element`, do not modify array.

<!-- 3. Functionality ✓ -->
- ✓ It should work on objects with a `length` property.
- ✓ If `array` is a non-array-like object, it should add length property and insert `element`s.
- ✓ If `element` is an array or object, it should insert the object.

<!-- 4. Edge Cases ✓ -->


 
