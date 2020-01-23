<template>
   <div>
      <!-- the header from CaseSelectionMVP has been extracted to here -->
      <h1>Case Selection MVP</h1>
      <p>
         Hello, {{ adviserFirstName }}
      </p>
      <CaseSelectionMVP />
   </div>
</template>

<script>
import CaseSelectionMVP from '@/components/CaseSelectionMVP';

export default {
   components: {
      CaseSelectionMVP
   },
   data() {
      return {
         // should come from a getter instead
         currentAdviser: null
      };
   },
   async created() {
      // here we need to initialize currentAdviser,
      // but that already happns in the CaseSelectionMVP component.
      // however, we don't want to copy paste the code and we also don't want to load everything twice.
      // make the code from CaseSelectionMVP.created into one or more action, that is called from here.
      // use getters to access the data from the store in both components

      // bonus points for adapting FactFindMVP to the store as well
   },
   computed: {
      adviserFirstName() {
         return this.currentAdviser ? this.currentAdviser.firstName : null;
      }
   }
};
</script>
