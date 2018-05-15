'use strict';

function doubleArrayValues(array) {
  for (let i=0; i<array.length; i++) {
    array[i] *= 2;
  }
  return array;
}

//Linear O(n) because it only loops through the array once.  The time will
//grow proportionally with the size of the input