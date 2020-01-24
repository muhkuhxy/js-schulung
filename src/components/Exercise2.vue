<template>
   <div>
      <h1>Objects and Functions</h1>
      <section>
         <h2>Exercise 1</h2>
         <CodeResult
            :code="`const fritz = adviser( { firstName: 'Fritz', lastName: 'Schmitz' } )
return fritz.fullName()`"
            expected="Fritz Schmitz"
            :result="fritz.fullName()"
         />
         <CodeResult
            code="fritz.clients"
            :expected="[]"
            :result="fritz.clients"
         />
         <CodeResult
            :code="`fritz.addClient( 'Lady Brittany' );
fritz.clients`"
            :expected="[ 'Lady Brittany' ]"
            :result="brittanyAdviser.clients"
         />
         <CodeResult
            :code="`fritz.isAdviserOfTheMonth()`"
            :expected="false"
            :result="fritz.isAdviserOfTheMonth()"
         />
         <CodeResult
            :code="`fritz.addClient( 'Lady Brittany' );
fritz.addClient( 'Lord Brittany' );
fritz.addClient( 'Ms. Brittany' );
fritz.addClient( 'Mr. Brittany' );
fritz.addClient( 'HRH Brittany' );
fritz.addClient( 'Sir Brittany' );
fritz.isAdviserOfTheMonth()`"
            :expected="true"
            :result="adviserOTM.isAdviserOfTheMonth()"
         />
      </section>
      <section>
         <h2>Exercise 2</h2>
         <CodeResult
            :code="`fritz.nameContains( 'itz' )`"
            :expected="true"
            :result="fritz.nameContains( 'itz' )"
         />
         <CodeResult
            :code="`fritz.nameContains( 'utz' )`"
            :expected="false"
            :result="fritz.nameContains( 'utz' )"
         />
      </section>
      <section>
         <h2>Exercise 3</h2>
         <CodeResult
            code="findAdviserByName( [ horst, fritz ], 'nix' )"
            :expected="[]"
            :result="findAdviserByName( 'nix' )"
         />
         <CodeResult
            code="findAdviserByName( [ horst, fritz ], 'itz' )"
            :expected="[ fritz ]"
            :result="findAdviserByName( 'itz' )"
         />
         <CodeResult
            code="findAdviserByName( [ horst, fritz ], 't' )"
            :expected="[ horst, fritz ]"
            :result="findAdviserByName( 't' )"
         />
      </section>
      <section>
         <h2>Exercise 4</h2>
         <CodeResult
            :code="`findAdviser( [ horst, fritz ], function( adviser ) {
   return adviser.isAdviserOfTheMonth()
} )`"
            :expected="[ adviserOTM ]"
            :result="findAdviserOTM"
         />
      </section>
      <section>
         <h2>Exercise 5</h2>
         <CodeResult
            :code="`getNames( [ horst, fritz ] )`"
            :expected="[ 'Horst Müller', 'Fritz Schmitz' ]"
            :result="getNames"
         />
      </section>
   </div>
</template>

<script>
import { adviser, findAdviserByName, findAdviser, getNames } from '@/02-objects-and-functions';
import CodeResult from '@/components/CodeResult';

export default {
   components: {
      CodeResult
   },
   methods: {
      findAdviserByName( name ) {
         return findAdviserByName( this.advisers, name );
      }
   },
   computed: {
      getNames() {
         return getNames( this.advisers );
      },
      advisers() {
         return [ this.horst, this.fritz ];
      },
      horst() {
         const anAdviser = adviser( { firstName: 'Horst', lastName: 'Müller' } ) || {
            fullName() {},
            isAdviserOfTheMonth() {},
            nameContains() {}
         };
         return anAdviser;
      },
      fritz() {
         const anAdviser = adviser( { firstName: 'Fritz', lastName: 'Schmitz' } ) || {
            fullName() {},
            isAdviserOfTheMonth() {},
            nameContains() {}
         };
         return anAdviser;
      },
      brittanyAdviser() {
         const anAdviser = adviser( { firstName: 'Fritz', lastName: 'Schmitz' } ) || {
            addClient() {}
         };
         anAdviser.addClient( 'Lady Brittany' );
         return anAdviser;
      },
      adviserOTM() {
         const anAdviser = adviser( { firstName: 'Fritz', lastName: 'Schmitz' } ) || {
            addClient() {},
            isAdviserOfTheMonth() {}
         };
         anAdviser.addClient( 'Lady Brittany' );
         anAdviser.addClient( 'Lord Brittany' );
         anAdviser.addClient( 'Ms. Brittany' );
         anAdviser.addClient( 'Mr. Brittany' );
         anAdviser.addClient( 'HRH Brittany' );
         anAdviser.addClient( 'Sir Brittany' );
         return anAdviser;
      },
      findAdviserOTM() {
         return findAdviser( [ this.horst, this.adviserOTM ], x => x.isAdviserOfTheMonth() );
      }
   }
};
</script>
