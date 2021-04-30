<template>
  <van-nav-bar
    :title="title"
    :left-text="leftText"
    :left-arrow="leftArrow"
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
      title: '',
      hidetopbar:true,
      leftText:'',
      leftArrow:true
    }
  },
  components: {
    Footer
  },
  watch: {
    $route(){
      this.$route.meta.hidetopbar ? this.hidetopbar = false:this.hidetopbar = true
      this.$route.meta.leftArrow ? this.leftArrow = false:this.leftArrow = true
      this.title = this.$route.meta.title
    },
  },
  methods:{
    onClickLeft(){
      console.log('点击了返回')
    }
  }
}
</script>
