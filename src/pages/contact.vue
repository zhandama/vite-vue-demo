<template>
  123123
</template>

<script>
export default {
  name: 'contact',
  props: {
    msg: String
  },
  data() {
    return {
      count: 0
    }
  },
  mounted(){
    var url = "/app/gethotel"
    var data = {"page":"3","limit":"4","type":"","num":"","hot":"","keyWords":"","area_id":"","season":"","months":""}
    this.$http.post(url, data).then(res=>{
      console.log(res)
    })
    // this.$toast('提示内容');
    this.$http.get("/api/json").then(res=>{
      console.log(res)
    })
  }
}
</script>
