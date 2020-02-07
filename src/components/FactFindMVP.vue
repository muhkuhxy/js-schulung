<template>
   <div v-if="factFind">
      <h1>Fact Find</h1>
      <div>Fact Find ID: {{ factFind.factFindId }}</div>
      <div>Occupation: {{ factFind.personalDetails.occupation }}</div>
      <div>Date of birth: {{ factFind.personalDetails.birthDate }}</div>
   </div>
</template>

<script>
import { getFactFindData } from '../lib';

export default {
   data() {
      return {
         factFind: null
      };
   },
   async created() {
      const { clientId } = this.$route.params;
      this.factFind = await getFactFindData( clientId );
   }
};
</script>


Implement this component.
It should be shown under the route `/fact-find/:clientId` and
load and display the small set of set of fact find data returned
by the api endpoint `getFactFindData( clientId )` - just make a bunch of divs

example fact find data:
{
   factFindId: 1,
   personalDetails: {
      occupation: 'soldier',
      birthDate: '1920-03-15'
   }
}

Add navigation from the case selection component to this one when clicking
on the button in a client row. which kind of navigation is up to you.
include the clientId as params in the `to` object, see https://router.vuejs.org/api/#to


bonus points for making the clientId parameter into a prop
see https://router.vuejs.org/guide/essentials/passing-props.html#boolean-mode
