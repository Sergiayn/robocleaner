<template>
  <div class="block-contact">
    <div class="container">
      <div class="block-contact-inner">
        <div class="row">
          <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
            <div class="img-block">
              <img src="@/assets/img/block-contact/email.png" alt="email">
            </div>
          </div>
          <div class="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-12">
            <div class="text-block">
              <div class="title">{{ $t("page_contact.title") }}</div>
              <div class="desc">{{ $t("page_contact.desc") }}</div>
              <a href="mailto:yavorsky.team@gmail.com" class="button">yavorsky.team@gmail.com</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'PageContact',
}
</script>

<style lang="sass">
.block-contact
  background: radial-gradient(36.91% 304.36% at 29.14% 58.59%, #F3F7FF 33.15%, #CEDFFF 100%)
  padding: 170px 0 285px
  .img-block, .text-block
    text-align: center
  .title
    font-size: 36px
    font-weight: 500
    padding-bottom: 10px
  .desc
    font-size: 22px
    padding-bottom: 30px
  .button
    border: 1px solid black
    border-radius: 30px
    color: black
    font-size: 26px
    padding: 10px 35px
    text-decoration: none

@media (max-width: 1200px)
  .block-contact
    padding: 200px 0
    .img-block img
      max-width: 130px
    .title
      font-size: 30px
    .desc
      font-size: 18px
    .button
      font-size: 22px

@media (max-width: 991px)
  .block-contact
    padding: 190px 0
    .img-block img
      max-width: 120px
    .title
      font-size: 28px
    .desc
      font-size: 16px
    .button
      font-size: 14px

@media (max-width: 575px)
  .block-contact
    padding: 50px 0
    .img-block
      padding-bottom: 15px
      text-align: center
    .img-block img
      max-width: 50px
    .title
      font-size: 18px
    .desc
      font-size: 15px
    .button
      font-size: 13px

</style>
