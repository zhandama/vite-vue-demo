<template>
  <router-view />
  <van-tabbar v-if="showTabbar" route v-model="active">
    <van-tabbar-item replace to="/" icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item replace to="/contact" icon="search">标签</van-tabbar-item>
    <van-tabbar-item icon="friends-o">我的</van-tabbar-item>
    <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      active: 0,
      showTabbar:true,
    }
  },
  components: {
  }
}
</script>
