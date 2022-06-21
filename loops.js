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
Renaming files practice
*/

function renamerFiles(arr) {}
