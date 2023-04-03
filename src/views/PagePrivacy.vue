<template>
  <div class="block-privacy">
    <div class="block-privacy-top">
      <div class="container">
        <div class="row">
          <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
            <div class="img-block">
              <img src="@/assets/img/block-privacy/robo.webp" alt="RoboCleaner">
            </div>
          </div>
          <div class="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-12">
            <div class="text-block" v-html='$t("page_privacy.top_text_block")'></div>
          </div>
        </div>
      </div>
    </div>
    <div class="block-privacy-middle">
      <div class="container">
        <div class="rubric" v-html='$t("page_privacy.middle_content_rubric_1")'></div>
        <div class="title">{{ $t("page_privacy.middle_content_title_1") }}</div>

        <div class="rubric" v-html='$t("page_privacy.middle_content_rubric_2")'></div>
        <div class="title">{{ $t("page_privacy.middle_content_title_2") }}</div>
        <div class="rubric" v-html='$t("page_privacy.middle_content_rubric_3")'></div>
        <div class="rubric" v-html='$t("page_privacy.middle_content_rubric_4")'></div>
        <div class="rubric" v-html='$t("page_privacy.middle_content_rubric_5")'></div>
        <div class="rubric" v-html='$t("page_privacy.middle_content_rubric_6")'></div>

        <div class="title title-2">{{ $t("page_privacy.middle_content_title_3") }}</div>
        <div class="rubric" v-html='$t("page_privacy.middle_content_rubric_7")'></div>
        <div class="rubric" v-html='$t("page_privacy.middle_content_rubric_8")'></div>
        <div class="rubric" v-html='$t("page_privacy.middle_content_rubric_9")'></div>
        <div class="rubric" v-html='$t("page_privacy.middle_content_rubric_10")'></div>

        <div class="title">{{ $t("page_privacy.middle_content_title_4") }}</div>
        <div class="rubric" v-html='$t("page_privacy.middle_content_rubric_11")'></div>
        <div class="rubric" v-html='$t("page_privacy.middle_content_rubric_12")'></div>
        <div class="rubric" v-html='$t("page_privacy.middle_content_rubric_13")'></div>
        <div class="rubric" v-html='$t("page_privacy.middle_content_rubric_14")'></div>
        <div class="rubric" v-html='$t("page_privacy.middle_content_rubric_15")'></div>
        <div class="rubric" v-html='$t("page_privacy.middle_content_rubric_16")'></div>

        <div class="title">{{ $t("page_privacy.middle_content_title_5") }}</div>
        <div class="rubric" v-html='$t("page_privacy.middle_content_rubric_17")'></div>

        <div class="title">{{ $t("page_privacy.middle_content_title_6") }}</div>
        <div class="rubric" v-html='$t("page_privacy.middle_content_rubric_18")'></div>

        <div class="title">{{ $t("page_privacy.middle_content_title_7") }}</div>
        <div class="rubric" v-html='$t("page_privacy.middle_content_rubric_19")'></div>
        <div class="rubric" v-html='$t("page_privacy.middle_content_rubric_20") + "<div>" + $t("page_privacy.by_email") + ": yavorsky.team@gmail.com</div>"'></div>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  name: 'PagePrivacy',
}
</script>

<style lang="sass">
.block-privacy-top
  background: radial-gradient(40.02% 335.9% at 22.19% 61.54%, #F3F7FF 24.13%, #CEDFFF 100%)
  padding: 36px 0
  .img-block
    padding: 55px 10px 0
    text-align: center
  .text-block
    font-size: 22px
    padding: 30px 10px 0

.block-privacy-middle
  font-size: 18px
  padding: 24px 0
  .title
    background: #CCDEFF
    font-weight: 700
    margin-bottom: 24px
    padding: 6px 8px
  &.title-2
    background: radial-gradient(59.35% 53415.03% at 12.11% 75.24%, rgba(204, 222, 255, 0) 3.12%, #CCDEFF 66.15%)
  .rubric
    margin-bottom: 24px
    p
      margin: 0
      text-indent: 20px
    strong
      display: block
      font-weight: 600

@media (max-width: 1200px)
  .block-privacy-top
    padding: 12px 0
    .img-block
      padding: 55px 0 0
      text-align: center
    .text-block
      font-size: 20px
      padding: 12px 0 0
  .block-privacy-middle
    font-size: 16px
    .title, .rubric
      margin-bottom: 16px

@media (max-width: 768px)
  .block-privacy-top
    padding: 25px 0
    .text-block
      font-size: 18px
      padding: 0
  .block-privacy-middle
    font-size: 18px

@media (max-width: 575px)
  .block-privacy-top
    padding: 10px 0
    .img-block
      padding: 20px 0
    .text-block
      font-size: 14px
      padding: 0
  .block-privacy-middle
    font-size: 15px
    .title, .rubric
      margin-bottom: 10px

</style>
