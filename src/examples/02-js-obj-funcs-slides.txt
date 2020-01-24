////////////////////////
// SLIDE CODE //////////
////////////////////////


let myObject = {
   name: 'Horst',
   sayHello() {
      return `Hi, I'm ${this.name}`;
   }
};

myObject.sayHello();
// -> Hi, I'm Horst

function thisTest() {
   return this;
}

thisTest();
// -> undefined bzw. window Objekt


myObject = {
   thisTest
};

myObject.thisTest();
// -> myObject

myObject = {
   thisTest,
   wrapperFunction() {
      return thisTest();
   }
};

myObject.thisTest();
// -> myObject

myObject.wrapperFunction();


myObject = {
   thisTest,
   wrapperFunction() {
      return this.thisTest();
   }
};

myObject.thisTest();
// -> myObject

myObject.wrapperFunction();
// -> myObject</span>


const arrowThisTest = () => { return this; };

myObject = {
   thisTest: arrowThisTest
};

myObject.thisTest();
// -> undefined bzw. window


const anotherObject = { name: 'anotherObject' };

thisTest.call( anotherObject, 'here', 'can', 'be', 'args' );
// -> anotherObject


const somethingElse = { name: 'somethingElse' };

const boundFunction = thisTest.bind( somethingElse );

boundFunction();
// -> somethingElse


myObject = {
   123: 'hello'
};

console.log( myObject[ '123' ] );
// -> hello


myObject = {
   myFunction() {
      // ...
   }
};


function myMap( array, mapper ) {
   const result = [];
   for( const x of array ) {
      const mapped = mapper( x );
      result.push( mapped );
   }
   return result;
}

function square( x ) { return x * x; }
myMap( [ 1, 2, 3 ], square );
// -> [ 1, 4, 9 ]


function repeater( text ) {
   return function( times ) {
      return text.repeat( times );
   };
}

const helloRepeater = repeater( 'hello' );
helloRepeater( 10 );
// -> 'hellohellohellohellohellohellohellohellohellohello'
