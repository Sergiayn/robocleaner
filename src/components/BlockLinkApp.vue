<template>
  <div class="link_app"
       :class="{isFooter: footer}">
    <a :href="'https://apps.apple.com/us/app/' + (typeProd === 0 ? 'robocleaner/id1603385704' : 'adblocker-protection/id1587657245')"
       class="link_app_store check_download_link">
      <span class="row_1">{{ $t("common.download_on_the") }}</span>
      <span class="row_2">App store</span>
    </a>
    <a href="https://track-voluum.robocleaner.galaxys.info/click" class="link_app_store_qr" @click.prevent="isVisible = true">
      <img src="@/assets/img/bg/qr-icon.svg" alt="qr code"> {{ $t("common.scan_qr_code") }}
    </a>
  </div>
  <Modal v-model:visible="isVisible"
         title="Scan to download"
         modalClass="modalLinkApp">
    <img v-if="typeProd === 0" src="@/assets/img/app_store_qr_code.webp" alt="RoboCleaner">
    <img v-else src="@/assets/img/app_store_qr_code_addblocker.webp" alt="AddBlocker">
  </Modal>
</template>

<script>
import { Modal } from 'usemodal-vue3'
import {ref} from "vue";
export default {
  name: "BlockLinkApp",
  props:{
    footer: {
      type: Boolean,
      default(){
        return false
      }
    }
  },
  data() {
    let isVisible = ref(false)
    let screenWidth = ref(0)

    return {
      isVisible,
      screenWidth
    };
  },
  mounted() {
    this.updateScreenWidth();
    this.onScreenResize();
  },
  methods: {
    onScreenResize() {
      window.addEventListener("resize", () => {
        this.updateScreenWidth()
      });
    },
    updateScreenWidth() {
      this.screenWidth = window.innerWidth;
    }
  },
  components: {
    Modal
  },
}
</script>

<style lang="sass">
.link_app
  a
    border-radius: 5px
    box-shadow: 0 0 7px rgba(3, 7, 45, 0.29)
    height: 56px
    display: inline-block
    vertical-align: middle
    width: 198px
    &:hover
      text-decoration: none
    &:focus-visible
      outline-offset: 0
    &:first-child
      margin-right: 24px
    img:focus-visible
      outline: none
  .b_inline a
    display: inline-block
  .b_block a
    display: block
  img
    height: 100%
  .link_app_store
    background-color: black
    background-repeat: no-repeat
    background-position: 18px center
    background-size: auto 60%
    background-image: url("@/assets/img/apple.svg")
    padding-left: 50px
    padding-top: 2px
    text-align: center
    span
      display: block
      color: white
      font-weight: 500
    .row_1
      font-size: 14px
      line-height: 1.4
    .row_2
      font-size: 26px
      line-height: 1.1
  &.isFooter
    .link_app_store
      background-position: 8px center
      padding-left: 22px
      padding-top: 3px
      text-align: center
      span
        font-weight: 400
      .row_1
        font-size: 7px
        line-height: 1.4
      .row_2
        font-size: 11px
        line-height: 1.1

.link_app_store_qr
  font-size: 21px
  padding: 17px
.link_app_store_qr, .link_app_store_qr:hover, .link_app_store_qr:active
  background-color: rgba(239, 239, 239, 1)
  color: black!important
  line-height: 22px

.modalLinkApp
  color: black
  .modal-vue3-content
    width: 270px!important
  .modal-vue3-header
    border: 0
    font-size: 24px
    font-weight: 700
    margin: auto
    padding: 22px!important
  .modal-vue3-body
    padding: 0 22px 22px!important
  .modal-vue3-footer
    display: none!important

@media (max-width: 1200px)
  .link_app_store_qr, .link_app_store_qr:hover, .link_app_store_qr:active
    margin: 0!important
    max-width: 187px
    padding: 10px
  .link_app
    a
      font-size: 14px
      height: 45px
      width: 140px
      &:first-child
        margin-right: 16px
    .link_app_store
      background-position: 10px center
      padding-left: 30px
      .row_1
        font-size: 12px
      .row_2
        font-size: 20px

@media (max-width: 992px)
  .link_app_store_qr, .link_app_store_qr:hover, .link_app_store_qr:active
    font-size: 16px
    max-width: 140px
    padding: 5px
    width: 138px

  .link_app_store_qr img, .link_app_store_qr:hover img, .link_app_store_qr:active img
    width: 18px

@media (max-width: 768px)
  .link_app
    a
      width: 130px
    .link_app_store_qr
      font-size: 15px
      padding-right: 0
    .link_app_store
      background-position: 5px center
      padding-left: 20px
      padding-top: 2px
      .row_1
        font-size: 11px
      .row_2
        font-size: 18px

@media (max-width: 575px)
  .link_app
    a
      height: 30px
      margin: 0 4px
      width: 110px
    .link_app_store_qr
      font-size: 10px
    .link_app_store
      background-position: 7px center
      padding-left: 14px
      padding-top: 0
      .row_1
        font-size: 8px
      .row_2
        font-size: 14px

</style>
