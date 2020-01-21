/* eslint-disable no-alert, no-console, no-unused-vars */

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

const arrays = [ 'values can have different types', true, 789 ];

const objects = {
   keysCanBeUnquoted: true,
   'unless_they_contain_special_characters': {
      nestedObjects: []
   }
};

const emptyObject = {};

// empty values
const defaultValue = undefined;
const billionDollarMistake = null;


/* math */

const two = 1 + 1; // minus works as you would expect
const four = 2 * 2;
const fourtyTwo = 126 / 3;


/* equality, conditionals */

if( four === 4 ) {
   console.log( 'all is well' );
}
else if( four === 5 ) {
   alert( 'the universe is broken' );
}
else {
   alert( 'the universe is very broken' );
}

/* ALWAYS use === or !== except when checking for null or undefined */

if( billionDollarMistake == null ) {
   // true if two is null or undefined
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

// const and let variables are block scoped, so the code below throws
// error: cubed is not defined
// if( cubed == null ) {
// }

// functions can be passed as parameters

const numbers = [ 1, 2, 3 ];

numbers.map( square );
// -> [1, 4, 9]

numbers.map( cube );
// -> [1, 8, 27]

// calling a function
const nine = square( 3 );
