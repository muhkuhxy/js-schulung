<template>
   <div class="container-fluid" id="app">
      <router-view></router-view>
   </div>
</template>

<script>
import 'vue-code-highlight/themes/prism-tomorrow.css';

export default {
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
