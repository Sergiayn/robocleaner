<template>
  <div class="home">
    <block-home-banner></block-home-banner>
    <block-why-robo></block-why-robo>
  </div>
</template>

<script>
import BlockHomeBanner from "@/components/BlockHomeBanner.vue";
import BlockWhyRobo from "@/components/BlockWhyRobo.vue";
export default {
  name: 'PageHome',
  components: {
    BlockHomeBanner,
    BlockWhyRobo
  }
}
</script>

