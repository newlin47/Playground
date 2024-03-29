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

function testSlice(arr) {
  return arr.slice(3, 6);
}

const testSliceVar = testSlice([
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
]);

// returns ['d', 'e', 'f']

/*
************************************************
ARRAY.MAP FORMULA
************************************************
*/

// array.map(function (element, index, array));

function testMap(arr) {
  return arr.map(function (element) {
    return element * 2;
  });
}

const testMapVar = testMap([1, 2, 3, 4]);

// returns [2,4,6,8]

/*
************************************************
ARRAY.EVERY FORMULA
************************************************
*/

function testEvery(arr) {
  return arr.every(function (element) {
    return element <= 10;
  });
}

const testEveryVar = testEvery([1, 2, 3, 4]);

// returns true

const testEveryVar2 = testEvery([1, 2, 3, 21]);

// returns false

/*
************************************************
ARRAY.FOREACH FORMULA
************************************************
*/

function testForEach(arr) {
  return arr.forEach(function (element) {
    return element + 1;
  });
}

const testForEachVar = testForEach([8, 9, 10, 11, 12]);

/* 
************************************************
ARRAY.REDUCE FORMULA
************************************************
*/

// reduce(function(previousValue, currentValue, currentIndex, array) { /* ... */ }, initialValue)

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

function difference(arrayA, arrayB) {
  return arrayA.filter(function (obj) {
    return arrayB.indexOf(obj) == -1;
  });
}
/*
the function difference above takes two arrays
and returns a new array that contains the unique
items from ArrayA (that are not present in both).
It does not change either source array.
*/
