/*
************************************************
************************************************
************************************************
TESTING ARRAY METHODS
************************************************
************************************************
************************************************
*/

/*
************************************************
ARRAY.INDEXOF / ARRAY.LASTINDEXOF FORMULA
************************************************
*/

function testIndex(arr, ind) {
  return arr[ind];
}

const testIndexVar = testIndex([1, 4, 8, 10], 2);

// retuns index 2, or the integer 8

/*
************************************************
ARRAY.JOIN FORMULA
************************************************
*/

function testJoin(arr) {
  return arr.join("");
}

const testJoinVar = testJoin(["all", "given", "together"]);

// returns 'allgiventogether'

/*
************************************************
ARRAY.REVERSE FORMULA
************************************************
*/

function testReverse(arr) {
  return arr.reverse();
}

const testReverseVar = testReverse([1, 2, 3, 4, 5, 6, 7]);

// returns [7, 6, 5, 4, 3, 2, 1]

/*
************************************************
ARRAY.SORT FORMULA
************************************************
*/

function testSort(arr) {
  return arr.sort();
}

const testSortVarStr = testSort(["z", "b", "c", "u", "i", "l"]);

// returns ['b', 'c', 'i', 'l', 'u', 'z']

const testSortVarNumBlank = testSort([-10, 15, 35, 4, 8, 99, 23]);

// returns [-10, 15, 23, 35, 4, 8, 99]
// note this is not intuitive sort for numbers: still alphabetical

function actualSortNum(arr) {
  return arr.sort(function (a, b) {
    return a - b;
  });
}
const testSortVarNumActual = actualSortNum([-10, 15, 35, 4, 8, 99, 23]);

// returns [-10, 4, 8, 15, 23, 35, 99]
// note this actually shorts the numbers by which is larger
// using a simple anonymous function

/*
************************************************
ARRAY.SLICE FORMULA
************************************************
*/

/*
************************************************
ARRAY.MAP FORMULA
************************************************
*/

/*
************************************************
ARRAY.EVERY FORMULA
************************************************
*/

/*
************************************************
ARRAY.FOREACH FORMULA
*/

/* 
************************************************
ARRAY.REDUCE FORMULA
************************************************
*/

function testReduce(arr) {
  return arr.reduce(function (accum, currVal) {
    accum += currVal;
    return accum;
  }, 0);
}

const testReduceVar = testReduce([1, 2, 3, 4]);

// returns 10

/*
************************************************
ARRAY.FILTER FORMULA
************************************************
*/

function testFilter(arr) {
  return arr.filter(function (element) {
    return element > 5;
  });
}

const testFilterVar = testFilter([15, 3, 2, 25]);

// returns [15, 25]
