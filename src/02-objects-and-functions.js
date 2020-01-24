/*eslint prefer-template: off, object-shorthand: off, prefer-arrow-callback: off */

/*
Exercise 1: Implement function adviser
It should take a single parameter `names`, which is an object with keys `firstName` and `lastName`.
It should return an object with the following properties:
- fullName: method that returns firstName and lastName concatenated
- clients: array of the adviser's clients
- addClient: method that takes the client's name and adds it to the adviser's client list
- isAdviserOfTheMonth: method checks if the client list is greater than 5
*/
function adviser( names ) {
   const clients = [];
   return {
      fullName: function() {
         return names.firstName + ' ' + names.lastName;
      },
      clients: clients,
      addClient: function( name ) {
         clients.push( name );
      },
      isAdviserOfTheMonth: function() {
         return clients.length >= 5;
      },
      nameContains: function( search ) {
         return this.fullName().includes( search );
      }
   };
}

/*
Exercise 1.5: Add unit tests for `adviser`.
Open file tests/unit/02-objects-and-functions.spec.js
Add `describe` and `it` blocks for the other properties with appropriate tests.
They can be nested arbitrarily deep.
`beforeEach` are run in order of scope for each `it` test in the enclosed scope(s).

Run the tests with
> npm run test
for a single run or
> npx vue-cli-service test:unit --watch
for continuous testing
*/

/*
Exercise 2: Add method `nameContains` to adviser.
The method should check if the adviser's fullName contains a given string.
Hint: use the builtin method `includes` defined on strings.
Feel free to place the function where you see fit.

function nameContains( searchString ) { ... }
*/


/*
Note: The following aren't methods but straight up functions again.
*/


/*
Exercise 3: Implement function `findAdviserByName`.
It should search the given array for advisers whose name contains the given string and
return an array of matching objects.
*/

function findAdviserByName( advisers, searchString ) {
   const result = [];
   for( const adviser of advisers ) {
      if( adviser.fullName().includes( searchString ) ) {
         result.push( adviser );
      }
   }
   return result;
}

/*
Exercise 4: Implement function `findAdviser`. It's more general than `findAdviserByName` as it should take
an array of advisers and a function which takes a single adviser and returns if the adviser is a match or not.
Subsequently, change your implementation of `findAdviserByName` to use `findAdviser`.
*/

// predicateFunction is something like `function( adviser ) { return adviser.isAdviserOfTheMonth() }`
function findAdviser( advisers, predicateFunction ) {
   const result = [];
   for( const adviser of advisers ) {
      if( predicateFunction( adviser ) ) {
         result.push( adviser );
      }
   }
   return result;
}

function findAdviserByName2( advisers, searchString ) {
   return findAdviser( advisers, adviser => {
      return adviser.fullName().includes( searchString );
   } );
}


/*
Exercise 5: Change implementation of findAdviser to use the builtin method `filter` defined on arrays.
*/
function findAdviserFilter( advisers, predicateFunction ) {
   return advisers.filter( predicateFunction );
}


/*
Exercise 6: Implement function `getNames`.
It should take an array of advisers and return an array of full names.
Hint: Use the builtin method `map` defined on arrays.
*/
function getNames( advisers ) {
   return advisers.map( function( adviser ) { return adviser.fullName(); } );
}

export {
   adviser,
   findAdviser,
   findAdviserByName,
   getNames
};

