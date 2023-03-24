<template>
  <main-header></main-header>
  <div class="main">
    <RouterView />
  </div>
  <main-footer></main-footer>
</template>

<script>
import MainFooter from "@/components/MainFooter.vue";
import MainHeader from "@/components/MainHeader.vue";
import {RouterView} from "vue-router";

export default {
  name: 'App',
  components: {
    MainFooter,
    MainHeader,
    RouterView
  }
}
</script>

<style lang="sass">
body
  font-family: 'Nunito', sans-serif
  margin: 0

.main
  margin-top: 95px

@media (max-width: 768px)
  .main
    margin-top: 77px

@media (max-width: 575px)
  .main
    margin-top: 64px

</style>
