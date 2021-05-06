<template>
  <div class="main">
    <div class="title">
      答题练习
    </div>
    <div class="tips">
      坚持练习，进步一点
    </div>
  </div>
  <div class="exam">
    <div class="item-exam addpadding" @click="goDetail('1')">
        <div class="item-img"><img src="/@/assets/images/exam_select_1.png" /></div>
        <div class="item-cont">
          <div class="item-title">混合答题</div>
        </div>
    </div>
    <div class="item-exam" @click="goDetail('2')">
        <div class="item-img"><img src="/@/assets/images/exam_select_2.png" /></div>
        <div class="item-cont">
          <div class="item-title">挑战闯关答题</div>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      category:this.$route.query.category,
    }
  },
  mounted(){
    
  },
  methods:{
    goDetail(type){
      this.$router.push({path: '/examstart',query:{category:this.category,type}})
    }
  }
}
</script>
<style lang="less" scoped>
.exam{
  display: flex;
  flex-wrap: wrap;
  padding:5vw 10vw;
}

.item-exam{
  background: #fff;
  width: 35vw;
  height:35vw;
  margin-bottom:10vw;
  border-radius: 20px;
  .item-img{
    width: 35vw;
    img {
      width:35%;
      padding-top:7vw;
    }
  }
  .item-cont{
    width: 100%;
    .item-title {
      font-weight:bold;
      line-height: 12vw;
    }
  }
}
.addpadding{
  margin-right:10vw
}
.main{
  background: none;
  .title{
    line-height: 10vw;
  }
  .tips{
    padding:0
  }
}
</style>