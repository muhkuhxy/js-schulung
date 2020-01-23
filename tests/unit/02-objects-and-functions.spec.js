import { adviser } from '@/02-objects-and-functions';

describe( 'the adviser function', () => {
   describe( 'returns an object', () => {
      let result;

      beforeEach( () => {
         result = adviser( { firstName: 'Horst', lastName: 'Müller' } );
      } );

      describe( 'the fullName property', () => {

         it( 'is a function', () => {
            expect( result.fullName ).toBeInstanceOf( Function );
         } );

         it( 'concatenates the names parameter', () => {
            expect( result.fullName() ).toEqual( 'Horst Müller' );
         } );
      } );
   } );
} );
