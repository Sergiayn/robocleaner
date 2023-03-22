<template>
  <router-link to="/">Go to Home</router-link>
  <br>
  <router-link to="/contact">Go to contact</router-link>
  <br>
  <router-link to="/privacy">Go to privacy</router-link>
  <br>
  <router-link to="/terms-of-use">Ierms of use</router-link>
  <br>
  <RouterView />
</template>

<script>
import {RouterLink} from "vue-router";
import {RouterView} from "vue-router";

export default {
  name: 'App',
  components: {
    RouterLink,
    RouterView
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
