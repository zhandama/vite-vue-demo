<template>
  <div>
    <div class="search-title">
      <van-search shape="round" v-model="keyWords" placeholder="请输入搜索关键词" @search="onSearch" @cancel="keyWords=''"/>
    </div>
    <div class="search-history" v-if="searchLists.length>0&&keyWords!=''">
      <div class="search-history-tag">
        搜索内容
      </div>
      <div class="search-history-cont">
        <div class="van-ellipsis search-history-list" v-for="(item,index) in searchLists" :key="index" @click="goDetail(item)">
          <span>·</span>{{item.title}}
        </div>
      </div>
    </div>

    <div class="search-history" v-if="searchLists.length===0||keyWords===''">
      <div class="search-history-tag">
        历史记录<div class="search-history-img" @click="onDelete"><img src="/@/assets/images/delete.png" /></div>
      </div>
      <div class="search-history-cont">
        <div class="van-ellipsis search-history-list" v-for="(item,index) in hisoryLists" :key="index" @click="goDetail(item)">
          <span>·</span>{{item.title}}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      keyWords:'',
      searchLists:[],
      hisoryLists:[],
    }
  },
  components: {
    // qustions
  },
  mounted(){
    if (localStorage&&localStorage.getItem('searchHistory')) { // 获取本地搜索记录
      this.hisoryLists = JSON.parse(localStorage.getItem('searchHistory'))||[]
    }
  },
  methods:{
    setHistory (item) {
      if (localStorage) {
        var searchHistory = []
        if (localStorage.searchHistory) {
          searchHistory = JSON.parse(localStorage.searchHistory)
        }
        searchHistory = searchHistory.filter(x=>x&&x.title&&x.title!=item.title)
        searchHistory.unshift(item)
        if (searchHistory.length > 5) {
          searchHistory = searchHistory.slice(0,5)
        }
        localStorage.setItem("searchHistory",JSON.stringify(searchHistory))
        this.hisoryLists = searchHistory
      }
    },
    onDelete(){
      this.hisoryLists = []
      localStorage.setItem('searchHistory',[])
    },
    onSearch(){
      let params = {
        keyWords:this.keyWords
      }
      this.$axios.get("/api/search", {params:params}).then(res=>{
        console.log(res.data)
        if (res.data.success){
          this.searchLists = res.data.list
        }
      })
    },
    goDetail(item){
      this.$router.push({path: '/homedetail',query:{id:item.id}})
      this.setHistory(item)
    }
  }
}
</script>
<style lang="less" scoped>
.search-history{
  background: #fff;
  padding:3vw 5vw;
  border-top:1px solid #f6f6f6;
  text-align: left;
  font-weight: 500;
  .search-history-tag{
    position: relative;
    font-size: 3.5vw;
    .search-history-img{
      position: absolute;
      right:0;
      top:0;
      width: 4vw;
      img{
        width: 100%;
      }
    }
  }
  .search-history-cont{
    .search-history-list{
      line-height: 9vw;
      height: 9vw;
      display: block;
      font-size: 4vw;
      span{
        color:#0074FF;
        font-size:10vw;
        padding-right:1vw;
        position: relative;
        top:2.5vw
      }
    }
  }
  
}
</style>