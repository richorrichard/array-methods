function slice(array, begin, end) {

  var returnArray     = [],
      returnIndex     = 0;

  // Handle no arguments & invalid first argument
  if (arguments.length === 0 || (typeof array !== 'object' && array !== null)) {
    return returnArray;
  }
  
  // Handle begin argument
  if (arguments.length > 1 && typeof begin === 'number') {
    if (begin < 0) {
      begin = begin + array.length;
    }
    // if begin >= 0, retain value of begin
  } else {
    // No endOn argument
    begin = 0;
  }
  
  // Handle end argument
  if (arguments.length > 2 && typeof end === 'number') {
    if (end < 0) {
      end = end + array.length;
    } 
    
    if (end > array.length) {
      end = array.length;
    } 
    // if end >= 0 and less than array.length, retain value of end
  } else {
    // No endOn argument
    end = array.length
  }

  for (var i = begin; i < end; i++) {
    returnArray[returnIndex] = array[i];
    returnIndex++;
  }

  return returnArray;
}