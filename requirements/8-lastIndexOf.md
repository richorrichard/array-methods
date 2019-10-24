# `lastIndexOf()`
The `lastIndexOf()` function returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.

## Function signature:
    lastIndexOf(searchElement[, fromIndex]);

## Function Parameters:
- `searchElement`
- `fromIndex` _(optional index to start search at)_

## Return Value:
- Function returns last index at which `searchElement` is found in an array.
- If `searchElement` is not found, return `-1`.

## Requirements:
<!-- 1. Basic Returns -->
1. ✓ If `searchElement === array[i]` traversing array right-to-left, return `i`.
2. ✓ If `searchElement` is not found, return `-1`.
3. ✓ If `searchElement` is not provided, return `-1`.

<!-- 2. Arguement Handling -->
4. ✓ If `array` is not provided, throw ReferenceError.
5. ✓ If `array` is not an array, throw SyntaxError.
6. ✓ If no `fromIndex` is provided, process array starting at `(array.length-1)`.
7. ✓ If `fromIndex` is provided, process array backwards starting at `array[fromIndex]`.

<!-- 3. Functionality -->
8. ✓ If `fromIndex >= array.length`, process whole array 
9. ✓ If `fromIndex < 0`, process array right to left, starting at `array.length + fromIndex`. 
10. ✓ If `(fromIndex + array.length) < 0`, return `-1`.
11. ✓ If `fromIndex < 0`, array should be processed right to left.

<!-- 4. Edge Cases -->
12. It should accept holes
13. It should return index of explicitly defined standard built-in values.