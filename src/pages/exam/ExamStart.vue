<template>
<div class="start">
  <div class="start-list" v-for="(item,index) in lists" :key="index" >
    <div class="main" v-if="lists_active===(index+1)">
      <div class="start-cont">
        <div class="van-hairline--bottom start-title">
          <div class="start-tt">{{item.name}}</div>
          <div class="start-tr"><span class="start-tr-a">{{lists_active}}</span>/<span class="start-tr-b">{{lists.length}}</span></div>
          <div class="start-time" v-if="type==2">
            <van-circle  v-model:current-rate="currentRate" :rate="0" layer-color="#ddd" stroke-width="120" :text="String(countDownTime)" size="42" />
          </div>
        </div>
        <div class="start-question start-input" id="wrap" v-html="item.title">
        </div>
        <div class="start-items" v-if="item.type!=3">
          <div class="start-item" 
            :class="{
            'active':!item.checked&&sun_item.isAnswer,
            'isTrue':item.checked&&sun_item.isAnswer&&sun_item.isTrue,
            'isFalse':item.checked&&sun_item.isAnswer&&!sun_item.isTrue}"
            v-for="(sun_item,sun_index) in item.question" :key="sun_index"
            @click="onAnswer(item, sun_item)" >{{sun_item.tag}}. {{sun_item.name}}</div>
        </div>
      </div>
      <div class="start-cont mt10" v-if="item.showAnswer">
        <div class="van-hairline--bottom start-title">
          <div class="start-tt">答案解析</div>
        </div>
        <div class="start-question">
          <div class="start-ts">正确答案：{{item.answer}}</div>
          <div>{{item.description}}</div>
        </div>
      </div>
    </div>
    <van-button class="info-submit" round  type="primary" @click="submit(item)" v-if="lists_active===(index+1)">{{btnText(item)}}</van-button>
  </div>
  
