<template>
  <div>
    <div class="my-title">
      <div class="my-info">
        <div class="my-head">
          <img src="/@/assets/images/no-head.png" />
        </div>
        <div class="my-nickName">施小国</div>
        <router-link class="my-tips" :to="{path:'/myinfo'}"><span>个人中心</span><van-icon name="arrow" size="16"/></router-link>
      </div>
      <van-cell class="my-score" center is-link to="/score" >
        <template #title>
          <span class="my-score-f">{{info.score}}</span>
          <span class="my-score-n">积分</span>
        </template>
      </van-cell>
    </div>
    <van-cell icon="/@/assets/images/user_collect.png" title="我的收藏" is-link to="/mycollect" />
    <van-cell icon="/@/assets/images/user_wenjuan.png" title="我的问卷" is-link to="/myquestion" />
    <van-cell icon="/@/assets/images/user_history.png" title="我的历史" is-link to="/myhistory" />
    <van-cell icon="/@/assets/images/user_children.png" title="子女信息管理" is-link to="/mychildren"/>
  </div>
</template>

<script>
export default {
  name: 'My',
  data() {
    return {
      info:{
        score:65
      }
    }
  },
  mounted(){
    
  }
}
</script>
<style lang="less">
.my-title{
  background: url("../../assets/images/bg.png") top no-repeat;
  background-size: 100%;
  height: 45vw;
  color:#fff;
  padding-top: 15vw;
  position: relative;
}
.my-info{
  display: flex;
  height: 20vw;
}
.my-head{
  background:#fff;
  width: 15vw;
  height: 15vw;
  border-radius:100px;
  margin:0 20px
}
.my-head img {
  width: 100%;
}
.my-nickName{
  line-height: 15vw;
  font-size: 6vw;
}
.my-tips{
  position: absolute;
  right:0;
  top:18vw;
  width: 26vw;
  height: 8vw;
  line-height: 8vw;
  background: #1F84FF;
  border: 1px solid #5FA7FF;
  border-radius: 32px 0 0 32px;
  color:#fff;
  .van-icon{
    position: relative;
    top:3px
  }
}
.my-score{
  width: 92vw !important;
  margin: 8vw auto;
  height: 14vw;
  line-height: 14vw;
  background: #FFFFFF;
  border-radius: 10px;
  .my-score-f{
    font-size: 7vw;
    color:#FF0000;
    padding-right: 3px;
    top:3px;
    position: relative;
  }
  .my-score-n{
    font-size: 3.6vw;
    color:#FF0000;
  }
}
</style>