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

const clients = [
   {
      clientId: 1234,
      name: 'Jai Wilks',
      adviser: 'hmueller',
      factFindId: 1,
      personalDetails: {
         occupation: 'carpenter',
         birthDate: '2000-01-19'
      }
   },
   {
      clientId: 5678,
      name: 'Evan Smith',
      adviser: 'hmueller',
      factFindId: 2,
      personalDetails: {
         occupation: 'programmer',
         birthDate: '1950-02-10'
      }
   },
   {
      clientId: 91011,
      name: 'Kayden Millar',
      adviser: 'hmueller',
      factFindId: 3,
      personalDetails: {
         occupation: 'unemployed',
         birthDate: '2005-05-05'
      }
   },
   {
      clientId: 987,
      name: 'Jack Clark',
      adviser: 'faschmitz',
      factFindId: 4,
      personalDetails: {
         occupation: 'plumber',
         birthDate: '1990-10-11'
      }
   },
   {
      clientId: 654,
      name: 'Peter Parker',
      adviser: 'faschmitz',
      factFindId: 5,
      personalDetails: {
         occupation: 'reporter',
         birthDate: '1940-09-12'
      }
   },
   {
      clientId: 321,
      name: 'Steve Rogers',
      adviser: 'faschmitz',
      factFindId: 6,
      personalDetails: {
         occupation: 'soldier',
         birthDate: '1920-03-15'
      }
   }
];

export function getClients( adviserId ) {
   return promise(
      clients.filter( _ => _.adviser === adviserId )
         .map( _ => {
            const { clientId, name } = _;
            return { clientId, name };
         } )
   );
}

export function getFactFindData( clientId ) {
   return promise(
      clients.find( _ => _.clientId === parseInt( clientId, 10 ) )
         .map( _ => {
            const { factFindId, personalDetails } = _;
            return { factFindId, personalDetails };
         } )

   );

}
