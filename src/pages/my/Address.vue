<template>
  <div class="address">
    <van-address-list
      v-model="chosenAddressId"
      :list="list"
      default-tag-text="默认"
      @add="onAdd"
      @edit="onEdit"
    />
  </div>
</template>
<script>
export default {
  data() {
    return {
      chosenAddressId:1,
      list:[
      {
        id: '1',
        name: '张三',
        tel: '13000000000',
        address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室',
        isDefault: true,
      },
      {
        id: '2',
        name: '李四',
        tel: '1310000000',
        address: '浙江省杭州市拱墅区莫干山路 50 号',
      },
    ]
    }
  },
  components: {
  },
  mounted(){
  },
  methods:{
    onAdd (){
      this.$router.push({path:'/addressedit'})
    },
    onEdit(item, index) {
      this.$toast('编辑地址:' + index)
      this.$router.push({path:'/addressedit',query:{id:index}})
    },
  }
}
</script>
<style lang="less">
.address{
  .van-button--danger{
    background: #0074FF!important;
    border-color:#0074FF!important;
  }
  .van-tag--danger{
    background: #0074FF!important;
  }
  .van-address-item .van-radio__icon--checked .van-icon{
    background: #0074FF!important;
    border-color:#0074FF!important;
  }
}

</style>