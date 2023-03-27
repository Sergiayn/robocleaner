<template>
  <div class="home">
    <block-home-banner></block-home-banner>
    <block-why-robo></block-why-robo>
    <block-subscribe></block-subscribe>
    <block-benefits></block-benefits>
  </div>
</template>

<script>
import BlockBenefits from "@/components/BlockBenefits.vue";
import BlockHomeBanner from "@/components/BlockHomeBanner.vue";
import BlockSubscribe from "@/components/BlockSubscribe.vue";
import BlockWhyRobo from "@/components/BlockWhyRobo.vue";
export default {
  name: 'PageHome',
  components: {
    BlockBenefits,
    BlockHomeBanner,
    BlockSubscribe,
    BlockWhyRobo
  }
}
</script>

