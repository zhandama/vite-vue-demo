<template>
  <van-nav-bar
    :title="title"
    :left-text="leftText"
    :left-arrow="leftArrow"
    @click-left="onClickLeft"
    :fixed="true"
    :placeholder="true"
    v-if="hidetopbar"
  />
  <!-- <router-view /> -->
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component"  v-if="$route.meta.keepAlive" :key="$route.path"/>
    </keep-alive>
    <component :is="Component"  v-if="!$route.meta.keepAlive" :key="$route.path"/>
  </router-view> 
  <Footer v-if="hidefooter"/>
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
      leftArrow:true,
      hidefooter:true,
      isDialog:false
    }
  },
  components: {
    Footer
  },
  watch: {
    $route(){
      this.$route.meta.hidetopbar ? this.hidetopbar = false:this.hidetopbar = true
      this.$route.meta.leftArrow ? this.leftArrow = false:this.leftArrow = true
      this.$route.meta.hidefooter ? this.hidefooter = false:this.hidefooter = true
      this.$route.meta.isDialog ? this.isDialog = true:this.isDialog = false
      this.title = this.$route.meta.title
    },
  },
  mounted(){
    
  },
  methods:{
    onClickLeft(){
      if (this.isDialog) { // 返回弹窗提示
        this.$dialog.alert({
          message: '确定要退出答题？ \n退出后答案历史将不会保留',
          showCancelButton:true,
          confirmButtonColor:"#0074FF"
        }).then(action => {
          // on close
          if (action === 'confirm') {
            this.$router.go(-1)
          } else {
            console.log('取消')
          }
        }).catch(()=>{
          console.log('取消')
        });
      } else {
        this.$router.go(-1)
      }
    }
  }
}
</script>
