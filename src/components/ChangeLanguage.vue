<template>
  <label for="locale">locale</label>
  <select v-model="locale">
    <option v-for="language in $i18n.availableLocales" :key="language">{{language}}</option>
  </select>
</template>

<script>
export default {
  name: 'ChangeLanguage',
  data () {
    this.$i18n.locale = 'en';
    return { locale: 'en' }
  },
  watch: {
    locale (val) {
      this.$i18n.locale = val
    }
  }
}
</script>


<style scoped>

</style>