<template>
  123123
  <van-circle v-model="count" :rate="5" :speed="100" text="倒计时" layer-color="#ebedf0" stroke-width='80' size="60px" />
</template>

<script>
export default {
  name: 'contact',
  props: {
    msg: String
  },
  data() {
    return {
      count: 5
    }
  },
  mounted(){
    var url = "/app/gethotel"
    var data = {"page":"3","limit":"4","type":"","num":"","hot":"","keyWords":"","area_id":"","season":"","months":""}
    this.$axios.post(url, data).then(res=>{
      console.log(res.data)
    })
    // this.$toast('提示内容');
    this.$axios.get("/api/list").then(res=>{
      console.log(res.data)
    })
  }
}
</script>
