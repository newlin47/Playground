/*
************************************************
************************************************
************************************************
TESTING MATH METHODS
************************************************
************************************************
************************************************
*/

/*
************************************************
MATH.ABS FORMULA
************************************************
*/

function testAbs(num) {
  return Math.abs(num);
}

const testAbsVar = testAbs(8);

// returns 8

const testAbsVar2 = testAbs(-8);

// returns 8

/*
************************************************
MATH.ROUND FORMULA
************************************************
*/

function testRound(num) {
  return Math.round(num);
}

const testRoundVar = testRound(15.4);

// returns 15

const testRoundVar2 = testRound(15.5);

// returns 16

/*
************************************************
MATH.CEIL FORMULA
************************************************
*/

function testCeil(num) {
  return Math.ceil(num);
}

const testCeilVar = testCeil(15.4);

// returns 16

/*
************************************************
MATH.FLOOR FORMULA
************************************************
*/

function testFloor(num) {
  return Math.floor(num);
}

const testFloorVar = testFloor(15.8);

// returns 15

/*
************************************************
MATH.MAX FORMULA
************************************************
*/

function testMax(arr) {
  return Math.max(...arr);
}

const testMaxVar = testMax([1, 3, 4, 8, 25]);

// returns 25
// Math.max usually won't work on an array--use spread

const testMaxVar2 = Math.max(1, 3, 4, 8, 25);

// returns 25 as well, no spread needed since not an array given

/*
************************************************
MATH.MIN FORMULA
************************************************
*/

function testMin(arr) {
  return Math.min(...arr);
}

const testMinVar = testMin([1, 2, 8, 25, 3]);

// returns 1

const testMinVar2 = Math.min(1, 2, 3, 4);

// also returns 1

/*
************************************************
MATH.POW FORMULA
************************************************
*/

function testPow(num, exponent) {
  return Math.pow(num, exponent);
}

const testPowVar = testPow(5, 2);

// returns 25

const testPowVar2 = Math.pow(5, 3);

// returns 125

/*
************************************************
MATH.SQRT FORMULA
************************************************
*/

function testSquareRoot(num) {
  return Math.sqrt(num);
}

const testSquareRootVar = testSquareRoot(25);

// returns 5

const testSquareRootVar2 = Math.sqrt(81);

// returns 9
