<template>
  <div class="link_app"
       :class="{isFooter: footer,
       b_inline: positionBlock.value === 'b-inline',
       b_block: positionBlock.value === 'b-block'}">
    <a :href="'https://apps.apple.com/us/app/' + (typeProd === 0 ? 'robocleaner/id1603385704' : 'adblocker-protection/id1587657245')"
       class="link_app_store check_download_link">
      <img src="@/assets/img/app_store.png" alt="app store">
    </a>
    <a href="https://track-voluum.robocleaner.galaxys.info/click" class="link_app_store_qr" @click.prevent="isVisible = true">
      <img src="@/assets/img/bg/qr-icon.svg" alt="qr code"> Scan QR code
    </a>
  </div>
  <Modal v-model:visible="isVisible"
         title="Scan to download"
         modalClass="modalLinkApp">
    <img v-if="typeProd === 0" src="@/assets/img/app_store_qr_code.jpg" alt="RoboCleaner">
    <img v-else src="@/assets/img/app_store_qr_code_addblocker.jpg" alt="AddBlocker">
  </Modal>
</template>

<script>
import { Modal } from 'usemodal-vue3'
import {ref} from "vue";
export default {
  name: "BlockLinkApp",
  props:{
    sizes: Object,
    footer: {
      type: Boolean,
      default(){
        return false
      }
    },
    typeProd: {
      type: Number,
      default(){
        return 0
      }
    }
  },
  data() {
    let isVisible = ref(false)
    let pSizes = ref({})
    let screenWidth = ref(0)
    let positionBlock = ref('b-inline')

    if (undefined === this.sizes) {
      pSizes = {576:0,768:1,992:1,1200:1}
    } else {
      pSizes.value[576] = !(576 in this.sizes) ? 0 : this.sizes[576]
      pSizes.value[768] = !(768 in this.sizes) ? 1 : this.sizes[768]
      pSizes.value[992] = !(992 in this.sizes) ? 1 : this.sizes[992]
      pSizes.value[1200] = !(1200 in this.sizes) ? 1 : this.sizes[1200]
    }

    this.updatePosition()

    return {
      positionBlock,
      pSizes,
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
        this.updateScreenWidth();
        this.updatePosition()
      });
    },
    updateScreenWidth() {
      this.screenWidth = window.innerWidth;
    },
    updatePosition() {
      if (this.pSizes === undefined)
        return

      for (let value of Object.entries(this.pSizes)) {
        if (this.screenWidth < value[0]) {
          this.positionBlock = value[1] ? 'b-inline' : 'b-block'
          break
        }
      }
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
    text-align: center

.link_app_store_qr
  font-size: 21px
.link_app_store_qr, .link_app_store_qr:hover, .link_app_store_qr:active
  background-color: rgba(239, 239, 239, 1)
  color: black!important
  line-height: 22px
  padding: 17px

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

@media (max-width: 575px)
  .link_app
    a
      height: 30px
      margin: 0 4px
      width: 110px
    .link_app_store_qr
      font-size: 10px

</style>
