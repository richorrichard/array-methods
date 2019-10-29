/*
Pros:
  - Shorter codebase
  - Early returning of edge cases
  - Clearly grouped declarations

Cons:
  - Logic is more convoluted
  - Harder to tie tests to unique parts of functionality
  - Relies on logical waterfall instead of verbose explicitly set conditions
  - Does not maintain integrity of arguments
*/

function slice(array, begin = 0, end = array.length) {
  var returnArray     = [],
      returnIndex     = 0;

  if (typeof array !== 'object' && array !== null) return returnArray;

  // Handle Edge Cases
  if (arguments.length === 0) return returnArray;
  if (arguments.length < 2 || typeof begin !== 'number') begin = 0;
  if (arguments.length < 3 || typeof end !== 'number' || end > array.length) end = array.length;

  // Handle negative values
  if (begin < 0) begin += array.length;
  if (end < 0) end += array.length;

  for (var i = begin; i < end; i++) {
    returnArray[returnIndex] = array[i];
    returnIndex++;
  }

  return returnArray;
}