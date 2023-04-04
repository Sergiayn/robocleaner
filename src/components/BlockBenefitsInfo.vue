<template>
  <div class="block-benefits_info bg_blue">
    <div class="row">
      <div class="col-xl-3">
        <div class="block-benefits_info__img" :style="{ backgroundImage: `url(${imgIphone[$i18n.locale]})`}"></div>
      </div>
      <div class="col-xl-9 col-lg-12 col-md-12 col-sm-12">
        <div class="block-benefits_info__content" id="block_plans">
          <div class="list">
            <div class="item item-head">
              <div>{{ $t("block_benefits.benefits") }}</div>
              <div>{{ $t("block_benefits.free") }}</div>
              <div>{{ $t("block_benefits.professional") }}</div>
            </div>
            <div class="item" v-for="(item, index) in items" :key="index">
              <div>{{ $t("block_benefits." + item.title) }}</div>
              <div><span class="icon ic-done" v-if="item.col_1"></span></div>
              <div><span class="icon ic-done" v-if="item.col_2"></span></div>
            </div>
          </div>
          <section class="best_choice slider" v-if="false">
            <div class="slide">
              <div class="content-slide">
                <div class="name">month</div>
                <div class="desc">7 days free trial, then</div>
                <div class="price">$4.99 / Month</div>
                <div class="price-month">($4.99 / month)</div>
              </div>
            </div>
            <div class="slide">
              <div class="content-slide active">
                <div class="icon">BEST CHOICE</div>
                <div class="name">year</div>
                <div class="desc">7 days free trial, then</div>
                <div class="price">$29.99 / Year</div>
                <div class="price-month">($2.50 / month)</div>
              </div>
            </div>
            <div class="slide">
              <div class="content-slide">
                <div class="name">week</div>
                <div class="desc">7 days free trial, then</div>
                <div class="price">$1.99 / Week</div>
                <div class="price-month">($7.96 / month)</div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
  <div class="block-download-buttons">
    <div class="block-download-buttons-inner">
      <block-link-app></block-link-app>
      <p>{{ $t("block_benefits.download_brief") }}</p>
    </div>
  </div>
</template>

<script>
import BlockLinkApp from "@/components/BlockLinkApp.vue";
import imgIphone_en from "@/assets/img/lang/en/benefits_info/phone1.webp";
import imgIphone_es from "@/assets/img/lang/es/benefits_info/phone1.webp";

export default {
  name: "BlockBenefitsInfo",
  components: {
    BlockLinkApp
  },
  data() {
    const items = [
      {title:"title_1",col_1:false,col_2: true},
      {title:"title_2",col_1:false,col_2: true},
      {title:"title_3",col_1:true,col_2: true},
      {title:"title_4",col_1:true,col_2: true},
      {title:"title_5",col_1:false,col_2: true},
      {title:"title_6",col_1:true,col_2: true},
      {title:"title_7",col_1:false,col_2: true},
      {title:"title_8",col_1:false,col_2: true},
      {title:"title_9",col_1:false,col_2: true},
      // {title:"title_10",col_1:false,col_2: true},
      // {title:"title_11",col_1:false,col_2: true},
      // {title:"title_12",col_1:true,col_2: true},
    ]
    return {
      items,
      imgIphone:{
        en: imgIphone_en,
        es: imgIphone_es
      }
    };
  },
}
</script>

<style lang="sass">
.block-benefits_info__img
  background-repeat: no-repeat
  background-position: center center
  background-size: 280px
  /*transition: background 5s ease*/
  height: 100%
  width: 100%
  //&.active
  //  background-image: url("@/assets/img/benefits_info/phone2.webp")
  //  background-size: 380px
  //  transition: background 5s ease

.block-benefits_info
  padding: 0 70px

.block-benefits_info__content
  padding: 120px 0
  .best_choice
    display: none
    text-align: center
    .content-slide
      background: #76A5FD
      box-shadow: 0 0 10px rgba(3, 7, 45, .29)
      border-radius: 8px
      color: white
      margin: 15px 0
      padding: 5px
      text-align: center
    .slick-current .content-slide
      border: 1px solid rgba(125, 107, 229, 1)
    .content-slide
      &.active .icon
        background: #7D6BE5
        border-radius: 2px
        font-size: 8px
        font-weight: 700
        margin-left: -5%
        margin-top: -15px
        height: auto
        padding: 4px
        position: absolute
        width: auto
      .name
        font-size: 17px
        font-weight: 800
        padding: 5px 0 15px
        text-transform: capitalize
      .desc
        font-size: 14px
      .price
        font-size: 14px
        font-weight: 700
        padding-bottom: 15px
      .price-month
        color: #C9C9C9
        font-size: 14px
  .item-head
    background-color: white
    font-size: 18px
    font-weight: 700
    text-align: center
  .item
    font-size: 18px
    font-weight: 400
    display: -webkit-flex
    justify-content: space-evenly
    width: 100%
    .icon
      margin: auto
    > div
      border: 1px solid #828282
      display: flex
      display: -webkit-flex
      flex-direction: column
      -webkit-flex-direction: column
      padding: 12px 14px
      &:nth-child(1)
        margin-right: 7px
        width: 50%
      &:nth-child(2), &:nth-child(3)
        width: 25%
      &:nth-child(2)
        border-right: 0

.block-download-buttons-inner
  background: url("@/assets/img/block-download-buttons.webp") no-repeat center center
  background-size: 100%
  padding: 150px 0
  text-align: center
  .link_app
    margin-bottom: 10px
  p
    font-size: 28px
    font-weight: 600

@media (max-width: 1300px)
  .block-benefits_info__img
    background-size: 250px

@media (max-width: 1200px)
  .block-benefits_info__img
    display: none
  .block-benefits_info__content
    padding: 28px 0
    .item
      font-size: 16px
      > div
        padding: 10px 14px
        &:nth-child(1)
          margin-right: 20px
        &:nth-child(2)
          border-right: 1px solid #828282
          margin-right: 9px
      .icon
        background-size: 35px 25px
        height: 25px
        width: 35px

@media (max-width: 767px)
  .block-benefits_info__content
    .item-head
      font-size: 15px
      font-weight: 600
    .item
      > div
        padding: 14px 8px
        &:nth-child(1)
          margin-right: 7px
        &:nth-child(2)
          margin-right: 4px
          width: 18%
        &:nth-child(3)
          width: 32%
      .icon
        background-size: 28px 20px
        height: 20px
        width: 28px

  .block-download-buttons-inner
    padding: 88px 0
    p
      font-size: 24px

@media (max-width: 575px)
  .block-benefits_info__content
    background-image: url("@/assets/img/bg/stars1.webp"), url("@/assets/img/bg/stars2.webp")
    background-position: 15px 90%, 95% 15px
    background-repeat: no-repeat
    table
      display: none
    .best_choice
      display: block
    .list
      display: none
  .block-subscribe .link_app a:first-child
    margin-right: 8px
  .block-benefits_info
    display: none
    padding: 0

  .block-download-buttons-inner
    background-position: center 20%
    background-size: 200%
    padding: 40px 0 75px
    p
      display: none

</style>