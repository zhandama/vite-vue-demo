<template>
  <van-tabbar v-if="showTabbar" route v-model="active">
    <van-tabbar-item replace to="/" >
    <span>自定义</span>
      <template #icon="props">
        <img :src="props.active ? icon.active : icon.inactive" />
      </template>
    </van-tabbar-item>
    <van-tabbar-item replace to="/contact" icon="search">标签</van-tabbar-item>
    <van-tabbar-item icon="friends-o">我的</van-tabbar-item>
    <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    msg: String
  },
  data() {
    return {
      showTabbar:true,
      active:0,
      icon:{
        active: '/@/assets/images/tab_ke1.png',
        inactive: '/@/assets/images/tab_ke.png',
      }
    }
  },
  mounted(){

  },
  methods:{
    getList(){
      this.$axios.get("/api/list").then(res=>{
        console.log(res.data)
        this.lists = res.data
      })
    }
  }
}
</script>
