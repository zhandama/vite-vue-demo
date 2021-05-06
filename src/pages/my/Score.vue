<template>
  <div class="score">
    <div class="score-top">
      <div class="score-top-a">当前积分</div>
      <div class="score-top-b">7</div>
    </div>
    <div class="score-cont">
      <div class="score-title">积分明细</div>
      <div class="score-list" v-for="(item,index) in lists" :key="index">
        <div class="score-name">发布视频</div>
        <div class="score-time">2021-04-28 12:12:12</div>
        <div class="score-right">+3</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      lists:[1,2,3,4,5,6,7,8,9,10],
    }
  },
  components: {
  },
  mounted(){
  },
  methods:{
    reload(){
      this.$router.replace({path: '/examstart',query:{url:''}})
    },
  }
}
</script>
<style lang="less" scoped>
.score{
  background: url('../../assets/images/score_bg.jpg') no-repeat;
  background-size: 100%;
  min-height: 80vh;
  .score-top{
    color:#fff;
    padding-top:5vw;
    font-weight: 500;
    .score-top-a{
      font-size:5vw;
      line-height: 10vw;
    }
    .score-top-b{
      font-size:9vw;
      line-height: 8vw;
    }
  }
  .score-cont{
    background: #FFFFFF;
    border-radius:15px;
    margin:5vw;
    text-align: left;
    padding:3vw 4vw;
    .score-title{
      color: #0074FF;
      font-weight: 500;
      font-size: 5vw;
      font-weight: bold;
      padding-bottom:2vw
    }
    .score-list{
      border-top:1px solid #f6f6f6;
      position: relative;
      font-weight: 500;
      height: 18vw;
      .score-name{
        font-size: 4.4vw;
        padding-top:2vw;
        line-height: 8vw;
      }
      .score-time{
        color: #999999;
        font-size: 14px;
      }
      .score-right{
        position: absolute;
        right:2vw;
        font-size: 5vw;
        top:5.5vw;
        font-weight: 500;
      }
    }
  }
}
</style>