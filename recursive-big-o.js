'use strict';

function countSheep(num){
  if(num === 0){
    console.log('All sheep jumped over the fence');
  }
  else{
    console.log(`${num}: Another sheep jump over the fence`);
    countSheep(num-1);
  }
}
//***Linear O(n) because it is recursive so the algorithm needs to run every time
//***for a each item/num in the countdown

/*=================================================================================
Exercise 2: Array Double
*/

function double_all(arr) {
  if (!arr.length) {
    return [];
  }
  return [arr[0] * 2, ...double_all(arr.slice(1))];
}
//***Linear again, just going through each part of the array only once and doing 1 thing to it

/*=================================================================================
Exercise 3 - Reverse String
*/

function reverseString(str) {
  if (str.length < 2) {
    return str;
  }
  return reverseString(str.slice(1)) + str[0];
}
//***Linear again because it is again going through once and just reversing the letters

/*=================================================================================
Exercise 4 - Triangular Number
*/
function triangle(n) {
  if (n < 2) 
    return n;
  return n + triangle(n - 1);
}
//***Linear again because it is just going through the array once
//***and then adding those numbers together

/*=================================================================================
Exercise 5 - String Splitter
*/

function split(str, sep) {
  var idx = str.indexOf(sep);
  if (idx == -1) 
    return [str];

  return [str.slice(0, idx)].concat(split(str.slice(idx + sep.length), sep));
}


//***Logarithmic O(log(n)) because it is only looping through once but it is
//***cutting/elimating the data once before it because it is only looking for a certain
//***separator and not doing an action to each item

/*=================================================================================
Exercise 6 - Binary Representation
*/
function convertToBinary(num){
  if(num>0){
    let binary = Math.floor(num%2); 
    return (convertToBinary(Math.floor(num/2))+ binary);
  }else{
    return ''; 
  }
}
//***Linear? because it still has to touch every number or is it Logarithmic 
//***because it divides the number in half each time, does not go one at a time down?


/*=================================================================================
Exercise 7 - Factorial
*/
function factorial(n) {  
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

//***Linear because it only goes through n 1 at a time 

/*=================================================================================
Exercise 8 - Fibonacci
*/
function fibonacci(n) {
  if (n <= 0) {
    return 0;
  }
  if (n <= 2) {
    return 1;
  }	
  return fibonacci(n - 1) + fibonacci(n - 2);	
}

//***Exponential?  Because it returns 2 recursions which each then have 2 recursions and so on and so forth.

/*=================================================================================
Exercise 9 - Anagrams 
*/

function anagrams(prefix, str){
  if(str.length <= 1){
    console.log(`The anagram is ${prefix}${str}`);
  } else {
    for(let i=0; i<str.length; i++){
      let currentLetter = str.substring(i, i+1); 
      let previousLetters = str.substring(0,i);
      let afterLetters = str.substring(i+1);
      anagrams(prefix+currentLetter, previousLetters+afterLetters);
    }
  }
}
function printAnagram(word){
  anagrams(' ', word);

}
//***Exponential because you have a recursive call inside a loop
//***Therefore it needs to go through the first letter and then do the same to/rearrange all the rest of the letters 
//***before it can move onto putting the 2nd letter as the 1st letter and rearranging the rest


/* ==============================
Exercise 10: Animal Hierarchy
*/

const animalHierarchy = [
  {id: 'Animals', parent: null},
  {id: 'Mammals', parent: 'Animals'},
  {id: 'Dogs', parent:'Mammals' },
  {id: 'Cats', parent:'Mammals' },
  {id: 'Golden Retriever', parent: 'Dogs'},
  {id: 'Husky', parent:'Dogs' },
  {id: 'Bengal', parent:'Cats' }
];

// ==============================
function traverse(animalHierarchy, parent) {
  let node = {};
  animalHierarchy.filter(item => item.parent === parent)
    .forEach(item => node[item.id] = traverse(animalHierarchy, item.id));
  return node;  
}

//***Polynomial O(n^2) because it is a loop inside a loop(recursive) that looks at
//***the object in the array and then gets the id in the array

//**Mentor Notes: Go Over */

/*=================================================================================*/
/*
Exercise 11: Organization Chart
*/

let organization = {
  'Zuckerberg': {		
    'Schroepfer': {
      'Bosworth': {
        'Steve':{},
        'Kyle':{},
        'Andra':{}
      },
      'Zhao': {
        'Richie':{},
        'Sofia':{},
        'Jen':{}
      },
      'Badros': {
        'John':{},
        'Mike':{},
        'Pat':{}
      },
      'Parikh': {
        'Zach':{},
        'Ryan':{},
        'Tes':{}
      }
    },
    'Schrage': {
      'VanDyck': {
        'Sabrina':{},
        'Michelle':{},
        'Josh':{}
      },
      'Swain': {
        'Blanch':{},
        'Tom':{},
        'Joe':{}
      },
      'Frankovsky': {
        'Jasee':{},
        'Brian':{},
        'Margaret':{}
      }
    },
    'Sandberg': {
      'Goler': {
        'Eddie':{},
        'Julie':{},
        'Annie':{}
      },
      'Hernandez': {
        'Rowi':{},
        'Inga':{},
        'Morgan':{}
      },
      'Moissinac': {
        'Amy':{},
        'Chuck':{},
        'Vinni':{}
      },
      'Kelley': {
        'Eric':{},
        'Ana':{},
        'Wes':{}
      }
    }}};

function traverseA(data, depth = 0) {
  let indent = ' '.repeat(depth * 4);
  Object.keys(data).forEach(key => {
    console.log(indent + key);
    traverseA(data[key], depth + 1);
  });
}
//Exponential because it loops through with recursion, then again for each original key
// then again if that key has keys, and so on and so forth.


function traverseB(node, indent=0) {
  for (var key in node) {
    console.log(' '.repeat(indent), key);
    traverseB(node[key], indent + 4);
  }
}




function main(){
  //console.log('#1 - count sheep');
  //countSheep(5);

  //console.log('#2 - Array Doubler');
  //let arr = [10,5,3,4];
  //console.log(double_all(arr));

  //console.log('#3 - Reverse String');
  //console.log(reverseString("tauhida"));

  //console.log('#4 - nth Triangular Number');
  //console.log(triangle(5));

  //console.log('#5 - String Splitter');
  //console.log(split('1/21/2018', '/'));

  //console.log('#6 - Binary Representation');
  //console.log(convertToBinary(25));

  //console.log('#7 - Anagrams');
  //printAnagram("east");

  //console.log('#8 - animalHierarchy');
  //console.log(traverse(animalHierarchy, null));

  //console.log('#9 - Factorial');
  //console.log(factorial(5)); //120

  //console.log('#10 - Fibonacci');
  //console.log(fibonacci(7));

  console.log('#11 - Organization Chart');
  console.log(traverseA(organization));
  //console.log(traverseB(organization));

}
main();