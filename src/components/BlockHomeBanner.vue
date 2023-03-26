<template>
  <div class="main-top">
    <div class="main-top-bg">
      <div class="container">
        <div class="row">
          <div class="col-xl-7 col-lg-7 main-top-block">
            <div class="banner">
              <h2 v-html='$t("block_home_banner.title")'></h2>
              <h4 v-html='$t("block_home_banner.desc")'></h4>
              <block-link-app :sizes="{1200:1,990:1}"></block-link-app>
              <div class="bg_iphone"> </div>
            </div>
          </div>
          <div class="col-xl-5 col-lg-5 d-none d-xl-block d-lg-block">
            <div class="bg_iphone"> </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="block-about">
    <div class="features" :class="{active:isFeatureActive}">
      <div class="container">
        <div class="features-web">
          <ul>
            <li>{{$t("block_home_banner.feature_item_1")}}</li>
            <li>{{$t("block_home_banner.feature_item_2")}}</li>
            <li>{{$t("block_home_banner.feature_item_3")}}</li>
            <li>{{$t("block_home_banner.feature_item_4")}}</li>
            <li>{{$t("block_home_banner.feature_item_5")}}</li>
            <li>{{$t("block_home_banner.feature_item_6")}}</li>
          </ul>
        </div>
        <div class="features-mob">
          <ul>
            <li>{{$t("block_home_banner.feature_item_1")}}</li>
            <li>{{$t("block_home_banner.feature_item_2")}}</li>
            <li>{{$t("block_home_banner.feature_item_3")}}</li>
          </ul>
          <ul>
            <li>{{$t("block_home_banner.feature_item_4")}}</li>
            <li>{{$t("block_home_banner.feature_item_5")}}</li>
            <li>{{$t("block_home_banner.feature_item_6")}}</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="block-about-inner">
        <div class="title">{{$t("block_home_banner.feature_title")}}</div>
        <p>{{$t("block_home_banner.feature_desc")}}</p>
        <block-link-app></block-link-app>
      </div>
    </div>
  </div>
</template>

<script>
import BlockLinkApp from "@/components/BlockLinkApp.vue";
import {ref} from "vue";
export default {
  name: "BlockHomeBanner",
  components: {
    BlockLinkApp
  },
  data() {
    let isFeatureActive = ref(false)
    setInterval(function () {
      isFeatureActive.value = !isFeatureActive.value
    }, 2000);

    return {
      isFeatureActive
    };
  }
}
</script>

<style scoped lang="sass">
.main-top-bg
  background: url("@/assets/img/bg/bg_1.png") center top no-repeat, url("@/assets/img/bg/bg_2.png") right 50% no-repeat, url("@/assets/img/bg/bg_3.png") right 40% no-repeat, url("@/assets/img/bg/bg_4.png") 45% 45% no-repeat, url("@/assets/img/bg/bg_5.png") 4% 82% no-repeat, url("@/assets/img/bg/bg_6.png") left 85% no-repeat, url("@/assets/img/bg/bg_girl_translucency2.png") 103% 0 no-repeat
  background-size: 164px 101px, 204px 197px, 102px 157px, 308px 298px, 145px 140px, 75px 101px, 640px
  padding: 0 0 40px

