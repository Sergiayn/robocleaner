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
</template>

<script>
import BlockLinkApp from "@/components/BlockLinkApp.vue";

export default {
  name: "BlockSubscribe",
  components: {
    BlockLinkApp
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
          .then((response) => {
            console.log(response)
          })
    }
  },
  data() {
    return {email: ''}
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


</style>