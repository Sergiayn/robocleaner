<template>
    <Modal v-model:visible="isVisible"
           modalClass="modalCookieAgreement"
           title="Privacy"
           :closable="false">
        <div class="desc">
            We use cookies to deliver you the best browsing experience, serve personalized ads or content,
            and analyze our traffic. By clicking "Accept all cookies", you consent to our use of cookies.
        </div>
        <button @click="closeModal" class="accept">Accept all cookies</button>
    </Modal>
</template>

<script>
import {ref} from 'vue'
import {Modal} from 'usemodal-vue3'
import {useCookies} from "vue3-cookies"

export default {
    name: "CookieAgreement",
    data() {
        const {cookies} = useCookies()
        let isVisible = ref(false)
        return {
            cookies,
            isVisible
        };
    },
    mounted() {
        if ("1" !== this.cookies.get("coolie_is_accept"))
            this.isVisible = true
    },
    components: {
        Modal
    },
    methods: {
        closeModal() {
            this.isVisible = false
            this.cookies.set("coolie_is_accept", "1", '365d')
        }
    }
}
</script>

<style lang="sass">
.modalCookieAgreement
  .modal-vue3-header
    padding: 16px !important

    div
      font-size: 20px
      font-weight: 500

  .modal-vue3-body
    padding: 16px !important

    .desc
      font-size: 16px
      font-weight: 400
      padding-bottom: 30px

    .accept
      box-sizing: border-box
      background: #7D6BE5
      border: 0.5px solid #4A3E93
      box-shadow: 0 0 10px rgba(3, 7, 45, .29)
      border-radius: 8px
      color: white
      display: block
      margin: auto
      padding: 8px 36px

  .modal-vue3-footer
    display: none !important

</style>
