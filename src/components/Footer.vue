<template>
  <van-tabbar v-if="showTabbar" route v-model="active">
    <van-tabbar-item replace to="/class" >
    <span>课件</span>
      <template #icon="props">
        <img :src="props.active ? icon1.active : icon1.inactive" />
      </template>
    </van-tabbar-item>

    <van-tabbar-item replace to="/question" >
    <span>问卷</span>
      <template #icon="props">
        <img :src="props.active ? icon2.active : icon2.inactive" />
      </template>
    </van-tabbar-item>

    <van-tabbar-item replace to="/" >
    <!-- <span>学习</span> -->
      <template #icon="props">
        <img :src="props.active ? icon3.active : icon3.inactive" style="height:36px"/>
      </template>
    </van-tabbar-item>

    <van-tabbar-item replace to="/exam" >
    <span>答题</span>
      <template #icon="props">
        <img :src="props.active ? icon4.active : icon4.inactive" />
      </template>
    </van-tabbar-item>

    <van-tabbar-item replace to="/my" >
    <span>我的</span>
      <template #icon="props">
        <img :src="props.active ? icon5.active : icon5.inactive" />
      </template>
    </van-tabbar-item>
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
      icon1:{
        active: '/@/assets/images/tab_ke1.png',
        inactive: '/@/assets/images/tab_ke.png',
      },
      icon2:{
        active: '/@/assets/images/tab_wen1.png',
        inactive: '/@/assets/images/tab_wen.png',
      },
      icon3:{
        active: '/@/assets/images/tab_xuexi1.png',
        inactive: '/@/assets/images/tab_xuexi.png',
      },
      icon4:{
        active: '/@/assets/images/tab_dati1.png',
        inactive: '/@/assets/images/tab_dati.png',
      },
      icon5:{
        active: '/@/assets/images/tab_my1.png',
        inactive: '/@/assets/images/tab_my.png',
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
