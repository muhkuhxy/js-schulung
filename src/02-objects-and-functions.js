
/*
Exercise 1: Implement function adviser
*/

/**
 * @param {Object} names object with keys `firstName` and `lastName`
 * @return {Object} an object with the following properties:
 * - fullName: method that returns firstName and lastName concatenated
 * - clients: array of the adviser's clients
 * - addClient: method that takes the client's name and adds it to the adviser's client list
 * - isAdviserOfTheMonth: method checks if the client list is greater than 5
 */
function adviser( names ) {}

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

function findAdviserByName( advisers, searchString ) {}

/*
Exercise 4: Implement function `findAdviser`. It's more general than `findAdviserByName` as it should take
an array of advisers and a function which takes a single adviser and returns if the adviser is a match or not.
Subsequently, change your implementation of `findAdviserByName` to use `findAdviser`.
*/

// predicateFunction is something like `function( adviser ) { return adviser.isAdviserOfTheMonth }`
function findAdviser( advisers, predicateFunction ) {}

/*
Exercise 5: Change implementation of findAdviser to use the builtin method `filter` on arrays.
*/

export {
   adviser,
   findAdviser,
   findAdviserByName
};

