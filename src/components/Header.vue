<template>
  <van-sticky>
      <div class="top-search" @click="goSearch">
        <div class="logo"><img src="/@/assets/images/logo.png" /></div>
        <div class="search"><img src="/@/assets/images/search1.png" />搜索内容</div>
      </div>
    </van-sticky>
</template>
<script>

import {defineComponent} from "vue"
export default defineComponent({
  emits:['haha'],
  setup(prop,context){
      const methods = {
          goSearch(){
              this.$router.push({path:'/search'})
          }
      }
      return {
          ...methods
      }
  } 
})
</script>
<style lang="less" scoped>
.search{
  background:#639CFF;
  border-radius: 50px;
  height: 8vw;
  line-height: 8vw;
  margin: auto;
  text-align: left;
  color: #fff;
  font-size: 14px;
  margin-right:3vw;
  img{
    width: 4vw;
    position: relative;
    top:.6vw;
    padding-left:3.5vw;
    padding-right:1.8vw;
  }
}
</style>