.main-top
  background: linear-gradient(89.91deg, #8080E5 -1.36%, #828EE5 11.92%, #849CE4 31.66%, #86AAE4 50.1%, #88B8E4 71.71%, #8AC6E3 88.38%, #8CD4E3 103.19%)
  -webkit-box-shadow: 0 5px 20px 0 rgba(119,119,119,1)
  -moz-box-shadow: 0 5px 20px 0 rgba(119,119,119,1)
  box-shadow: 0 5px 20px 0 rgba(119,119,119,1)
  color: white
  position: relative
  width: 100%
  .banner
    padding: 80px 0
    h2
      font-size: 50px
      font-weight: 700
      line-height: 65px
      padding: 10px 0
    h4
      font-size: 34px
      font-weight: 600
      margin-bottom: 70px
      margin-right: 0
      max-width: 460px
    .bg_iphone
      background: url("@/assets/img/iphones.png") no-repeat 0 center
      background-size: 550px
      display: flex
      height: 550px
      margin: -310px 0 -300px 93%
      position: relative
      width: 550px


.block-about
  background-color: white
  background-image: url('@/assets/img/bg/block2_bg1_1.png'), url('@/assets/img/bg/block2_bg2.png')
  background-position: 77% 72%, left 78%
  background-repeat: no-repeat
  background-size: auto, 70%
  z-index: 99
  &.active
    background-image: url('@/assets/img/bg/block2_bg1_2.png'), url('@/assets/img/bg/block2_bg2.png')
    background-position: right 60%, left 60%
    background-size: auto, 78%
    transition: background 0.4s step-start
  .features-web
    display: none
  .features-mob
    padding: 0 50px
  .features
    background: linear-gradient(180deg, #F0F0F0 45.29%, rgba(255, 255, 255, 0) 96.94%)
    overflow: hidden
    padding-top: 190px
    padding-bottom: 100px
    ul
      float: left
      list-style: none
      display: -webkit-flex
      justify-content: space-evenly
      margin: 0
      padding: 0
      width: 100%
      &:first-child
        margin-right: -30px
    li
      background: url("@/assets/img/bg/feature-ic.png") no-repeat top center
      font-size: 18px
      font-weight: 600
      display: flex
      display: -webkit-flex
      height: 24px
      flex-direction: column
      -webkit-flex-direction: column
      padding: 30px 0
      text-align: center
      margin-bottom: 20px
      width: 33.3%
      background-size: 30px
      -webkit-transition: background 0.5s ease, font-size 0.5s ease
      -moz-transition: background 0.5s ease, font-size 0.5s ease
      -o-transition: background 0.5s ease, font-size 0.5s ease
      transition: background 0.5s ease, font-size 0.5s ease
    &.active li
      background-size: 22px
      font-size: 13px
      -webkit-transition: background 0.5s ease, font-size 0.5s ease
      -moz-transition: background 0.5s ease, font-size 0.5s ease
      -o-transition: background 0.5s ease, font-size 0.5s ease
      transition: background 0.5s ease, font-size 0.5s ease

.block-about-inner
  padding: 55px 50px 50px 150px
  .title
    font-size: 36px
    font-weight: 600
    margin-bottom: 10px
    max-width: 410px
    span
      font-weight: 700
  p
    font-size: 18px
    max-width: 450px
    text-align: justify
  .link_app
    padding-top: 40px
    padding-right: 100px
    text-align: center


@media (max-width: 1800px)
  .main-top-bg
    background-size: 164px 101px, 204px 197px, 102px 157px, 308px 298px, 145px 140px, 75px 101px, 550px

@media (max-width: 1300px)
  .block-about
    .features-mob
      display: block
    .features-web
      display: none
  .features
    ul
      float: left
      margin: 0 0 20px
    li
      font-size: 16px
      text-align: center
      width: 33.33%

@media (max-width: 1200px)
  .main-top-bg
    background-size: 500px
  .main-top
    .banner
      padding: 50px 0
      h2
        font-size: 40px
        line-height: 50px
      h4
        font-size: 30px
        margin-bottom: 50px

  .block-about .features-mob
    padding: 0

  .block-about-inner
    padding: 100px 0 110px
    .title
      font-size: 34px
      font-weight: 600
    p
      font-size: 16px
      max-width: 330px
    .link_app
      padding-top: 20px
      padding-right: 0
      .link_app_store_qr img
        height: 90%

@media (max-width: 991px)
  .main-top
    .bg_iphone
      display: flex
      height: 380px
      width: 400px
      margin-top: -155px
      max-width: 500px
      float: right
      background-size: 100%

@media (max-width: 768px)
  .main-top-bg
    background-size: 200px
  .main-top
    .banner
      padding: 20px 0
      h2
        font-size: 36px
        line-height: 40px
        max-width: 440px
      h4
        font-size: 20px
        max-width: 300px
      .bg_iphone
        height: 250px
        width: 270px
        margin-top: -70px

  .block-about
    background-image: url('@/assets/img/bg/block2_bg1_1.png'), url('@/assets/img/bg/block2_bg2.png')
    background-position: right 65%, left 70%
    background-size: 30%, 74%
    .features
      padding-bottom: 80px

  .block-about-inner
    padding: 60px 0 110px
    .title
      font-size: 28px
    p
      max-width: 270px

@media (max-width: 575px)
  .main-top-block
    padding: 0
  .main-top-bg
    background: url("@/assets/img/bg/bg_girl_translucency3.png") -7% 100% no-repeat
    background-size: 210px
    padding: 0 0 15px
  .main-top
    .banner
      padding-top: 0
      text-align: center
      h2
        max-width: 217px
      h4
        margin: 0 auto
        max-width: 270px
        padding-bottom: 20px
      .bg_iphone
        background-size: 275px 235px
        height: 235px
        margin-top: 20px
        margin-bottom: -100px

  .block-about
    background-image: url('@/assets/img/bg/block2_bg1_1.png'), url('@/assets/img/bg/block2_bg3.png')
    background-position: 57% 85%, right 90%
    background-size: 30%, 60%
    &.active
      background-image: url('@/assets/img/bg/block2_bg1_2.png'), url('@/assets/img/bg/block2_bg3.png')
      background-position: 50% 75%, right 85%
      background-size: 50%, 60%
    .features
        display: none

  .block-about-inner
    padding: 80px 0 200px
    text-align: center
    .title
      font-size: 22px
      height: auto
      max-width: none
      line-height: 28px
      padding-bottom: 9px
    p
      margin: auto
      text-align: center
    .link_app
      display: none


</style>