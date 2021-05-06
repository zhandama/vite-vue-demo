<template>
  <div>
    <Header />
    <van-pull-refresh class="list-item" v-model="state.refreshing" @refresh="onRefresh">
      <van-list
        v-model:loading="state.loading"
        :finished="state.finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
      <div class="question" v-if="state.list.length>0">
        <div v-for="(item,index) in state.list" :key="item" class="item-question" :class="{'addpadding':index%2===0}" @click="goDetail(item)">
          <div class="item-img"><img src="/@/assets/images/test.jpeg" /></div>
          <div class="item-cont">
            <div class="item-title">校园安全问题调查</div>
            <div class="item-tips">共13题</div>
          </div>
        </div>
      </div>
      </van-list>
    </van-pull-refresh>
  </div>
</template>
<script>
import Header from "../components/Header.vue"
export default {
  name: 'Question',
  data() {
    return {
      keyWords:'',
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
    Header
  },
  mounted(){
  },
  methods:{
    goDetail(){
      this.$router.push({path: '/questiondetail',query:{url:''}})
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
<style lang="less" scoped>
.question{
  display: flex;
  flex-wrap: wrap;
  background: #fff;
  padding:5vw;
}

.item-question{
  width: 42.5vw;
  margin-bottom:5vw;
  .item-img{
    width: 42.5vw;
    height: 28vw;
    margin-right:5vw;
    img {
      width: 100%;
      height: 100%;
      border-radius: 10px;
    }
  }
  .item-cont{
    text-align: left;
    width: 100%;
    .item-title {
      font-weight:bold;
      line-height: 12vw;
    }
    .item-tips {
      color:#999;
      font-size:12px;
       line-height: 4vw;
    }
  }
}
.addpadding{
  margin-right:5vw
}
</style>