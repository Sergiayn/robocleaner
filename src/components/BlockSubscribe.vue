<template>
  <div class="block-subscribe" id="block_subscribe">
    <div class="container">
      <block-link-app></block-link-app>
      <div class="block-subscribe-inner">
        <div class="title">{{ $t("block_subscribe.title") }}</div>
        <div class="desc">{{ $t("block_subscribe.desc") }}</div>
        <form @submit.prevent="subscribeUser">
          <input type="email" name="email" v-model="email" :placeholder='$t("block_subscribe.email")' required>
          <input type="submit" value="Subscribe">
        </form>
      </div>
    </div>
  </div>
  <Modal v-model:visible="isVisible"
         title=""
         modalClass="modalBlockSubscribe">
    <div class="desc">
      Thank you for subscribing to RoboCleaner news!
    </div>
  </Modal>
</template>

<script>
import BlockLinkApp from "@/components/BlockLinkApp.vue"
import { Modal } from 'usemodal-vue3'
import {ref} from "vue";

export default {
  name: "BlockSubscribe",
  components: {
    BlockLinkApp,
    Modal
  },
  methods: {
    subscribeUser() {
      let formData = new FormData();
      formData.append('email', this.email);
      formData.append('type', 'robocleaner')

      const requestOptions = {
        method: "POST",
        body: formData,
        mode: "no-cors"
      }

      fetch("https://api.galaxys.info/v1/subscribe", requestOptions)
          .then(() => {
            this.isVisible = true
            this.email = ''
          })
    }
  },
  data() {
    let isVisible = ref(false)
    return {
      email: '',
      isVisible
    }
  }
}
</script>

<style lang="sass">

.block-subscribe
  .link_app
    margin: auto
    max-width: 440px
    padding-top: 80px
    text-align: center

.block-subscribe-inner
  max-width: 750px
  margin: auto
  padding: 50px 0 115px
  text-align: center
  .title
    font-size: 36px
    font-weight: 600
    margin-bottom: 5px
  .desc, form
    font-size: 22px
    font-weight: 400
    margin-bottom: 30px
    max-width: 730px
  input[type="email"]
    background: #F2F2F2
    border: 0.5px solid #D0D0D0
    border-radius: 8px
    margin-right: 30px
    padding: 8px 16px
    width: 370px
  input[type="submit"], .submit
    box-sizing: border-box
    background: #7D6BE5
    border: 0.5px solid #4A3E93
    box-shadow: 0 0 10px rgba(3,7, 45, .29)
    border-radius: 8px
    color: white
    padding: 8px 36px

.modalBlockSubscribe
  .modal-vue3-body
    padding: 22px!important
    .desc
      font-weight: 600
      font-size: 34px
      padding: 70px 0 85px
      text-align: center
  .modal-vue3-footer
    display: none!important

@media (max-width: 1200px)
  .block-subscribe-inner
    padding: 82px
    .title
      font-size: 34px
      font-weight: 600
    .desc, form
      font-size: 20px

@media (max-width: 991px)
  .block-subscribe-inner
    .title
      font-size: 28px
    input[type="email"]
      width: 320px
    .modal-vue3-body
      .desc
        font-size: 30px
        padding: 60px 0 75px

@media (max-width: 768px)
  .block-subscribe-inner
    form
      overflow: hidden
    input[type="email"]
      margin: 10px 0 24px
      width: 100%
    .submit
      float: right
    .desc, form
      font-size: 20px
    .title
      font-size: 28px
    .modal-vue3-body
      .desc
        font-size: 28px

@media (max-width: 575px)
  .block-subscribe-inner
    padding: 30px 0 0
    .link_app
      padding-top: 40px
    .title
      font-size: 22px
    .desc, form
      font-size: 17px
    .form
      margin-bottom: 0
    .modal-vue3-body
      .desc
        font-size: 22px
        padding: 30px 0 45px

</style>
