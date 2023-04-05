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
          <img :src="item.src[$i18n.locale]" alt="robocleaner">
        </slide>
      </carousel>
    </div>
  </div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide  } from 'vue3-carousel'

import slide_01_en from "@/assets/img/lang/en/slider/slide_01.webp"
import slide_02_en from "@/assets/img/lang/en/slider/slide_02.webp"
import slide_03_en from "@/assets/img/lang/en/slider/slide_03.webp"
import slide_04_en from "@/assets/img/lang/en/slider/slide_04.webp"
import slide_05_en from "@/assets/img/lang/en/slider/slide_05.webp"
import slide_06_en from "@/assets/img/lang/en/slider/slide_06.webp"
import slide_07_en from "@/assets/img/lang/en/slider/slide_07.webp"
import slide_08_en from "@/assets/img/lang/en/slider/slide_08.webp"
import slide_09_en from "@/assets/img/lang/en/slider/slide_09.webp"
import slide_10_en from "@/assets/img/lang/en/slider/slide_10.webp"

import slide_01_es from "@/assets/img/lang/en/slider/slide_01.webp"
import slide_02_es from "@/assets/img/lang/es/slider/slide_02.webp"
import slide_03_es from "@/assets/img/lang/es/slider/slide_03.webp"
import slide_04_es from "@/assets/img/lang/es/slider/slide_04.webp"
import slide_05_es from "@/assets/img/lang/es/slider/slide_05.webp"
import slide_06_es from "@/assets/img/lang/es/slider/slide_06.webp"
import slide_07_es from "@/assets/img/lang/es/slider/slide_07.webp"
import slide_08_es from "@/assets/img/lang/es/slider/slide_08.webp"
import slide_09_es from "@/assets/img/lang/es/slider/slide_09.webp"
import slide_10_es from "@/assets/img/lang/es/slider/slide_10.webp"

export default {
  name: "BlockScreenshots",
  data() {
    const items = [
      {src: {en:slide_01_en,es:slide_01_es}},
      {src: {en:slide_02_en,es:slide_02_es}},
      {src: {en:slide_03_en,es:slide_03_es}},
      {src: {en:slide_04_en,es:slide_04_es}},
      {src: {en:slide_05_en,es:slide_05_es}},
      {src: {en:slide_06_en,es:slide_06_es}},
      {src: {en:slide_07_en,es:slide_07_es}},
      {src: {en:slide_08_en,es:slide_08_es}},
      {src: {en:slide_09_en,es:slide_09_es}},
      {src: {en:slide_10_en,es:slide_10_es}},
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
    opacity: .5
    transform: rotateY(0) scale(0.9)
  .carousel__slide--active
    opacity: 1
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