<template>
  <div class="home">
    <block-home-banner></block-home-banner>
    <block-why-robo></block-why-robo>
    <block-subscribe></block-subscribe>
  </div>
</template>

<script>
import BlockHomeBanner from "@/components/BlockHomeBanner.vue";
import BlockSubscribe from "@/components/BlockSubscribe.vue";
import BlockWhyRobo from "@/components/BlockWhyRobo.vue";
export default {
  name: 'PageHome',
  components: {
    BlockHomeBanner,
    BlockSubscribe,
    BlockWhyRobo
  }
}
</script>

