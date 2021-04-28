<template>
  <h1>{{ msg }}</h1>
  <button @click="count++">count is: {{ count }}</button>
  <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
  <van-circle v-model:current-rate="count" :rate="10" :speed="100" text="倒计时" layer-color="#ebedf0" stroke-width='80' size="60px" />
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      msg:'123',
      count: 20,
      countDown:''
    }
  },
  mounted(){
    console.log('mounted')
    this.countDown = setInterval(() => {
      if (this.count<100) {
        this.count = this.count + 1
      } else {
        clearInterval(this.countDown)
      }
    }, 100);
  }
}
</script>
