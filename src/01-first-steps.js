
/*
Excercise 1:
Write a function `greet` that greets somebody.
It takes a optional name as parameter and, if present, uses that.
Otherwise it should greet 'Adviser'
Example:
> greet()
-> 'Hello, Adviser'

> greet( 'Horst' )
-> 'Hello, Horst'
*/

function greet() {}


/*
Excercise 2:
Write a function `displayEnumValue` that converts an enum value to a readable string.
The mapping should be hardcoded somewhere inside/outside the function.

Example:
> displayEnumValue('C')
-> 'Main client'

> displayEnumValue('S')
-> 'Spouse/Partner'

> displayEnumValue('J')
-> 'Jointly held'

> displayEnumValue('Anything else')
-> null
*/

function displayEnumValue() {}


/*
Excercise 3:
Write a function `sum` that, given an array, sums up the values.
It should be null tolerant.

Example:
> sum([1, 2, 3])
-> 6

> sum([])
-> 0

> sum([1, null, 2])
-> 3
*/

function sum() {}


export {
   greet,
   displayEnumValue,
   sum
};
