import { greet, displayEnumvalue, sum } from '@/01-first-steps';

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
   Object.keys( mapping ).forEach( key => xit( `maps ${key} to ${mapping[ key ]}`, () => {
      expect( displayEnumvalue( key ) ).toBe( mapping[ key ] );
   } ) );
} );

describe( 'the sum function', () => {
   xit( 'sums up the array', () => {
      expect( sum( [ 1, 2, 3 ] ) ).toBe( 6 );
      expect( sum( [] ) ).toBe( 0 );
      expect( sum( [ 1, null, 2 ] ) ).toBe( 3 );
   } );
} )
;
