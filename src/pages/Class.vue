<template>
  <div>
    <van-sticky>
      <div class="top-search">
        <div class="logo"><img src="/@/assets/images/logo.png" /></div>
        <div class="search"><van-search v-model="keyWords" placeholder="搜索内容" ref="keyWords" shape="round" background="#0074FF"/></div>
      </div>
    <van-tabs>
      <van-tab v-for="(item,index) in topMenu" :title="item.name+index" :key="index">
      </van-tab>
    </van-tabs>
    </van-sticky>
    <van-pull-refresh v-model="state.refreshing" @refresh="onRefresh">
      <van-list
        v-model:loading="state.loading"
        :finished="state.finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <div v-for="item in state.list" :key="item" class="item" @click="goDetail(item)">
          <div class="item-img"><img src="/@/assets/images/ppt.png" /></div>
          <div class="item-cont">
            <div class="item-title">全科阅读B-2003.ppt</div>
            <div class="item-tips">9.0MB·范丽平 2019/8/30 12:09创建</div>
          </div>
          <!-- {{item}} -->
        </div>
        
      </van-list>
    </van-pull-refresh>
  </div>
</template>
<script>
export default {
  name: 'Home',
  data() {
    return {
      keyWords:'',
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
      active:0,
      state:{
        list: [],
        loading: false,
        finished: false,
        refreshing: false,
      }
    }
  },
  components: {
    // qustions
  },
  mounted(){
    this.countDown = setInterval(() => {
      if (this.count<100) {
        this.count = this.count + 1
      } else {
        clearInterval(this.countDown)
      }
    }, 50);
  },
  methods:{
    goDetail(){
      this.$router.push({path: '/classdetail',query:{url:''}})
    },
    onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        if (this.state.refreshing) {
          this.state.list = [];
          this.state.refreshing = false;
        }
        for (let i = 0; i < 10; i++) {
          this.state.list.push(this.state.list.length + 1);
        }

        // 加载状态结束
        this.state.loading = false;

        // 数据全部加载完成
        if (this.state.list.length >= 40) {
          this.state.finished = true;
        }
      }, 1000);
    },
    onRefresh(){
      // 清空列表数据
      this.state.finished = false;

      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.state.loading = true;
      this.onLoad();
    }
  }
}
</script>
<style lang="less">
.item{
  background: #fff;
  padding:5vw;
  display: flex;
  .item-img{
    width: 10vw;
    margin-right:5vw;
    img {
      width: 100%;
    }
  }
  .item-cont{
    text-align: left;
    width: 100%;
    .item-title {
      font-weight:bold;
      line-height: 6.5vw;
    }
    .item-tips {
      color:#999;
      font-size:12px
    }
  }
}
</style>