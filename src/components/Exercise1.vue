<template>
   <div>
      <h1>JS Basics</h1>
      <section>
         <h2>Exercise 1</h2>
         <CodeResult
            code="greet()"
            expected="Hello, Adviser"
            :result="greet()"
         />
         <CodeResult
            code="greet( 'Horst' )"
            expected="Hello, Horst"
            :result="greet('Horst')"
         />
      </section>
      <section>
         <h2>Exercise 2</h2>
         <CodeResult
            code="displayEnumValue( 'C' )"
            expected="Main client"
            :result="displayEnumValue( 'C' )"
         />
         <CodeResult
            code="displayEnumValue( 'S' )"
            expected="Spouse/Partner"
            :result="displayEnumValue( 'S' )"
         />
         <CodeResult
            code="displayEnumValue( 'J' )"
            expected="Jointly held"
            :result="displayEnumValue( 'J' )"
         />
         <CodeResult
            code="displayEnumValue( 'whatever' )"
            :expected="undefined"
            :result="displayEnumValue( 'whatever' )"
         />
      </section>
      <section>
         <h2>Exercise 3</h2>
         <CodeResult
            code="sum( [ 1, 2, 3 ] )"
            :expected="6"
            :result="sum( [1, 2, 3] )"
         />
         <CodeResult
            code="sum( [] )"
            :expected="0"
            :result="sum([])"
         />
         <CodeResult
            code="sum( [1, null, 2] )"
            :expected="3"
            :result="sum([1, null, 2])"
         />
      </section>
      <section>
         <h2>Exercise 4</h2>
         <CodeResult
            code="fizzBuzz()"
            :expected="fizzBuzzExpected"
            :result="fizzBuzz()"
         />
      </section>
   </div>
</template>

<script>
import { g as greet, displayEnumValue, sum, fizzBuzz } from '@/01-first-steps';
import CodeResult from '@/components/CodeResult';
import { range } from '@/lib';

export default {
   components: {
      CodeResult
   },
   methods: {
      greet,
      displayEnumValue,
      sum,
      fizzBuzz
   },
   computed: {
      fizzBuzzExpected() {
         // eslint-disable-next-line no-nested-ternary
         return range( 100 ).map( x => x % 15 === 0 ? 'FizzBuzz' : x % 3 === 0 ? 'Fizz' : x % 5 === 0 ? 'Buzz' : x );
      }
   }
};
</script>