</div>
</template>
<script>
export default {
  data() {
    return {
      bottomText:'下一题',
      lists_active:1,
      lists:[
        // {
        //   type:3,
        //   name:'填空题',
        //   title:'请输入_______正确答案正确答案',
        //   question:[
        //     {tag:"A",name:"台儿庄战役"},
        //     {tag:"B",name:"淮海战役"},
        //     {tag:"C",name:"辽沈战役"},
        //     {tag:"D",name:"平津战役"}
        //   ],
        //   answer:"我就是我",
        //   description:"山东蓬莱农民唐和恩使用过的竹棍上，刻着他在解放战争时支援前线所经过的战线，包括山东、安徽、江苏三省有关的城镇和村庄的地名。可判断，他支援过下列哪次战役"
        // },
        {
          type:1,
          name:'单选题',
          title:'山东蓬莱农民唐和恩使用过的竹棍上，刻着他在解放战争时支援前线所经过的战线，包括山东、安徽、江苏三省有关的城镇和村庄的地名。可判断，他支援过下列哪次战役',
          question:[
            {tag:"A",name:"台儿庄战役"},
            {tag:"B",name:"淮海战役"},
            {tag:"C",name:"辽沈战役"},
            {tag:"D",name:"平津战役"}
          ],
          answer:"C",
          description:"山东蓬莱农民唐和恩使用过的竹棍上，刻着他在解放战争时支援前线所经过的战线，包括山东、安徽、江苏三省有关的城镇和村庄的地名。可判断，他支援过下列哪次战役"
        },{
          type:2,
          name:'多选题',
          title:'阿萨德撒的啊实打实的啊实打实的啊实打实大实打实大大声道阿实打实大大声道阿斯达',
          question:[
            {tag:"A",name:"台儿庄战役"},
            {tag:"B",name:"淮海战役"},
            {tag:"C",name:"辽沈战役"},
            {tag:"D",name:"平津战役"}
          ],
          answer:"B,C",
          description:"山东蓬莱农民唐和恩使用过的竹棍上，刻着他在解放战争时支援前线所经过的战线，包括山东、安徽、江苏三省有关的城镇和村庄的地名。可判断，他支援过下列哪次战役"
        },
      ],
      isInterval:'',
      countDownTime: 10,
      currentRate:0,
      query:this.$route.query,
      type:this.$route.query.type,
      time:0,
      right:0,
      TimeInterval:''
    }
  },
  watch:{
    lists_active(val) {
      console.log(this.lists[val-1].type)
      if(this.lists[val-1].type == 3){
        setTimeout(()=>{
          goNextInput()
        },1000)
      }
    }
  },
  components: {
  },
  mounted(){
    if (this.type==2) {
      this.countDown()
    }
    this.lists.map(x=>{
      x.checked = false,
      x.isAnswer = false,
      x.question.map(n=>{
        n.answer = ''
      })
      if (x.type==3) {
        var arr=[],i=0;
        x.title = x.title.split('_')
        x.title.map(x=>{
          if (x===''){
            if (i==0) {
              arr.push('_')
            }
            i++
          } else if(x != '') {
            arr.push(x)
          }
        })
        var input = `<input style="display:inline-block;width:${i*5}vw;padding:0 1vw;margin:0.5vw 0.5vw;border:1px solid #ccc;border-radius:0;-webkit-appearance:none;" maxlength="${i}"/>`
        x.title = arr.join('').replace('_',input)
      }
    })
    this.allTimeInterval = setInterval(()=>{ // 答题总计时
      this.time++
      // console.log(this.time)
    },1000)
  },
  beforeRouteLeave() {
    clearInterval(this.allTimeInterval)
  },
  methods:{
    onAnswer(item, sun_item){
      if (item.checked) { // 已作答
        return
      }
      if (item.type == 1) { // 单选题
        item.question.map(x=>{
          x.isAnswer = ''
        })
        sun_item.isAnswer = sun_item.tag
      } else if (item.type == 2) { //多选题
        sun_item.isAnswer = sun_item.isAnswer ?'':sun_item.tag
      } 
      item.isAnswer = true
    },
    btnText(item){
      var tips = '确定'
      if (item.checked) {
        tips = '下一题'
      }
      if (this.lists_active === this.lists.length) {
        tips = '完成'
      }
      return tips
    },
    countDown(){ // 挑战答题倒计时
      this.isInterval = setInterval(()=>{
        if (this.countDownTime > 0) {
          this.countDownTime--
          this.currentRate = this.currentRate + 100/10
        } else {
          this.initCountDown()
          this.timeOverNext()
          this.submit(this.lists[this.lists_active-1])
        }
      },1000)
    },
    timeOverNext(){
      let item = this.lists[this.lists_active-1]
      if ((item.type == 1 || item.type == 2)&&!item.isAnswer) {
        item.question.map(x=>{
          if (x.isAnswer){
            x.isTrue = false
          }
        })
      } else if(item.type == 3) {
        var inputAnswer = document.getElementsByTagName("input")[0]
        item.isAnswer = ''
        inputAnswer.style.border = '1px solid #F54147'
      }
      setTimeout(()=>{ // 
        item.checked = true
      },100)
    },
    initCountDown(){ // 初始化倒计时
      clearInterval(this.isInterval)
      this.countDownTime = 10
      this.currentRate = 0
    },
    reload(){
      this.$router.reload()
    },
    submit(item){
      let answer = []
      if ((item.type == 1||item.type == 2) && item.isAnswer) { // 单选题or多选题 
        item.question.map(x=>{
          if (x.isAnswer) {
            answer.push(x.tag)
          }
        })
        if(answer.join(',') == item.answer) {
          item.question.map(x=>{
            if (x.isAnswer) {
              x.isTrue = true
            }
          })
          this.right++
        } else {
          item.showAnswer = true
          if (item.type == 2) {
            item.question.map(x=>{
              if (x.isAnswer){
                x.isTrue = false
              }
            })
          }
        }
        setTimeout(()=>{
          item.checked = true
        },100)
      } else if (item.type == 3) {
         var inputAnswer = document.getElementsByTagName("input")[0]
         if (inputAnswer.value && inputAnswer.value.length>0) {
          if (inputAnswer.value == item.answer) { // 填空题回答正确
            item.isAnswer = inputAnswer.value
            inputAnswer.style.border = '1px solid #3CC075'
          } else {
            inputAnswer.style.border = '1px solid #F54147'
            item.showAnswer = true
          }
          inputAnswer.readOnly = true
          setTimeout(()=>{ 
            item.checked = true
          },100)
        } 
      }
      if (this.lists_active<this.lists.length||!item.checked) {
        if (!item.checked) {
          return
        }
        this.lists_active++
        if (this.type==2) {
          this.initCountDown()
          this.countDown()
        }
      } else {
        let query = Object.assign({time:this.time,right:this.right},this.query)
        this.$router.replace({path: '/examend',query})
      }
    },
    goHistory(){ // 退出答题
      this.$dialog.alert({
        message: '确定要退出答题？ \n退出后答案历史将不会保留',
        showCancelButton:true,
        confirmButtonColor:"#0074FF"
      }).then(action => {
        // on close
        if (action === 'confirm') {
          this.$router.go(-1)
        } else {
          console.log('取消')
        }
      }).catch(()=>{
        console.log('取消')
      });
    },
  }
}
</script>
<style lang="less">
.start-time{
  .van-circle__text{
    font-size: 18px !important;
  } 
}
</style>
<style lang="less" scoped>
.start{
  padding-bottom:5vw;
}
.info-submit{
	background: #0074FF;
	width: 80vw;
}
.mt10{
  margin-top:5vw;;
}
.main{
  padding:0;
  margin:5vw;
  border-radius:10px;
  text-align: left;
  background: none;
  .start-cont{
    background: #fff;
  }
  .start-title{
    position: relative;
    height: 6vw;
    padding:4vw;
    .start-time{
      width: 60px;
      position: absolute;
      left:38vw;
      top:1.5vw;
      .van-circle__text{
        font-size: 20px !important;
      } 
    }
    .start-tt{
      border-left: 1vw #0074FF solid;
      padding-left:2vw;
      font-family: PingFang SC;
      font-weight: bold;
    }
    .start-tr{
      position: absolute;
      right: 5vw;
      top:1vw;
      color:#666;
      font-family: PingFang SC;
      .start-tr-a{
        font-size: 9vw;
        padding:0 1vw;
        font-weight: bold;
        color:#000;
      }
      .start-tr-b{
        font-size: 5vw;
        padding:0 1vw;
      }
    }
  }
  .start-question{
    padding:4vw;
    line-height:7vw;
    font-weight: 500;
    .start-ts{
      padding-bottom:3vw;
    }
  }
  .start-items{
    padding:5vw;
    width: 80vw;
    .start-item{
      background-color:#F2F4F6;
      border:1px solid #F2F4F6;
      border-radius: 5px;
      width: 70vw;
      height: 13vw;
      line-height: 13vw;
      padding:0 5vw;
      margin:3vw 0;
      
    }
    .active{
      background-size:7%;
      background-position:95% center;
      border:1px solid #0074FF;
      color:#0074FF;
    }
    .isTrue{
      background: url('../../assets/images/exam_yes.png') #EBF9F1 no-repeat;
      border:1px solid #EBF9F1;
      background-size:7%;
      background-position:95% center;
      color:#3CC075;
      
    }
    .isFalse{
      background: url('../../assets/images/exam_no.png') #FFEDED no-repeat;
      border:1px solid #FFEDED;
      background-size:7%;
      background-position:95% center;
      color:#F54147;
    }
  }
  .start-answer{
    padding:4vw;
    margin-top:3vw;
  }
  
}
</style>