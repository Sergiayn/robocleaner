<template>
  <div class="home">
    <block-home-banner></block-home-banner>
    <block-screenshots></block-screenshots>
    <block-benefits></block-benefits>
    <block-why-robo></block-why-robo>
    <block-subscribe></block-subscribe>
    <block-benefits-info></block-benefits-info>
  </div>
</template>

<script>
import BlockBenefits from "@/components/BlockBenefits.vue";
import BlockBenefitsInfo from "@/components/BlockBenefitsInfo.vue";
import BlockHomeBanner from "@/components/BlockHomeBanner.vue";
import BlockScreenshots from "@/components/BlockScreenshots.vue";
import BlockSubscribe from "@/components/BlockSubscribe.vue";
import BlockWhyRobo from "@/components/BlockWhyRobo.vue";
export default {
  name: 'PageHome',
  components: {
    BlockBenefits,
    BlockBenefitsInfo,
    BlockHomeBanner,
    BlockScreenshots,
    BlockSubscribe,
    BlockWhyRobo
  }
}
</script>

