<template>
  <div class="block-why-robo bg_blue" id="block_why_robo_cleaner">
    <div class="container">
      <div class="block-why-robo-inner">
        <table v-if="screenWidth > 576">
          <tbody>
          <tr>
            <th><strong>{{ $t("block_why_robo.table_col_1") }}</strong></th>
            <th>
              <div class="img">
                <img src="@/assets/img/block-why-robo/col1.png" :alt='$t("block_why_robo.table_col_2")'>
              </div>
              <span>{{ $t("block_why_robo.table_col_2") }}</span>
            </th>
            <th>
              <div class="img">
                <img src="@/assets/img/block-why-robo/col2.png" :alt='$t("block_why_robo.table_col_3")'>
              </div>
              <span>{{ $t("block_why_robo.table_col_3") }}</span>
            </th>
          </tr>
          <tr v-for="(item, index) in items" :key="index">
            <td>
              <strong>{{ $t("block_why_robo." + item.title) }}</strong>
              <p>{{ $t("block_why_robo." + item.desc) }}</p>
            </td>
            <td>
              <span class="status-success" v-if="item.param_1 === 1">{{ $t("block_why_robo.good") }}</span>
              <span class="status-warn" v-else-if="item.param_1 === 2">{{ $t("block_why_robo.average") }}</span>
              <span class="status-error" v-else-if="item.param_1 === 3">{{ $t("block_why_robo.no") }}</span>
            </td>
            <td>
              <span class="status-success" v-if="item.param_2 === 1">{{ $t("block_why_robo.good") }}</span>
              <span class="status-warn" v-else-if="item.param_2 === 2">{{ $t("block_why_robo.average") }}</span>
              <span class="status-error" v-else-if="item.param_2 === 3">{{ $t("block_why_robo.no") }}</span>
            </td>
          </tr>
          </tbody>
        </table>
        <div class="mobile-block" v-else>
          <div class="title">{{ $t("block_why_robo.table_col_1") }}</div>
          <carousel :items-to-show="1" :autoplay="5000">
            <slide v-for="(item, index) in items" :key="index">
              <div class="slide-row">
                <div class="brief">{{ $t("block_why_robo." + item.title) }}</div>
                <div class="desc">{{ $t("block_why_robo." + item.desc) }}</div>
              </div>
              <div class="slide-row">
                <div class="row">
                  <div class="col-6">
                    <div class="img">
                      <img src="@/assets/img/block-why-robo/col1.png" :alt='$t("block_why_robo.table_col_2")'>
                    </div>
                    <span>{{ $t("block_why_robo.table_col_2") }}</span>
                  </div>
                  <div class="col-6">
                    <div class="img">
                      <img src="@/assets/img/block-why-robo/col2.png" :alt='$t("block_why_robo.table_col_2")'>
                    </div>
                    <span>{{ $t("block_why_robo.table_col_3") }}</span>
                  </div>
                  <div class="col-6">
                    <span class="status-success" v-if="item.param_1 === 1">{{ $t("block_why_robo.good") }}</span>
                    <span class="status-warn" v-else-if="item.param_1 === 2">{{ $t("block_why_robo.average") }}</span>
                    <span class="status-error" v-else-if="item.param_1 === 3">{{ $t("block_why_robo.no") }}</span>
                  </div>
                  <div class="col-6">
                    <span class="status-success" v-if="item.param_2 === 1">{{ $t("block_why_robo.good") }}</span>
                    <span class="status-warn" v-else-if="item.param_2 === 2">{{ $t("block_why_robo.average") }}</span>
                    <span class="status-error" v-else-if="item.param_2 === 3">{{ $t("block_why_robo.no") }}</span>
                  </div>
                </div>
              </div>
            </slide>
            <template #addons>
              <navigation />
              <pagination />
            </template>
          </carousel>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
export default {
  name: "BlockWhyRobo",
  data() {
    const items = [
      {title:"title_1",desc:"desc_1",param_1:1,param_2: 1},
      {title:"title_2",desc:"desc_2",param_1:2,param_2: 1},
      {title:"title_3",desc:"desc_3",param_1:2,param_2: 1},
      {title:"title_4",desc:"desc_4",param_1:2,param_2: 1},
      {title:"title_5",desc:"desc_5",param_1:2,param_2: 1},
      {title:"title_6",desc:"desc_6",param_1:2,param_2: 1},
      // {title:"title_7",desc:"desc_7",param_1:2,param_2: 1},
      {title:"title_8",desc:"desc_8",param_1:3,param_2: 1},
    ]
    return {
      items,
      screenWidth: 0
    };
  },
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  mounted() {
    this.updateScreenWidth();
    this.onScreenResize();
  },
  methods: {
    onScreenResize() {
      window.addEventListener("resize", () => this.updateScreenWidth());
    },
    updateScreenWidth() {
      this.screenWidth = window.innerWidth;
    }
  }
}
</script>

<style lang="sass">
.block-why-robo-inner
  padding: 70px 0

  th
    strong
      color: #0A0D23
      font-size: 36px
      font-weight: 700

    .img
      height: 50px
      max-width: 100px

      img
        display: block
        margin: auto

    span
      font-size: 16px
      font-weight: 500
      display: block
      text-align: center
      max-width: 100px

  td
    strong
      font-size: 22px
      font-weight: 600

    &:nth-child(1)
      padding-right: 90px
      width: 60%

    &:nth-child(2)
      padding-right: 10px

      span
        margin-left: 15px

    &:nth-child(3) span
      margin-left: 15px

    p
      font-size: 18px
      font-weight: 400
      text-align: justify

  .status-success, .status-warn, .status-error
    font-size: 26px
    font-weight: 700

  .status-success
    color: #75AC92

  .status-warn
    color: #EC9C00

  .status-error
    color: #F30F00

  .mobile-block
    .brief, .desc
      text-align: left
    .brief
      font-size: 18px
      font-weight: 600
    .desc
      font-size: 16px
      font-weight: 400
      min-height: 100px
    .img img
      display: block
      margin: auto
    span
      display: block
      text-align: center
    .carousel__slide
      flex-wrap: wrap
    .slide-row
      flex: 1 0 100%
      justify-content: center
    .carousel__pagination
      padding-bottom: 16px
      margin-top: 0
    .carousel__prev, .carousel__next
      display: none


@media (max-width: 1199px)
  .block-why-robo-inner
    th strong
      font-size: 34px
      line-height: 44px

    td
      strong
        font-size: 18px
        line-height: 22px

      p
        font-size: 16px
        line-height: 22px

@media (max-width: 768px)
  .block-why-robo-inner
    th strong
      font-size: 28px
      line-height: 36px

    td
      &:nth-child(1)
        padding-right: 15px

      &:nth-child(2)
        padding-right: 0

@media (max-width: 576px)
  .block-why-robo-inner
    padding: 20px 20px 0

    table
      display: none

    .mobile-block
      display: block

      .title
        font-size: 22px
        font-weight: 700
        margin-bottom: 30px

      .brief
        font-size: 18px
        font-weight: 600

      .desc
        font-size: 16px
        font-weight: 400
        min-height: 100px

    .carousel-inner
      padding-bottom: 50px

    .carousel-item
      .img img
        display: block
        margin: auto

      span
        display: block
        text-align: center

    .carousel-indicators li
      background-color: #262626
      border-radius: 50%
      height: 6px
      width: 6px

</style>