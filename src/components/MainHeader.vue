<template>
  <header>
    <div class="container">
      <div v-if="screenWidth > 768" class="header-desktop">
        <div class="row">
          <div class="col-lg-3 col-md-3">
            <router-link :to="{name:'Home', params:{locale:$i18n.locale}}" class="logo">
              <img src="@/assets/img/logo.svg" class="img-fluid" alt="RoboCleaner">
              <span>RoboCleaner</span>
            </router-link>
          </div>
          <div class="col-lg-7 col-md-8">
            <div class="top-menu">
              <ul>
                <li><router-link :to="{name:'Home', params:{locale:$i18n.locale}, hash:'#block_screenshots'}">{{ $t("header.screenshots") }}</router-link></li>
                <li><router-link :to="{name:'Home', params:{locale:$i18n.locale}, hash:'#block_why_robo_cleaner'}" class="long-a">{{ $t("header.why_robo_cleaner") }}</router-link></li>
                <li><router-link :to="{name:'Home', params:{locale:$i18n.locale}, hash:'#block_subscribe'}">{{ $t("header.subscribe") }}</router-link></li>
                <li><router-link :to="{name:'Home', params:{locale:$i18n.locale}, hash:'#block_plans'}">{{ $t("header.plans") }}</router-link></li>
                <li><a href="https://apps.apple.com/us/app/robocleaner/id1603385704" class="download check_download_link">{{ $t("header.download") }}</a></li>
              </ul>
            </div>
          </div>
          <div class="col-lg-2 col-md-1">
              <change-language></change-language>
          </div>
        </div>

      </div>
      <div v-else class="header-mobile">
        <router-link class="logo" :to="{name:'Home', params:{locale:$i18n.locale}}">
          <img src="@/assets/img/logo.svg" class="img-fluid" alt="RoboCleaner">
          <span>RoboCleaner</span>
        </router-link>
        <div class="mobile-top-menu">
          <nav class="navbar navbar-dark">
            <button @click="isOpenMobileMenu = !isOpenMobileMenu"
                    class="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
          </nav>
          <div class="collapse" :class="{show:isOpenMobileMenu}">
            <ul>
              <li @click="isOpenMobileMenu = false"><router-link :to="{name:'Home', params:{locale:$i18n.locale}, hash:'#block_screenshots'}">{{ $t("header.screenshots") }}</router-link></li>
              <li @click="isOpenMobileMenu = false"><router-link :to="{name:'Home', params:{locale:$i18n.locale}, hash:'#block_why_robo_cleaner'}">{{ $t("header.why_robo_cleaner") }}</router-link></li>
              <li @click="isOpenMobileMenu = false"><router-link :to="{name:'Home', params:{locale:$i18n.locale}, hash:'#block_subscribe'}">{{ $t("header.subscribe") }}</router-link></li>
              <li @click="isOpenMobileMenu = false"><router-link :to="{name:'Home', params:{locale:$i18n.locale}, hash:'#block_plans'}">{{ $t("header.plans") }}</router-link></li>
              <li><a href="https://apps.apple.com/us/app/robocleaner/id1603385704" class="download check_download_link">{{ $t("header.download") }}</a></li>
            </ul>
            <change-language></change-language>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import ChangeLanguage from "@/components/ChangeLanguage.vue"

export default {
  name: "MainHeader",
  data() {
    return {
      isOpenMobileMenu: false,
      screenWidth: 0,
    };
  },
  mounted() {
    this.updateScreenWidth();
    this.onScreenResize();
  },
  methods: {
    onScreenResize() {
      window.addEventListener("resize", () => {
        this.updateScreenWidth();
      });
    },
    updateScreenWidth() {
      this.screenWidth = window.innerWidth;
    }
  },
  components: {
    ChangeLanguage
  }
}
</script>

<style lang="sass">

header
  background: linear-gradient(89.91deg, #8080E5 -1.36%, #828EE5 11.92%, #849CE4 31.66%, #86AAE4 50.1%, #88B8E4 71.71%, #8AC6E3 88.38%, #8CD4E3 103.19%)
  //-webkit-box-shadow: 0 5px 20px 0 rgba(119,119,119,1)
  //-moz-box-shadow: 0 5px 20px 0 rgba(119,119,119,1)
  //box-shadow: 0 5px 20px 0 rgba(119,119,119,1)
  position: fixed
  top: 0
  height: 95px
  width: 100%
  z-index: 10
  a
    color: white

.header-desktop
  padding-top: 18px
  .logo
    display: block
    font-size: 16px
    font-weight: 500
    padding-top: 6px
    img
      padding-right: 10px
      margin-top: 6px
  .top-menu
    text-align: center
    ul
      display: flex
      display: -webkit-flex
      list-style: none
      justify-content: space-evenly
      margin-bottom: 0
      padding: 5px 0
    li
      display: flex
      display: -webkit-flex
      flex-direction: column
      font-size: 15px
      font-weight: 500
      -webkit-flex-direction: column
      text-align: center
      &:first-child
        padding-left: 0
      &:last-child
        padding-right: 0
        padding-left: 20px
    a
      padding: 12px 8px
    .download
      border: 1px solid white
      border-radius: 8px
      padding: 11px 18px
  .change-language
    margin-top: 20px

.header-mobile
  display: table
  padding: 10px 15px 0 15px
  width: 100%
  > div
    display: table-cell
    width: 50%
    vertical-align: top
  .logo
    display: table-cell
    padding-top: 10px
    padding-bottom: 15px
    img
      height: 30px
  .navbar
    height: 56px
  button
    position: absolute
    right: 0
    &:focus
      outline: none
  ul
    font-size: 17px
    list-style: none
    padding-right: 0
  .change-language
    margin-left: 40px
    margin-bottom: 16px

@media (max-width: 992px)
  .header-desktop
    .logo
      font-size: 14px
      padding-top: 3px
    .top-menu li
      font-size: 14px
      a
        padding: 12px
      .long-a
        padding: 5px 12px
    .change-language
      position: fixed
      .tooltip-lang_icon
        display: none
      .tooltip-lang_content
        margin-left: -42px

@media (max-width: 768px)
  header
    height: auto

@media (max-width: 575px)
  header
    padding-top: 5px

  .header-mobile .logo img
      padding-right: 6px

</style>
