<template>
  <footer>
    <div class="container">
      <div class="footer-inner">
        <div>
          <div class="title">{{ $t("footer.title") }}</div>
          <a class="brief" href="https://apps.apple.com/us/app/adblocker-protection/id1587657245">
            <img src="@/assets/img/footer_brief.webp" alt="AdBlocker">
            <span>AdBlocker</span>
          </a>
        </div>
        <div class="row">
          <div class="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-12">
            <div class="desc">{{ $t("footer.desc") }}</div>
          </div>
          <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
            <block-link-app :type-prod="2" :footer="true"></block-link-app>
          </div>
        </div>

        <div class="footer-bottom">
          <div class="row">
            <div class="col-xl-8 col-lg-8 col-md-8 col-sm-7 col-12">
              <div class="icons">
                <ul>
                  <li>
                    <img src="@/assets/img/footer-ico-1.webp" :alt='$t("footer.icon_1")'>
                    <span>{{ $t("footer.icon_1") }}</span>
                  </li>
                  <li>
                    <img src="@/assets/img/footer-ico-2.webp" :alt='$t("footer.icon_2")'>
                    <span>{{ $t("footer.icon_2") }}</span>
                  </li>
                  <li>
                    <img src="@/assets/img/footer-ico-4.webp" :alt='$t("footer.icon_3")'>
                    <span>{{ $t("footer.icon_3") }}</span>
                  </li>
                  <li>
                    <img src="@/assets/img/footer-ico-3.webp" :alt='$t("footer.icon_4")'>
                    <span>{{ $t("footer.icon_4") }}</span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-5 col-12">
              <div class="sub_menu">
                <ul>
                  <li><router-link :to="{name: 'TermsOfUse', params:{locale:$i18n.locale}}">{{ $t("menu.terms_of_use") }}</router-link></li>
                  <li><router-link :to="{name: 'Privacy', params:{locale:$i18n.locale}}">{{ $t("menu.privacy") }}</router-link></li>
                  <li><router-link :to="{name: 'Contact', params:{locale:$i18n.locale}}">{{ $t("menu.contact") }}</router-link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import BlockLinkApp from "@/components/BlockLinkApp.vue"
import {RouterLink} from "vue-router"

export default {
  name: "MainFooter",
  components: {
    BlockLinkApp,
    RouterLink
  }
}
</script>

<style lang="sass">

footer
  background-color: #6A6A6A
  color: white
  .title
    font-size: 16px
    font-weight: 600
    padding-top: 25px
    padding-bottom: 20px
  .brief
    display: inline-block
    color: white
    font-size: 16px
    font-weight: 500
    margin-bottom: 10px
    img
      margin-bottom: 6px
  .desc
    font-size: 16px
    font-weight: 400
    margin-bottom: 35px
    max-width: 700px
  .link_app
    margin: auto
    max-width: 220px
    text-align: right
    a
      height: 27px
      width: 94px
    &:first-child
      margin-right: 15px
  .link_app_store_qr
    font-size: 10px
    font-weight: 500
    margin-right: 0
    padding: 3px 4px
    img
      height: 70%
  .icons
    ul
      list-style: none
      display: flex
      padding: 0
      flex-direction: row
      flex-wrap: wrap
      max-width: 450px
    li
      display: flex
      flex-direction: column
      flex: 1
    img, span
      display: block
    img
      height: 42px
      margin: auto
    span
      font-size: 10px
      font-weight: 400
      max-width: 100px
      margin: auto
      text-align: center
  .sub_menu
    height: 100%
    padding-right: 40px
    ul
      align-items: center
      display: flex
      display: -webkit-flex
      max-width: 450px
      margin: auto
      list-style: none
      justify-content: space-evenly
      height: 100%
      padding: 0
    li
      display: flex
      display: -webkit-flex
      flex-direction: column
      -webkit-flex-direction: column
      text-align: center
    a
      color: white
      font-size: 12px
      font-weight: 500
  .link_app
    a
      height: 27px
      width: 94px
      &:first-child
        margin-right: 15px
  .link_app_store_qr
    font-size: 10px
    font-weight: 500
    margin-right: 0
    padding: 3px 4px
    img
      height: 70%

.footer-bottom
  padding-bottom: 20px

.footer_extra
  background-color: #474747

.footer_extra, footer.footer_extra .sub_menu a
  font-size: 15px

footer .sub_menu_extra
  padding: 25px 20px 0
  text-align: center

@media (max-width: 1200px)
  footer
    .title, .brief, .desc
      font-size: 14px
    .icons span
      font-size: 10px
    .sub_menu
      padding-right: 0
      a
        font-size: 9px
        font-weight: 400
    .link_app a
      margin-bottom: 0
  .footer_extra, footer.footer_extra .sub_menu a
    font-size: 12px

@media (max-width: 992px)
  footer
    .title, .brief, .desc
      font-size: 13px
    .link_app_store_qr
      width: auto
    .link_app
      a
        display: block
        margin: 0 0 0 auto!important
        &:first-child
          margin-bottom: 10px!important
    .sub_menu
      padding: 1px 0

.footer .sub_menu ul
  max-width: 280px


@media (max-width: 768px)
  .footer-bottom .row > div
    padding: 0 5px

  footer
    .title, .brief, .desc
      font-size: 12px
    .link_app
      margin-right: 10px
      max-width: 94px
      .link_app_store
        background-color: black
        margin: 0 0 8px
        text-align: center
        width: 94px
      .link_app_store_qr
        font-size: 9px
        padding: 3px 8px 0 0
    .icons
      img
        height: 24px
        width: 24px
      span
        font-size: 8px

@media (max-width: 575px)
  footer
    .title
      padding-bottom: 8px
    .brief
      font-weight: 400
    .desc
      font-weight: 400
      margin-bottom: 24px
      text-align: left
    .icons-mobile span
      font-size: 8px
    .icons
      display: none
    .icons-mobile
      display: block
    .link_app
      margin: 0 auto 20px!important
      overflow: hidden
      max-width: 215px
      .link_app_store, .link_app_store_qr
        float: left
        margin: 0 5px
        text-align: center
      .link_app_store
        margin-right: 5px!important
    .link_app_store_qr
      font-size: 12px
      img
        height: 100%
    .sub_menu
      ul
        max-width: 210px
      a
        font-size: 10px

  .footer_extra, footer.footer_extra .sub_menu a
    font-size: 10px

</style>
