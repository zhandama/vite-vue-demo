<template>
  <van-nav-bar
    :title="title"
    left-text="返回"
    left-arrow
    @click-left="onClickLeft"
    v-if="hidetopbar"
  />
  <router-view />
  <Footer />
</template>

<script>
import Footer from "./components/Footer.vue"
export default {
  name: 'App',
  data() {
    return {
      title: 0,
      hidetopbar:true
    }
  },
  components: {
    Footer
  },
  watch: {
    $route(){
      this.$route.meta.hidetopbar ? this.hidetopbar = false:this.hidetopbar = true
      this.title = this.$route.meta.title
    },
  },
}
</script>
