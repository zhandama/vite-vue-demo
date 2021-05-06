<template>
  <div class="main">
    <van-nav-bar
      :title="detail.title"
      left-arrow
      @click-left="$router.go(-1)"
      @click-right="isEdit=!isEdit"
      :fixed="true"
    >
    <template #right>
      <van-icon name="ellipsis" size="24"/>
    </template>
    </van-nav-bar>
    <div class="title">
      {{detail.title}}
    </div>
    <div class="tips">
      文章来源：<span>{{detail.form}}</span>&nbsp;&nbsp;<span>{{detail.date}}</span>
    </div>
    <div class="content">
      {{detail.cont}}
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      id:this.$route.query.id,
      detail:{}
    }
  },
  components: {
    // qustions
  },
  mounted(){
    this.init()
  },
  methods:{
    init(){
      let params = {
        id: this.id
      }
      this.$axios.get("/api/homedetail", {params}).then(res=>{
        console.log(res)
        if (res.success){
          this.detail = res.content
        }
      })
    }
  }
}
</script>
<style lang="less" scoped>
.main{
  background: #fff;
  padding:5vw;
  text-align: left;
  .title{
    font-weight: bold;
  } 
  .tips{
    width: 546px;
    height: 23px;
    font-size: 12px;
    font-weight: 500;
    color: #999999;
    padding:5vw 0;
  }
  .content{
    font-size: 14px;
    line-height: 22px;
    height: auto;
  }
}
</style>