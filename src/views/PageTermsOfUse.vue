<template>
  <div class="block-term-of-use">
    <div class="container">
      <div class="block-term-of-use-inner">
        <h1 class="title">{{ $t("menu.terms_of_use") }}</h1>
        <ul class="content">
          <li>{{ $t("page_terms_of_use.content_1") }}</li>
          <li>{{ $t("page_terms_of_use.content_2") }}</li>
          <li>{{ $t("page_terms_of_use.content_3") }}</li>
          <li>{{ $t("page_terms_of_use.content_4") }}</li>
          <li>{{ $t("page_terms_of_use.content_5") }}</li>
          <li>{{ $t("page_terms_of_use.content_6") }}</li>
          <li>{{ $t("page_terms_of_use.content_7") }}</li>
          <li>{{ $t("page_terms_of_use.content_8") }}</li>
          <li>{{ $t("page_terms_of_use.content_9") }}</li>
          <li>{{ $t("page_terms_of_use.content_10") }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'PageTermsOfUse',
}
</script>

<style lang="sass">
.block-term-of-use
  background: radial-gradient(36.91% 304.36% at 29.14% 58.59%, #F3F7FF 33.15%, #CEDFFF 100%)
  padding: 22px 0 16px
  .title
    font-size: 24px
    font-weight: 600
    margin-bottom: 22px
    text-align: center
  .content
    font-size: 18px

@media (max-width: 991px)
  .block-term-of-use
    .title
      font-size: 22px
    .content
      font-size: 16px

@media (max-width: 768px)
  .block-term-of-use
    padding: 10px 0
    .title
      font-size: 20px
    .content
      font-size: 18px

@media (max-width: 575px)
  .block-term-of-use
    font-size: 18px
  .content
    font-size: 15px

</style>
