<template>
  <change-language></change-language>
  <br>
  <router-link to="/">{{ $t("menu.home") }}</router-link>
  <br>
  <router-link to="/contact">{{ $t("menu.contact") }}</router-link>
  <br>
  <router-link to="/privacy">{{ $t("menu.privacy") }}</router-link>
  <br>
  <router-link to="/terms-of-use">{{ $t("menu.terms_of_use") }}</router-link>
  <br>
  <RouterView />
</template>

<script>
import ChangeLanguage from "@/components/ChangeLanguage.vue";
import {RouterLink} from "vue-router";
import {RouterView} from "vue-router";

export default {
  name: 'App',
  components: {
    ChangeLanguage,
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
