/*
Pros:
  - Cleaner to read
  - no destructive argument manipulation
  - explicit conditions for argument presence

Cons:
  - Nested conditionals
  - 12 lines longer
  - slight redundancies
*/

function slice(array, begin, end) {
  
  if (typeof array !== 'object' && array !== null) {
    return [];
  }
  
  var returnArray     = [],
      startOnIndex    = 0,
      endBeforeIndex  = array.length,
      returnIndex     = 0;

  if (arguments.length === 0) {
    return returnArray;
  }

  if (arguments.length > 1 && typeof begin === 'number') {
    startOnIndex = begin >= 0 ? begin : array.length + begin;
  }

  if (arguments.length > 2 && typeof end === 'number') {
    if (end >= 0) {
      endBeforeIndex = end > array.length ? array.length : end;
    } else {
      endBeforeIndex = array.length + end;
    }
  }

  for (var i = startOnIndex; i < endBeforeIndex; i++) {
    returnArray[returnIndex] = array[i];
    returnIndex++;
  }

  return returnArray;
}