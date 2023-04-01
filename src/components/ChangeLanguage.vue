<template>
  <div class="change-language">
    <label for="locale"></label>
    <select v-model="locale">
      <option v-for="language in $i18n.availableLocales" :key="language">{{language}}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'ChangeLanguage',
  data () {
    return { locale: this.$i18n.locale }
  },
  watch: {
    locale (locale) {
      this.$i18n.locale = locale
      this.$router.replace({params:{locale}})
    }
  }
}
</script>


<style scoped lang="sass">
.change-language
  max-width: 85px
  overflow: hidden
  label
    background-image: url("@/assets/img/lang_globe.svg")
    margin: 0 10px 0 0
    float: left
    height: 24px
    width: 24px
  select
    background: transparent
    border: 0
    color: white
    font-size: 16px
    font-weight: 500
    float: right
    max-width: 60px
    height: 24px
    outline: none
    text-transform: uppercase
    width: 50px
  option
    color: black

</style>
