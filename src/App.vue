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

.bg_blue
  background: rgba(163, 195, 255, 0.1)

.icon
  background-repeat: no-repeat
  background-position: center center
  display: inline-block
  height: 50px
  width: 50px

.ic-done
  background-image: url("@/assets/img/bg/material-symbols_done-rounded.png")
  height: 30px
  width: 40px

.main
  margin-top: 95px

@media (max-width: 768px)
  .main
    margin-top: 77px
  .icon
    background-size: 30px 30px
    height: 30px
    width: 30px

@media (max-width: 575px)
  .main
    margin-top: 64px

</style>
