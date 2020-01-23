export function range( ceiling ) {
   const x = [];
   let i = 1;
   while( i <= ceiling ) { x.push( i++ ); }
   return x;
}

function promise( value, delay = 500 ) {
   return new Promise( resolve => {
      setTimeout( () => resolve( value ), delay );
   } );
}

export function loadAdvisers() {
   return promise( [
      {
         id: 'hmueller',
         firstName: 'Horst',
         lastName: 'Müller'
      },
      {
         id: 'fschmitz',
         firstName: 'Fritz',
         lastName: 'Schmitz'
      }
   ] );
}

export function getCurrentAdviser() {
   return promise( {
      id: 'fschmitz'
   } );
}

export function getClients( adviserId ) {
   return promise( ( {
      hmueller: [
         {
            clientId: 1234,
            name: 'Jai Wilks'
         },
         {
            clientId: 5678,
            name: 'Evan Smith'
         },
         {
            clientId: 91011,
            name: 'Kayden Millar'
         }
      ],
      fschmitz: [
         {
            clientId: 987,
            name: 'Jack Clark'
         },
         {
            clientId: '654',
            name: 'Peter Parker'
         },
         {
            clientId: 321,
            name: 'Steve Rogers'
         }
      ]
   } )[ adviserId ] );
}
