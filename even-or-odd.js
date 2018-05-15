'use strict';

function isEven(value){
  if (value % 2 === 0){
    return true;
  }
  else
    return false;
}

//this is a Constant Time or O(1) because it is only looking at 1 value/input
//it is either true or false no matter what and it doesn't loop through anything
//aka it can either be divided by 2 or not. That's it.