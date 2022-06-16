/*
************************************************
************************************************
************************************************
TESTING OBJECT CREATION METHODS
************************************************
************************************************
************************************************
*/

/*
************************************************
FACTORY FUNCTION FORMULA
************************************************
*/

const protoObj = {
  // methods go here...
};

function factoryFunction() {
  const newInstance = Object.create(protoObj);
  // add properties to your new object
  return newInstance;
}
// the arguments or parameters are left blank

/*
************************************************
CONSTRUCTOR FUNCTION FORMULA
************************************************
*/

/*
Constructor functions create an 'instance' of an object
Often an object literal
Convention is to use a capital first letter
Constructor functions set the 'this' to the instance of the function
Methods/formulas attached inside the constructor function will
appear on the object itself.
*/
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.locateAdd = function (loc) {
    this.location = loc;
  };
  this.updAge = function (age) {
    this.age = age;
  };
}

/*
Methods/formulas can be attached to constructor functions
outside the code block of the function using the 
Consructor.prototype.newMethod syntax
These methods appear one step up the prototype chain
This limits the number of keys/properties on the object itself
*/

Person.prototype.updName = function (name) {
  this.name = name;
};

/*
Defining feature of a constructor function is that it is called/
invoked using the 'new' operator using this syntax:
new Constructor(parameter);
*/

const examplePerson = new Person("Ethan");

/*
Methods on the examplePerson object can be used now
like
examplePerson.updName('John');
Would update the examplePerson object key name to be 'John'
*/

/*
************************************************
CLASS FORMULAS
************************************************
*/

class testClass {
  // must define constructor first for class object
  constructor(name) {
    this.name = name;
  }
  setAge(age) {
    this.age = age;
  }
  setLocation(loc) {
    this.location = loc;
  }
  setOccup(occ) {
    this.occupation = occ;
  }
}

// New class object instances invoked with new keyword
const testClassVar = new testClass("Ethan");

// methods work on new testClassVar object created from class
// testClassVar.age(38)
// returns object with age proprty updated to 38

class testClassChild extends testClass {
  constructor(name, special) {
    super(name);
    // subclass must pass through paramaters using super keyword immediately
    this.specialty = special;
  }
  updSpecialty(spec) {
    this.specialty = spec;
  }
}

const testClassChildVar = new testClassChild("Johnny", "programmer");

// returns testClassChild {name: 'Johnny', specialty: 'programmer'}
// has access to the methods setAge and such on testClass
