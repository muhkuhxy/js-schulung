<template>
   <div id="app">
      <section>
         <h2>Hat JavaScript (JS) Typen?</h2>

         <p>Wikipedia:</p>
         <blockquote>[JS ist] eine dynamisch typisierte, objektorientierte, aber klassenlose Skriptsprache.</blockquote>
      </section>

      <section>
         <h2>Wieso hat JS dann einen so schlechten Ruf?</h2>

         <img
            src="https://i.redd.it/h7nt4keyd7oy.jpg"
            alt="JS reference vs. good parts"
         />
      </section>

      <section>
         <blockquote>
            [JS ist] eine
            <strong>dynamisch typisierte</strong>, objektorientierte,
            aber klassenlose Skriptsprache.
         </blockquote>
      </section>

      <section>
         <h2>Beispiele für komische Auswüchse</h2>
         <vue-code-highlight>
            <pre>let i = 1;
// some code
i = i + ""; // oops! automatische konvertierung number -> string
i + 1;
i - 1;

let j = "1";
j++;

let k = "1";
k += 1;

[1,5,20,10].sort()</pre>
         </vue-code-highlight>
         <p>Solange man aber keinen Quatsch mit Zahlen und Strings macht funktioniert das meistens ganz gut.</p>
      </section>

      <section>
         <h2>Mögliche Konvertierungen</h2>
         <vue-code-highlight>
            <pre>const toBoolean = !!123

const toString = 123 + ""

const toNumber = parseInt('123') // oder parseFloat, Number - Vorsicht vor NaN!</pre>
         </vue-code-highlight>
      </section>

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


      <section>
         <h2>Truthiness</h2>
         <p>Völlig gültiger JS Code:</p>
         <vue-code-highlight>
            <pre>const text = 'blub';
if ( text ) {
   // code
}</pre>
         </vue-code-highlight>
      </section>

      <section>
         <h2>Was ist truthy?</h2>
         <p>Alles, was nicht falsy ist.</p>
         <vue-code-highlight>
            <pre>// Falsy
false, 0, '', null, undefined, NaN

// Jeder andere Wert ist truthy, also auch:
[], {}, 1, '0', 'null' etc.</pre>
         </vue-code-highlight>

      </section>

      <section>
         <h2>Objects, methods and such</h2>
         <p>
            functions können auf this zugreifen, dann ist es eine methode.
            this keyword ist aber komisch

            aside: object keys always stringified
         </p>

      </section>

      <section>
         <h2>Yes, JavaScript is a Lisp</h2>
         <p>
            Wie schon gesehen, functions als Werte in objects.
            Auch als parameter von functions, Rückgabewert, rekursiv
         </p>

         <p>Exercises</p>

         <ul>
            <li>map, filter, reduce?</li>
            <li>ggt algo?</li>
         </ul>

      </section>

      <section>
         <h2>Neuerungen von es5 und es6</h2>
         <ul>
            <li>let/const</li>
            <li>modules</li>
            <li>arrow functions</li>
            <li>desctructuring</li>
            <li>object property shorthand</li>
            <li>method properties</li>
            <li>rest/spread operator</li>
            <li>template strings</li>
            <li>async/await</li>
            <li>default parameter values</li>
         </ul>
         Außerdem:
         <ul>
            <li>Promises</li>
            <li>Map/Set Typen</li>
            <li>Classes</li>
            <li>Getters/Setters</li>
            <li>Symbols</li>
            <li>Generators</li>
         </ul>
      </section>

      <section>
         <p>Beispiele</p>
         <p>Exercises</p>
         <p>unit tests selbst schreiben?</p>
         <p>debugging</p>
      </section>

      <section>
         <h2>vue</h2>
         <p>selber component(s) implementieren</p>
         <p>router hinzufügen</p>
         <p>store benutzen</p>
         <p>notes: reactivity</p>
      </section>
   </div>
</template>

<script>
import { component as VueCodeHighlight } from 'vue-code-highlight';
import 'vue-code-highlight/themes/prism-tomorrow.css';
import { greet, displayEnumValue, sum, fizzBuzz } from '@/01-first-steps';
import CodeResult from '@/components/CodeResult';
import { range } from '@/lib';

const components = {
   CodeResult,
   VueCodeHighlight
};

export default {
   components,
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

<style lang="scss">
#app {
   font-family: "Avenir", Helvetica, Arial, sans-serif;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
   // text-align: center;
   color: #2c3e50;
}

#nav {
   padding: 30px;

   a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
         color: #42b983;
      }
   }
}

section + section {
   margin-top: 10rem;
}

.CodeResult + .CodeResult {
   margin-top: 3rem;
}

img {
   max-width: 50%;
}
</style>
