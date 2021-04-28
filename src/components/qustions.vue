<template>
    <div v-for="item in lists" :key="item.id">{{item.title}}
      <div>{{item.title}}</div>
    </div>
</template>

<script>
export default {
  name: 'qustions',
  props: {
    msg: String
  },
  data() {
    return {
      lists: []
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
