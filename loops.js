/*
************************************************
************************************************
************************************************
TESTING LOOPS CONCEPTS
************************************************
************************************************
************************************************
*/

/*
************************************************
BASIC LOOP FORMULA
************************************************
*/

function testDoubler(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i] * 2);
  }
  return newArr;
}

const testDoublerVar = testDoubler([1, 2, 3, 4]);

// returns [2, 4, 6, 8]

/*
************************************************
GRIDS
NESTED LOOPS
ARRAYS OF ARRAYS
************************************************
*/

function testgridDer(rows, columns) {
  let board = "";
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      board += "#";
    }
    board += "\n";
  }
  return board;
}

const testgridDerVar = testgridDer(4, 3);

// returns '###\n###\n###\n###\n'

/*
console.log(testgridDerVar); =

###
###
###
###

*/

/*
 ************************************************
 NESTED FOR LOOPS USING ARRAY METHODS
 ************************************************
 */

const emptyArray = [...Array(6)];
// creates an empty array with length of 6
// all values are undefined
// can be useful to use as a replacement for a loop
