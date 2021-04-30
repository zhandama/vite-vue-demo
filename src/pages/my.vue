<template>
  <div>
    <div class="my-title">
      <div class="my-head">
        <img src="/@/assets/images/no-head.png" />
      </div>
      <div>施小国</div>
      <div>个人中心</div>
    </div>
    <van-cell icon="/@/assets/images/user_collect.png" title="我的收藏" is-link to="index" />
    <van-cell icon="/@/assets/images/user_wenjuan.png" title="我的问卷" is-link to="index" />
    <van-cell icon="/@/assets/images/user_history.png" title="我的历史" is-link to="index" />
    <van-cell icon="/@/assets/images/user_children.png" title="子女信息管理" is-link to="index" value=""/>
  </div>
</template>

<script>
export default {
  name: 'My',
  data() {
    return {
      
    }
  },
  mounted(){
    
  }
}
</script>
<style scoped>
.my-title{
  background: url("/@/assets/images/bg.png") top no-repeat;
  background-size: 100%;
  height: 60vw;
  display: flex;
  line-height: 15vw;
  color:#fff;
}
.my-head{
  background:#fff;
  width: 15vw;
  height: 15vw;
  border-radius:100px;
}
.my-head img {
  width: 100%;
}
</style>