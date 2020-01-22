/* eslint-disable no-alert, no-console, no-unused-vars, prefer-template */

// single line comment

/*
multi line comments
*/

// variables

const x = 1;
// x = 2 error
// x++ error
// etc.

let y = 1;
y = 2;


/* types */

const string = 'hello world'; // ' or " are valid, but we stick with single quotes for js - double quotes are for html

const number = 123.456; // decimal is optional

const bools = true; // or false

const anArray = [ 'values can have different types', true, 789 ];

const anObject = {
   keysCanBeUnquoted: true,
   'unless_they_contain_special_characters': {
      nestedObjects: []
   }
};

const emptyObject = {};

// empty values
const defaultValue = undefined;
const billionDollarMistake = null;


/* accessing arrays and objects */

// by index
const zeroBased = anArray[ 0 ];

// iteration
for( const i of anArray ) {
   console.log( i );
}

// objects: by key or using [] syntax
const nestedAccess = anObject.keysCanBeUnquoted[ 'unless_they_contain_special_characters' ].nestedObjects;


/* math */

const two = 1 + 1; // minus works as you would expect
const four = 2 * 2;
const fourtyTwo = 126 / 3;

// + is also used for string concatenation
const world = 'World';
const hw = 'Hello ' + world;


/* equality, conditionals */

/* ALWAYS use === or !== except when checking for null or undefined */
if( four === 4 ) {
   console.log( 'all is well' );
}
else if( four === 5 ) {
   alert( 'the universe is broken' );
}
else {
   alert( 'the universe is very broken' );
}

if( billionDollarMistake == null ) {
   // true if two is null or if it's undefined
}
else if( defaultValue === undefined ) {
   // but eslint wants you to use === for undefined
}


/* functions */

function square( x ) {
   return x * x;
}

// functions can be anonymous
const cube = function( x ) {
   const cubed = x * x * x;
   return cubed;
};

// calling a function
const nine = square( 3 );
