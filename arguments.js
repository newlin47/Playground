/*
************************************************
************************************************
************************************************
USING ARGUMENTS IN DIFFERENT WAYS
************************************************
************************************************
************************************************
*/

const testObject = {
  name: "Ethan",
  age: 38,
  location: "NYC",
  education: "Master degree",
  relationship: "married",
};

const testObject2 = {
  name: "Mike",
  age: 37,
  location: "DC",
  education: "PHD",
  relationship: "single",
};

const testArrOfObjs = [testObject, testObject2];

/*
************************************************
USING ARGUMENTS AS REST PARAMETERS
USING PARAMETERS AS AN ARRAY
************************************************
*/

function testRestParam(...theArgs) {
  return theArgs.reduce(function (accum, currVal) {
    accum += currVal;
    return accum;
  }, 0);
}

const testRestParamVar = testRestParam(1, 2, 3, 4);

// returns 10

/*
Unlike the overall "arguments" object, spread then arguments variable
allows the creation of a normal or regular array with all array methods
possible directly on it
*/

function testRestParam2(...theArgs) {
  return theArgs;
}

const testRestParamVar2 = testRestParam2({ a: 1, b: 2 }, { c: 3, d: 4, e: 5 });

/*
************************************************
USING ARGUMENTS AS FUNCTIONS TO BE CALLED
************************************************
*/

function testFuncRun(func) {
  return func();
}

// takes a function as an argument and returns it (invokes it)

function testFunc() {
  return "Running successfully!";
}

// pure function that returns a string, no parameters

const testFuncRunVar = testFuncRun(testFunc);

// returns "Running successfully!"

/*
***********************************************
CHANGING ARGUMENTS AFTER GIVEN
REST ARGUMENTS LOGIC
...restArgs
***********************************************
*/

function minus(a, b) {
  return a - b;
}
// callback function to be used

function divide(a, b) {
  return a / b;
}

function swapper(func, ...theArgs) {
  let flipArgs = theArgs.reverse();
  return func(...flipArgs);
}

/*
uses spread notation to take a callback function and a series of arguments
it then uses those arguments as an array using rest args
it then uses rest args like a regular array to reverse the arguments
then returns using the given callback function and re-spreads the values into it
*/

/*
 ************************************************
 ************************************************
 */

/*
 ***********************************************

 ***********************************************
 */

/*
 ************************************************
 ************************************************
 */

/*
 ************************************************
 ************************************************
 */

/*
 ************************************************
 ************************************************
 /

/*
 ************************************************
 ************************************************
 */

/*
 ************************************************
 ************************************************
 */
