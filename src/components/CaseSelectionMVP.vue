<template>
   <div>
      <h1>Case Selection MVP</h1>
      <p>
         Hello, Horst! <!-- replace with the current advisers name -->
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
            <tr>
               <td>1234</td>
               <td>Jai Wilks</td>
               <td><button class="btn btn-primary">New</button></td>
            </tr>
            <tr>
               <td>5678</td>
               <td>Evan Smith</td>
               <td><button>Resume</button></td>
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
         // TODO klappt das mit null?
         currentAdviser: null,
         clients: []
      };
   },
   created() {
      // Hook for when the component is loaded.
      // Load the current adviser and his clients.
      // You will need to load all advisers to
      // look up the name of the current adviser.
   }
};
</script>
