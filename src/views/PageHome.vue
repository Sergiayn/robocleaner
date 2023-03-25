<template>
  <div class="home">
    {{ $t("menu.home") }}
    <block-why-robo></block-why-robo>
  </div>
</template>

<script>
import BlockWhyRobo from "@/components/BlockWhyRobo.vue";
export default {
  name: 'PageHome',
  components: {
    BlockWhyRobo
  }
}
</script>

