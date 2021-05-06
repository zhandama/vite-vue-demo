<template>
  <div class="main">
    <div class="end-img"><img src="/@/assets/images/ban.png" /></div>
    <div class="end-cont">
      <div class="end-lt">
        <div>正确率：<span>40%</span></div><div>用时： <span>00:01:25</span></div>
      </div>
      <div class="end-lt">
        <div>错题数：<span>3</span></div><div>积分： <span>+5</span></div>
      </div>
      <div class="end-lb">
        <van-button class="end-btn mr5" type="default" @click="goHistory">返回</van-button>
        <van-button class="end-btn" type="primary" @click="reload">再答一次</van-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      query:this.$route.query,
      active:0,
    }
  },
  components: {
  },
  mounted(){
  },
  methods:{
    reload(){
      this.$router.replace({path: '/examstart',query:this.query})
    },
    goHistory(){
      this.$router.go(-1)
    },
  }
}
</script>
<style lang="less" scoped>
.main{
  padding:0;
  margin:5vw;
  .end-img{
    img{
      width: 100%;
    }
  }
  .end-cont{
    padding:5vw;
    .end-lt{
      display: flex;
      div{
        width: 50%;
        color: #5C656E;
        line-height: 10vw;
      }
    }
    .end-lb{
      margin-top:10vw;
    }
    .end-btn{
      width: 47.5%;
    }
    .mr5{
      margin-right:5%
    }
  }
}
</style>