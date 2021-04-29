<template>
  <router-view />
  <Footer />
</template>

<script>
import Footer from "./components/Footer.vue"
export default {
  name: 'App',
  data() {
    return {
      active: 0,
      showTabbar:true
    }
  },
  components: {
    Footer
  }
}
</script>
