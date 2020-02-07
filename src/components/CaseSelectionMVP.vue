<template>
   <div>
      <h1>Case Selection MVP</h1>
      <p>
         Hello, {{ adviserName }}! <!-- replace with the current advisers name -->
      </p>
      <h2>Clients</h2>
      <table class="table">
         <thead>
            <tr>
               <th>Client Id</th>
               <th>Name</th>
               <th></th>
            </tr>
         </thead>
         <tbody>
            <!-- use v-for to iterate over the clients:
               https://vuejs.org/v2/guide/list.html
            -->
            <tr v-for="client in clients" :key="client.clientId">
               <td>{{ client.clientId }}</td>
               <td>{{ client.name }}</td>
               <td><button @click="gotoFactFind(client.clientId)" class="btn btn-primary">New</button></td>
            </tr>
         </tbody>
      </table>
   </div>
</template>

<script>
import { loadAdvisers, getCurrentAdviser, getClients } from '../lib';

export default {
   data() {
      // to be reactive, properties have to exist from the very beginning
      // https://vuejs.org/v2/guide/reactivity.html
      return {
         currentAdviser: null,
         clients: []
      };
   },
   computed: {
      adviserName() {
         return this.currentAdviser && this.currentAdviser.firstName;
      }
   },
   async created() {
      // Hook for when the component is loaded.
      // Load the current adviser and his clients.
      // You will need to load all advisers to
      // look up the name of the current adviser.
      const advisers = await loadAdvisers();
      const { id } = await getCurrentAdviser();
      this.currentAdviser = advisers.find( x => x.id === id );
      const clients = await getClients( id );
      this.clients = clients;
   },
   methods: {
      gotoFactFind( clientId ) {
         this.$router.push( { name: 'factFind', params: { clientId } } );
      }
   }

};
</script>
