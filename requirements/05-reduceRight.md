# `reduceRight()`
The `reduceRight()` function applies a callback function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value.

## Function signature:
    reduceRight(array, callback(accumulator, currentValue[, index[, array]])[, initialValue]);

## Function Parameters:
- `array`
- `callback`
  - `accumulator`
  - `currentValue`
  - `index` _(optional)_
  - `array` _(optional)_
- `initialValue` _(optional)_

## Return Value:
The value that results from the reduction.

## Requirements:
<!-- Function Parameters (Who are the key parameters and data involved?) -->
1.  ✓ The callback should accept the function accumulator value as the first arguement.
2.  ✓ The callback should accept the element\'s `currentValue` as the second arguement.
3.  ✓ The callback should accept the current index as the third arguement.
4.  ✓ The callback should accept the target array as the fourth arguement.
5.  ✓ If no `initialValue`, callback should run array.length-1 times.
6.  ✓ If no `initialValue`, `accumulator` should be set to the last value of the array.
7.  ✓ If no `initialValue`, `currentValue` should be set to the second-to-last value of the array.
8.  ✓ If no `initialValue`, and the array is empty, a `TypeError` should be thrown.
9.  ✓ If no `initialValue`, and the array has only one element, that value should be returned without calling callback.
10. ✓ If `initialValue`, callback should run array.length times.
11. ✓ If `initialValue`, `accumulator` should be set to `initialValue`.
12. ✓ If `initialValue`, `currentValue` should be set to the last last value in the array.
13. ✓ If `initialValue`, and the array is empty, `initialValue` should be returned without calling callback.
14. ✓ It should run the callback on all elements in the array from right to left.
15. ✓ The range of elements the function traverses should be set before the first callback.
16. ✓ The callback should not run on holes.
17. ✓ The callback should update the accumulator with the outcome of the function on each iteration (except the last).
18. ✓ The function should return the returned value of the callback.
19. ✓ If any value before the range max is changed, the callback should process the new value at the time it visits it.