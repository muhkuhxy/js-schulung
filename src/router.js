import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './views/Home.vue';
import Exercise1 from '@/components/Exercise1';
import Exercise2 from '@/components/Exercise2';
import CaseSelectionMVP from '@/components/CaseSelectionMVP';
import CaseSelectionView from '@/views/CaseSelectionView';

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
      path: '/case-selection-mvp',
      name: 'ex4',
      component: CaseSelectionMVP
   },
   {
      path: '/case-selection-view',
      name: 'ex5',
      component: CaseSelectionView
   }
];

const router = new VueRouter( {
   mode: 'hash',
   routes
} );

export default router;
