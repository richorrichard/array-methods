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
1.  The function should accept the target array as the first arguement.
2.  The function should accept a callback function as the second arguement.
3.  The function should accept an optional `initialValue` as the third arguement.
<!-- Callback Paremeters -->
4.  The callback should accept the function accumulator value as the first arguement.
5.  The callback should accept the current element's value as the second arguement.
6.  The callback should accept the current index as the third arguement.
7.  The callback should accept the target array as the third arguement.
<!-- General Functionality (What should happen generally)-->
8.  It should traverse the array from right to left.
9.  The range of elements the function traverses should be set before the first callback.
10. The callback should not run on holes.
11. The callback should return the cumulative output of the combination of each iteration.
12. The function should return the returned value of the callback.
<!-- ??? (Where does this function run and what needs to be considered?) -->
<!-- Conditions for Execution (When will it do what it will do?) -->
13. If `initialValue`, `accumulator` should be set to `initialValue`.
14. If `initialValue`, `currentValue` should be set to the last last value in the array.
15. If no `initialValue`, `accumulator` should be set to the last value of the array.
16. If no `initialValue`, `currentValue` should be set to the second-to-last value of the array.
17. If no `initialValue`, and the array is empty, a `TypeError` should be thrown.
18. If `initialValue`, and the array has only one element, `initialValue` should be returned without calling callback.
19. If no `initialValue`, and the array has only one element, that value should be returned without calling callback.
<!-- (Why does it do ) -->
<!-- Logical Checks (How do the mechanics of the logic work?) -->
20. If any value before the range max is changed, the callback should process the new value at the time it visits it.


 
