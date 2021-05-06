<template>
  <div>
    <Header />
    
    <van-sticky offset-top="50">
    <van-tabs class="top-list">
      <van-tab v-for="(item,index) in topMenu" :title="item.name+index" :key="index">
      </van-tab>
    </van-tabs>
    </van-sticky>
    <van-pull-refresh class="list-item" v-model="state.refreshing" @refresh="onRefresh">
      <van-list
        v-model:loading="state.loading"
        :finished="state.finished"
        finished-text="没有更多了"
        @load="onLoad"
        offset="150"
      >
        <div v-for="item in list" :key="item" class="item-class" @click="goDetail(item)">
          <div class="item-img"><img src="/@/assets/images/ppt.png" /></div>
          <div class="item-cont">
            <div class="van-multi-ellipsis--l2 item-title">{{item.title}}.ppt</div>
            <div class="item-tips">9.0MB·{{item.form}} {{item.date}} 创建</div>
          </div>
          <!-- {{item}} -->
        </div>
        
      </van-list>
    </van-pull-refresh>
  </div>
</template>
<script>
import Header from "../components/Header.vue"
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
        loading: false,
        finished: false,
        refreshing: false,
      },
      list:[],
      params:{
        page:1,
        pageSize:20
      },
      isLoading:true
    }
  },
  components: {
    Header
  },
  mounted(){
    // this.getList()
  },
  methods:{
    getList(){
      this.$axios.post("/api/classList",{params:this.params}).then(res=>{
        this.state.refreshing = false;
        this.state.loading = false;
        if (res && res.success){
          this.params.page ++
          if (res.list.length>0) {
             this.list = this.list.concat(res.list)
          }
        }
      })
    },
    goDetail(){
      // this.$router.push({path: '/homedetail',query:{url:''}})
      console.log('点击直接下载ppt')
    },
    onLoad() {
      this.getList()
    },
    onRefresh(){
      // 清空列表数据
      this.state.finished = false;
      this.state.loading = true;
      this.params.page = 1
      this.list = []
      this.onLoad();
    }
  }
}
</script>
<style lang="less" >
.top-list{
  .van-tabs__nav{background: #CFE5FF !important;}
}
.item-class{
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