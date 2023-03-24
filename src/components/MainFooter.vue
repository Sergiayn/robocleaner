<template>
  <change-language></change-language>

  <footer>
    <router-link to="/">{{ $t("menu.home") }}</router-link>
    <br>
    <router-link to="/contact">{{ $t("menu.contact") }}</router-link>
    <br>
    <router-link to="/privacy">{{ $t("menu.privacy") }}</router-link>
    <br>
    <router-link to="/terms-of-use">{{ $t("menu.terms_of_use") }}</router-link>
    <br>
  </footer>
</template>

<script>
import ChangeLanguage from "@/components/ChangeLanguage.vue";
import {RouterLink} from "vue-router";

export default {
  name: "MainFooter",
  components: {
    ChangeLanguage,
    RouterLink
  }
}
</script>

<style scoped lang="sass">

</style>