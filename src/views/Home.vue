<template>
  <div>
    <div><router-link to="/exercise1">Exercise 1 - JS Basics</router-link></div>
    <div><router-link to="/exercise2">Exercise 2 - Objects and Functions</router-link></div>
    <div><router-link to="/exercise3">Exercise 3 - Syntactic Sugar</router-link></div>
    <div><router-link to="/case-selection-mvp">Exercise 4 - Vue Basics</router-link></div>
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

