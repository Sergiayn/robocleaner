<template>
  <div class="block-benefits">
    <div class="container">
      <div class="block-benefits-inner">
        <div class="benefits_list" :style="screenWidth > 768 ? { backgroundImage: `url(${imgIphone[$i18n.locale]})`} : null" >
          <div class="item">
            <div class="item-inner">
              <img src="@/assets/img/benefits/icon_01.webp" :alt='$t("block_benefits.item_1")'>
              <div class="title">{{ $t("block_benefits.item_1") }}</div>
            </div>
          </div>
          <div class="item">
            <div class="item-inner">
              <img src="@/assets/img/benefits/icon_04.webp" :alt='$t("block_benefits.item_4")'>
              <div class="title">{{ $t("block_benefits.item_4") }}</div>
            </div>
          </div>
          <div class="item">
            <div class="item-inner">
              <img src="@/assets/img/benefits/icon_03.webp" :alt='$t("block_benefits.item_3")'>
              <div class="title">{{ $t("block_benefits.item_3") }}</div>
            </div>
          </div>
          <div class="item">
            <div class="item-inner">
              <img src="@/assets/img/benefits/icon_02.webp" :alt='$t("block_benefits.item_2")'>
              <div class="title">{{ $t("block_benefits.item_2") }}</div>
            </div>
          </div>
          <div class="item">
            <div class="item-inner">
              <img src="@/assets/img/benefits/icon_05.webp" :alt='$t("block_benefits.item_5")'>
              <div class="title">{{ $t("block_benefits.item_5") }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import imgIphone_en from "@/assets/img/lang/en/benefits/iphone_12_pro.webp"
import imgIphone_es from "@/assets/img/lang/es/benefits/iphone_12_pro.webp"
export default {
  name: "BlockBenefits",
  data() {
    return {
      imgIphone:{
        en: imgIphone_en,
        es: imgIphone_es
      },
      screenWidth: 0,
    }
  },
  mounted() {
    this.updateScreenWidth();
    this.onScreenResize();
  },
  methods: {
    onScreenResize() {
      window.addEventListener("resize", () => {
        this.updateScreenWidth();
      });
    },
    updateScreenWidth() {
      this.screenWidth = window.innerWidth;
    }
  },
}
</script>

<style scoped lang="sass">
.block-benefits
  padding: 150px 0 100px
.block-benefits-inner
  text-align: center
  .title
    font-weight: 700
.benefits_list
  background-repeat: no-repeat
  background-position: center top

@media (min-width: 1199px)
  .benefits_list
    background-position: center 100px
    background-size: 440px
    .item
      display: inline-block
      padding: 80px 20px
      width: 33%
      vertical-align: top
      .title
        font-size: 18px
        padding-top: 14px
        text-align: center
      &:nth-last-child(2)
        padding-top: 200px
      &:nth-last-child(5), &:nth-last-child(4)
        width: 49%
      &:nth-last-child(5) .item-inner, &:nth-last-child(3) .item-inner, &:nth-last-child(2) .item-inner
        float: left
      &:nth-last-child(4) .item-inner, &:nth-last-child(1) .item-inner
        float: right
    .item-inner
      text-align: center
      width: 300px

@media (max-width: 1199px)
  .block-benefits
      padding: 100px 0 50px
  .benefits_list
    background-position: center 100px
    background-size: 440px
    .item
      display: inline-block
      padding: 80px 20px
      vertical-align: top
      .title
        font-size: 18px
        padding-top: 14px
        text-align: center
      &:nth-last-child(5), &:nth-last-child(4)
        width: 49%
      &:nth-last-child(5) .item-inner, &:nth-last-child(3) .item-inner, &:nth-last-child(2) .item-inner
        float: left
      &:nth-last-child(4) .item-inner, &:nth-last-child(1) .item-inner
        float: right
    .item-inner
      text-align: center
      width: 300px

@media (max-width: 1200px) and (min-width: 768px)
  .benefits_list
    background-size: 400px
    background-position: center 70px
    .item
      display: inline-block
      padding: 55px 10px
      width: 49%
      .title
        font-size: 16px
        padding-top: 14px
      &:nth-child(even) .item-inner
        float: right
      &:nth-last-child(1) .item-inner
        float: none
        width: 100%
      &:nth-of-type(5)
        padding-top: 0
    .item-inner
      float: left
      width: 78%

@media (max-width: 768px) and (min-width: 576px)
  .benefits_list
    background-size: 300px
    background-position: center 135px
    .item
      display: inline-block
      height: 200px
      padding: 60px 0
      width: 49%
      .title
        font-size: 16px
        padding-top: 14px
      &:nth-child(even) .item-inner
        float: right
      &:nth-last-child(1) .item-inner
        float: none
        width: 100%
    .item-inner
      float: left
      width: 80%

@media (max-width: 768px)
  .block-benefits
    padding: 60px 0 75px
  .benefits_list
    background: none
    padding-top: 20px
    .item .title
      font-size: 16px
      font-weight: 400
      padding: 10px 0 40px

@media (max-width: 576px)
  .block-benefits
    padding: 40px 0
  .benefits_list
    .item
      padding: 0
      width: 100%!important
    .item-inner
      float: none!important
      margin: auto


</style>