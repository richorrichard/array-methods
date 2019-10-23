# `concat()`
The `concat()` function is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.

## Function signature:
    var newArray = concat(oldArray[, value1[, value2[, ...[, valueN]]]]);

## Function Parameters:
- `valueN` _(optional - array and/or values to concat into  new array)_

## Return Value:
A new `Array` instance

## Requirements:
<!-- 1. Basic Returns -->
1. ✓ It should return a new array.
2. ✓ If no values are passed in, it should return a shallow copy of the original array.

<!-- 2. Arguement Handling? -->
3. ✓ The returned array should begin with the original array's elements, in order.
4. ✓ The returned array should add (in order) each arguement's elements (array) or arguement (non-array) to returned array.
5. ✓ Values with `string`, `number`, and `boolean` types will be copied into new array

<!-- 3. Functionality -->
6. ✓ It should not alter `this` or any arguement's array or value.
7. ✓ If an object reference is copied, both arrays will reference the same original object.
8. ✓ t should not recurse into nested array elements

<!-- 4. Edge Cases -->
9. ✓ New array should contain existing holes.
10. ✓ It should process explicitly defined `undefined` and `null` values.



 
