<template>
  <div>
    <van-nav-bar
      title="我的历史"
      left-arrow
      @click-left="$router.go(-1)"
      @click-right="isEdit=!isEdit"
      :fixed="true"
    >
    <template #right>
      <div style="color:#888">{{isEdit?'取消':'编辑'}}</div>
    </template>
    </van-nav-bar>
    <van-pull-refresh class="list-item" v-model="state.refreshing" @refresh="onRefresh" >
      <van-list
        v-model:loading="state.loading"
        :finished="state.finished"
        finished-text="没有更多了"
        loading-text="加载中..."
        @load="onLoad"
      > 
        <div v-for="(item,index) in state.list" :key="index" class="item-home" @click="goDetail(item)">
          <div class="item-check" v-if="isEdit"><van-checkbox v-model="item.checked" @click="goDetail(item)"></van-checkbox></div>
          <div class="item-cont">
            <div class="van-multi-ellipsis--l2 item-title">
              这是一段最多显示两行的文字，多余的内容会被省略这是一段最多显示两行的文字，多余的内容会被省略这是一段最多显示两行的文字，多余的内容会被省略
            </div>
            <div class="item-tips">来源：<span>青葱汇金华运营中心</span>&nbsp;&nbsp;<span>2021-04-28 </span></div>
          </div>
          <div class="item-img"><img src="/@/assets/images/test.jpeg" /></div>
        </div>
      </van-list>
    </van-pull-refresh>
    <div class="fixed-btn" v-if="isEdit">
      <van-button class="btn" square  type="default" @click="checkedAll">全选</van-button>
      <van-button class="btn" square  type="danger" @click="onDelete">删除</van-button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MyHistory',
  data() {
    return {
      state:{
        list: [],
        loading: false,
        finished: false,
        refreshing: false,
      },
      isEdit:false
    }
  },
  components: {
    // Header
  },
  mounted(){

  },
  methods:{
    checkedAll(){
      this.state.list.map(item=>{
        item.checked = true
      })
    },
    onDelete(){
      let params = []
      this.state.list.map(item=>{
        if(item.checked){
          params.push(item.id)
        }
      })
      this.$axios.post("/api/delete", params).then(res=>{
        console.log(res.data)
        if (res.data.success){
          this.$toast('删除成功')
          this.isEdit = false
          setTimeout(()=>{
            // this.getList()
          },1000)
        }
      })
    },
    goDetail(item){
      if (this.isEdit) {
        item.checked = !item.checked
      } else {
        this.$router.push({path: '/homedetail',query:{url:''}})
      }
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
          this.state.list.push({id:this.state.list.length + 1,checked:false});
        }
        console.log(this.state.list)
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
.item-home{
  background: #fff;
  padding:5vw;
  display: flex;
  width: 90vw;
  overflow-x:hidden;
  .item-check{
   position: relative;
   margin: 6vw 3vw 6vw 0;
  }
  .item-img{
    width: 22vw;
    height: 16.5vw;
    img {
      width: 100%;
      height: 100%;
      border-radius: 10px;
    }
  }
  .item-cont{
    text-align: left;
    width: 70vw;
    .item-title {
      line-height: 6vw;
      margin-right:5px;
      font-weight: bold;
      font-size: 4vw;
    }
    .item-tips {
      color:#999;
      margin-top:5px;
      font-size:12px
    }
  }
}
</style>