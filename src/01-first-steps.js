/*eslint prefer-template: off */

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

function greet( adviser ) {
   return 'Hello, ' + ( adviser ? adviser : 'Adviser' );
}


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

> displayEnumValue('whatever')
-> null
*/

function displayEnumValue( key ) {
   return {
      C: 'Main client',
      S: 'Spouse/Partner',
      J: 'Jointly held'
   }[ key ];
}


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

function sum( values ) {
   let summed = 0;
   for( const value of values ) {
      summed += value;
   }
   return summed;
}


/*
Excercise 4:
Implement FizzBuzz: Write a function `FizzBuzz`, that returns an array with the numbers 1 to 100, but:
- If a number is divisible by 3, use 'Fizz' instead of the number
- If a number is divisible by 5, use 'Buzz' instead of the number
- If a number is divisible by both 3 and 5, print 'FizzBuzz' instead of the number

Hint: print using `console.log( someValue )`

Example:
> FizzBuzz()
-> [
   1,
   2,
   'Fizz',
   4,
   'Buzz',
   'Fizz',
   7,
   8,
   'Fizz',
   'Buzz',
   11,
   'Fizz',
   13,
   14,
   'FizzBuzz',
   ...
]
*/

function fizzBuzz() {
   const result = [];
   let i = 1;
   while( i <= 100 ) {
      if( i % 15 === 0 ) {
         result.push( 'FizzBuzz' );
      }
      else if( i % 3 === 0 ) {
         result.push( 'Fizz' );
      }
      else if( i % 5 === 0 ) {
         result.push( 'Buzz' );
      }
      else {
         result.push( i );
      }
      i++;
   }
   return result;
}

export {
   greet as g,
   displayEnumValue,
   sum,
   fizzBuzz
};
