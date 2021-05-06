<template>
  <div class="main">
    <div class="title">
      校园安全问题调查
    </div>
    <div class="content">
      <div class="newspaper">广大学生朋友您好！非常感谢您愿意用几分钟的时间，完成以下答卷。答案没有对错之分，所有答卷信息也都将保密，仅供分析使用，请您放心填写。</div>
      <div class="list">
        <div class="list-title">您的性别：</div>
        <van-radio-group v-model="radiochecked">
            <van-radio name="1">单选框 1</van-radio>
            <van-radio name="2">单选框 2</van-radio>
          </van-radio-group>
      </div>
      <div class="list">
          <div class="list-title">您所在的年级：</div>
          <van-radio-group v-model="radiochecked">
            <van-radio name="1">单选框 1</van-radio>
            <van-radio name="2">单选框 2</van-radio>
          </van-radio-group>
      </div>
      <div class="list">
          <div class="list-title">您觉得以下哪些安全可能会受到危险：(多选)</div>
          <van-checkbox-group v-model="checked" name="萨德的" icon>
            <van-checkbox shape="square" name="a">复选框 a
            </van-checkbox>
            <van-checkbox shape="square" name="b">复选框 b</van-checkbox>
          </van-checkbox-group>
      </div>
    </div>
    <div style="width:80vw;margin:auto;"><van-button class="info-submit" round type="primary" native-type="submit">提交</van-button></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      radiochecked:'',
      checked:[],
      activeIcon: 'https://img.yzcdn.cn/vant/user-active.png',
      inactiveIcon: 'https://img.yzcdn.cn/vant/user-inactive.png',
      topMenu:[
        {name:'课件'},
        {name:'课件'},
        {name:'课件'},
        {name:'课件'},
        {name:'课件'},
        {name:'课件'},
        {name:'课件'},
        {name:'课件'},
        {name:'课件'}
      ],
    }
  },
  components: {
    // qustions
  },
  mounted(){
    this.$emit('changeTitle', 'asd sad asd');
  },
  methods:{
    goDetail(){
      // this.$router.push({path: '/classdetail',query:{url:''}})
      console.log('点击直接下载ppt')
    },
  }
}
</script>
<style lang="less" scoped>
.main{
  background: #fff;
  padding:5vw;
  .title{
    font-weight: bold;
    color: #0074FF;
  } 
  .content{
    padding:5vw 0;
    text-align: left;
    font-size: 14px;
    .newspaper{
      color: #666666;
      margin-bottom: 5vw;
    }
    .list{
      .list-title{
        color:#666;
        line-height: 10vw;
      }
      .van-checkbox,.van-radio{
        .img-icon{
          width: 5vw;
        }
        padding:1vw 0;
        .van-checkbox__label{
          color:#666 !important;
        }
        
      }
    }
  }
}
</style>