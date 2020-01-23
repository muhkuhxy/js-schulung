import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './views/Home.vue';
import Exercise1 from '@/components/Exercise1';
import Exercise2 from '@/components/Exercise2';
import Exercise3 from '@/components/Exercise3';
import CaseSelectionMVP from '@/components/CaseSelectionMVP';

Vue.use( VueRouter );

const routes = [
   {
      path: '/',
      name: 'home',
      component: Home
   },
   {
      path: '/exercise1',
      name: 'ex1',
      component: Exercise1
   },
   {
      path: '/exercise2',
      name: 'ex2',
      component: Exercise2
   },
   {
      path: '/exercise3',
      name: 'ex3',
      component: Exercise3
   },
   {
      path: '/case-selection-mvp',
      name: 'ex4',
      component: CaseSelectionMVP
   }
];

const router = new VueRouter( {
   mode: 'hash',
   routes
} );

export default router;
