/* eslint-disable no-console */
import { g as greet, displayEnumValue, sum, fizzBuzz } from '@/01-first-steps';
import { range } from '@/lib';

describe( 'the greet function', () => {
   describe( 'with name argument', () => {
      it( 'greets the name', () => {
         expect( greet( 'Horst' ) ).toBe( 'Hello, Horst' );
      } );
   } );
   describe( 'without arguments', () => {
      it( 'greets "Adviser"', () => {
         expect( greet() ).toBe( 'Hello, Adviser' );
      } );
   } );
} );

describe( 'the displayEnumValue function', () => {
   const mapping = {
      C: 'Main client',
      S: 'Spouse/Partner',
      J: 'Jointly held'
   };
   Object.keys( mapping ).forEach( key => it( `maps ${key} to ${mapping[ key ]}`, () => {
      expect( displayEnumValue( key ) ).toBe( mapping[ key ] );
   } ) );
} );

describe( 'the sum function', () => {
   it( 'sums up the array', () => {
      expect( sum( [ 1, 2, 3 ] ) ).toBe( 6 );
      expect( sum( [] ) ).toBe( 0 );
      expect( sum( [ 1, null, 2 ] ) ).toBe( 3 );
   } );
} );

describe( 'the fizzBuzz function', () => {
   it( 'works as described', () => {
      const result = fizzBuzz();
      const expected =
         // eslint-disable-next-line no-nested-ternary
         range( 100 ).map( x => x % 15 === 0 ? 'FizzBuzz' : x % 3 === 0 ? 'Fizz' : x % 5 === 0 ? 'Buzz' : x );
      expect( result ).toEqual( expected );
   } );
} );
