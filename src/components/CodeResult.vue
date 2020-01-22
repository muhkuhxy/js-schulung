<template>
   <div class="CodeResult">
      Code:
      <vue-code-highlight>{{ code }}</vue-code-highlight>Result:
      <pre
         class="result"
         :class="asExpected ? 'ok' : 'wrong'"
      >Expected: {{ stringify(expected) }}
Received: {{stringify(result) }}</pre>
   </div>
</template>

<script>
import { component as VueCodeHighlight } from 'vue-code-highlight';

export default {
   components: {
      VueCodeHighlight
   },
   props: {
      code: String,
      expected: [ String, Object, Array, Number ],
      result: Object
   },
   computed: {
      asExpected() {
         return JSON.stringify( this.result ) === JSON.stringify( this.expected );
      }
   },
   methods: {
      stringify( what ) {
         if( what === undefined ) {
            return 'undefined';
         }
         else if( what === null ) {
            return 'null';
         }
         return JSON.stringify( what );
      }
   }
};
</script>

<style lang="scss" scoped>
pre {
   padding: 1rem;
   white-space: pre-wrap;
   overflow-wrap: break-word;
   &.ok {
      background-color: limegreen;
   }
   &.wrong {
      background-color: lightcoral;
   }
}
</style>
