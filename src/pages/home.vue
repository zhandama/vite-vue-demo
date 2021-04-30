<template>
  <div>
    <van-sticky>
      <div class="top-search">
        <div class="logo"><img src="/@/assets/images/logo.png" /></div>
        <div class="search"><van-search v-model="keyWords" placeholder="搜索内容" ref="keyWords" shape="round" background="#0074FF"/></div>
      </div>
    <van-tabs>
      <van-tab v-for="(item,index) in topMenu" :title="item.name" :key="index">
      </van-tab>
    </van-tabs>
    </van-sticky>
    <!-- <van-pull-refresh v-model="state.refreshing" @refresh="onRefresh">
      <van-list
        v-model:loading="state.loading"
        :finished="state.finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <div v-for="item in state.list" :key="item">
          {{item}}
        </div>
      </van-list>
    </van-pull-refresh> -->
  </div>
</template>
<script>
export default {
  name: 'Home',
  data() {
    return {
      keyWords:'',
      topMenu:[
        {name:'推荐'},
        {name:'最新'},
        {name:'科技'},
        {name:'顾问'},
        {name:'滴滴'},
        {name:'是的'},
        {name:'大的'},
        {name:'最后'},
        {name:'一个'}
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
    onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
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
