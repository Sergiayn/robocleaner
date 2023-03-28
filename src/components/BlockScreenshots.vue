<template>
  <div class="block-screenshots bg_blue" id="block_screenshots">
    <div class="block-screenshots-inner">
      <div class="title">{{ $t("block_screenshots.title") }}</div>
      <p>{{ $t("block_screenshots.desc") }}</p>
      <div class="controls">
        <button @click="prev" class="btn-prev"></button>
        <button @click="next" class="btn-next"></button>
      </div>
      <carousel ref="carousel" :settings="carousel_conf.settings" :breakpoints="carousel_conf.breakpoints">
        <slide v-for="(item, index) in items" :key="index">
          <img :src="require(`@/assets/img/slider/1/${item.src}`)">
        </slide>
      </carousel>
    </div>
  </div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide  } from 'vue3-carousel'
export default {
  name: "BlockScreenshots",
  data() {
    const items = [
      // {src:"01_iPhone-13-Pro-Front.png"},
      {src:"02_iPhone-13-Pro-Front.png"},
      {src:"03_iPhone-13-Pro-Front.png"},
      {src:"04_iPhone-13-Pro-Front.png"},
      {src:"05_iPhone-13-Pro-Front.png"},
      {src:"06_iPhone-13-Pro-Front.png"},
      {src:"07_iPhone-13-Pro-Front.png"},
      {src:"08_iPhone-13-Pro-Front.png"},
      {src:"09_iPhone-13-Pro-Front.png"},
      {src:"10_iPhone-13-Pro-Front.png"},
      {src:"11_iPhone-13-Pro-Front.png"},
    ]
    const carousel_conf = {
      settings: {
        autoplay: 5000,
        itemsToShow: 1,
        wrapAround: true
      },
      breakpoints: {
        1199: { itemsToShow: 5.5 },
        768: { itemsToShow: 3.5 },
        575: { itemsToShow: 3 },
        450: { itemsToShow: 1.9 },
      },
    }

    return {
      items,
      carousel_conf
    };
  },
  components: {
    Carousel,
    Slide
  },
  methods: {
    next() {
      this.$refs.carousel.next()
    },
    prev() {
      this.$refs.carousel.prev()
    },
  }

}
</script>

<style lang="sass">
.block-screenshots
  padding: 40px 0
  .title
    color: #0A0D23
    font-size: 36px
    font-weight: 700
  p
    font-size: 24px
    font-weight: 400
  .carousel__slide
    transform: rotateY(0) scale(0.9)
  .carousel__slide--active
    transform: rotateY(0) scale(1)
  .controls
    padding-bottom: 40px
    button
      background-color: transparent
      background-position: center center
      background-repeat: no-repeat
      border: 0
      padding: 0 150px
      height: 20px
      width: 50px
      &:hover, &:focus
        border: 0
        box-shadow: none
        outline: none
  .btn-prev
    background-image: url("@/assets/img/bg/arrow/left-long.svg")
  .btn-next
    background-image: url("@/assets/img/bg/arrow/right-long.svg")

.block-screenshots-inner
  text-align: center

@media (max-width: 991px)
  .block-screenshots
    .controls
      button
        padding: 0 75px

@media (max-width: 768px)
  .block-screenshots
    padding: 34px 0
    .title
      font-size: 28px
    p
      font-size: 20px
    .carousel
      img
        max-height: 340px

@media (max-width: 575px)
  .block-screenshots
    .title, p, .controls
      display: none
    .carousel__slide
      transform: rotateY(0) scale(1)

  .block-screenshots-inner
    padding: 0 25px

</style>