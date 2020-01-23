<template>
  <div>
    <div><router-link :to="{ name: 'ex1' }">Exercise 1 - JS Basics</router-link></div>
    <div><router-link :to="{ name: 'ex2' }">Exercise 2 - Objects and Functions</router-link></div>
    <div><router-link :to="{ name: 'ex4' }">Exercise 4 - Vue Basics</router-link></div>
    <div><router-link :to="{ name: 'ex5' }">Exercise 5 - Vuex Store Basics</router-link></div>
  </div>
</template>

<script>
export default {
};
</script>

<style lang="scss" scoped>
  div + div {
    margin-top: 1rem;
  }
</style>

