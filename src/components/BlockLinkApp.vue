<template>
  <div class="link_app">
    <a href="https://apps.apple.com/us/app/robocleaner/id1603385704" class="link_app_store check_download_link"><img src="@/assets/img/app_store.png" alt="app store"></a>
    <a href="https://track-voluum.robocleaner.galaxys.info/click" class="link_app_store_qr" data-toggle="modal" data-target="#modal_appstore_qr">
      <img src="@/assets/img/bg/qr-icon.svg" alt="qr code"> Scan QR code
    </a>
  </div>
</template>

<script>
export default {
  name: "BlockLinkApp",
  props:{sizes: Object},
  data() {
    if (undefined === this.sizes) {
      // this.sizes = {1200:1,992:1, 768:1, 576:0}
    } else {
      // if (!(1200 in this.sizes))
      //   this.sizes[1200] = 1
      //
      // if (!(992 in this.sizes))
      //   this.sizes[992] = 1
      //
      // if (!(768 in this.sizes))
      //   this.sizes[768] = 1
      //
      // if (!(576 in this.sizes))
      //   this.sizes[576] = 0
    }

    this.updatePosition()

    return {
      screenWidth:0
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
    }
  }
}
</script>

<style scoped lang="sass">
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
  img
    height: 100%
  .link_app_store
    background-color: black
    text-align: center

.link_app_store_qr, .link_app_store_qr:hover, .link_app_store_qr:active
  background-color: rgba(239, 239, 239, 1)
  color: black!important
  font-size: 21px
  line-height: 22px
  padding: 17px

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
