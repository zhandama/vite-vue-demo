<template>
  <Header />
  <div class="exam">
    <div class="item-exam" :class="{'addpadding':index%2==0}" @click="goSelect(item)" v-for="(item,index) in lists" :key="index">
        <div class="item-img"><img :src="item.url" /></div>
        <div class="item-cont">
          <div class="item-title">{{item.name}}</div>
        </div>
    </div>
  </div>
</template>
<script>
import Header from "/@/components/Header.vue"
export default {
  data() {
    return {
      lists:[{
          name:'常识',
          url:'/@/assets/images/exam_1.png'
        },{
          name:'政策',
          url:'/@/assets/images/exam_2.png'
        },{
          name:'法律',
          url:'/@/assets/images/exam_3.png'
        },{
          name:'法规',
          url:'/@/assets/images/exam_4.png'
        },{
          name:'百科',
          url:'/@/assets/images/exam_5.png'
        },{
          name:'教育',
          url:'/@/assets/images/exam_6.png'
        },
      ],

    }
  },
  components: {
    Header
  },
  mounted(){
    
  },
  methods:{
    goSelect(item){
      this.$router.push({path: '/examselect',query:{category:item.name}})
    },
    getList(){
      
    }
  }
}
</script>
<style lang="less" scoped>
.exam{
  display: flex;
  flex-wrap: wrap;
  padding:10vw;
}

.item-exam{
  background: #fff;
  width: 35vw;
  height:35vw;
  margin-bottom:10vw;
  border-radius: 20px;
  .item-img{
    width: 35vw;
    img {
      width:35%;
      padding-top:7vw;
    }
  }
  .item-cont{
    width: 100%;
    .item-title {
      font-weight:bold;
      line-height: 12vw;
    }
  }
}
.addpadding{
  margin-right:10vw
}
</style>