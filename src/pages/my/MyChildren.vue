<template>
  <div>
    <div v-if="lists.length>0 && addInfo==false">
        <div class="children-list" v-for="(item,index) in lists" :key="index">
          <div class="children-item">孩子姓名：<span>{{item.name}}</span></div>
          <div class="children-item">年级：<span>{{item.grade}}</span></div>
          <div class="children-item">孩子姓名：<span>{{item.sex==1?'男':'女'}}</span></div>
          <div class="children-item">性别：<span>{{item.class}}</span></div>
          <div class="children-item">学校：<span>{{item.school}}</span></div>
          <div class="children-item">学号：<span>{{item.studyNo}}号</span></div>
          <div class="children-edit" @click="editInfo(item)"><img src="/@/assets/images/children_edit.png" /></div>
          <div class="children-delete" @click="deleteInfo(item,index)">删除</div>
        </div>
        <van-button class="info-submit" round type="primary" @click="onAddInfo">新增</van-button>
    </div>
    
    <!-- 新增子女信息 -->
    <van-nav-bar
      title="子女信息管理"
      left-arrow
      @click-left="onClickLeft"
      :fixed="true"
      v-if="addInfo"
    />
    <van-form @submit="onSubmit" validate-trigger="onSubmit" v-if="addInfo||lists.length==0">
      <div style="height:10px"></div>
      <van-field v-model="params.name" name="孩子姓名" label="孩子姓名" placeholder="请输入孩子姓名" maxlength="20"
        :rules="[{ required: true, message: '请填写孩子姓名' }]" />
      <van-field name="radio" label="性别">
        <template #input>
          <van-radio-group v-model="params.sex" direction="horizontal">
            <van-radio :name="1">男</van-radio>
            <van-radio :name="0">女</van-radio>
          </van-radio-group>
        </template>
      </van-field>
      <div style="height:10px"></div>
      <van-field v-model="params.school" name="学校" label="学校" placeholder="请填写学校" maxlength="30"
        :rules="[{ required: true, message: '请填写学校' }]" />

      <van-cell title="年级" is-link :value="params.grade==''?'请选择':params.grade" @click="gradeShow=true" />
      <van-cell title="班级" is-link :value="params.class==''?'请选择':params.class" @click="classShow=true" />

      <van-field v-model="params.studyNo" name="学号" label="学号" placeholder="请输入学号" maxlength="11"
        :rules="[{ required: true, message: '请填写学号' }]" />
      <van-button class="info-submit" round type="primary" native-type="submit">提交</van-button>
    </van-form>
    <van-action-sheet v-model:show="gradeShow" title="请选择年级">
      <div class="content">
        <div class="grade-list" :class="{'active':item===params.grade}" v-for="(item,index) in gradeList" :key="index" @click="params.grade=item">{{item}}</div>
        <van-button class="info-submit" round type="primary"  @click="gradeShow=false">确定</van-button>
      </div>
    </van-action-sheet>
    <van-action-sheet v-model:show="classShow" title="标题">
      <div class="content">
        <div class="grade-list" :class="{'active':(index+'班')===params.class}" v-for="index in 12" :key="index" @click="params.class=index+'班';classInput=''">{{index+'班'}}</div>
        <input class="class-input" placeholder="其他班（可命名）" v-model="classInput" @input="params.class=classInput" @blur="params.class=classInput"/> 
        <van-button class="info-submit" round type="primary"  @click="classShow=false">确定</van-button>
      </div>
    </van-action-sheet>
  </div>
</template>
<script>
export default {
  data() {
    return {
      lists:[],
      addInfo:false,
      params: {
        name: '',
        studyNo: '',
        school:'',
        sex: 1,
        grade:'',
        class:''
      },
      gradeShow: false,
      classShow: false,
      gradeList:['学前','一年级','二年级','三年级','四年级','五年级','六年级','初一','初二','初三'],
      classInput:'',
      canSubmit:false,
    }
  },
  mounted() {
    this.getList()
  },
  methods: {
    getList(){
      this.$axios.post("/api/childrenList").then(res=>{
        console.log(res)
        if (res && res.success){
          this.lists = res.list
        }
      })
    },
    onAddInfo(){
      this.addInfo = true
      this.params = {
        name: '',
        studyNo: '',
        school:'',
        sex: 1,
        grade:'',
        class:''
      }
    },
    editInfo(item){
      console.log(item)
      this.params = item
      this.addInfo = true
    },
    deleteInfo(item,index){
      if (this.canSubmit) { // 多次点击
        return
      }
      this.canSubmit = true
      let params = {
        id:item
      }
      this.$axios.post("/api/delete", params).then(res=>{
        this.canSubmit = false
        if (res && res.success){
          this.$toast('删除成功')
          setTimeout(()=>{
            this.lists.splice(index,1)
            // this.getList()
          },1000)
        }
      },()=>{
        this.canSubmit = false
      })
    },
    onSubmit() {
      console.log(this.params)
    },
    onClickLeft(){
      this.addInfo = false
    }
  }
}
</script>

<style lang="less" scoped>
.children-list{
  background: #fff;
  border-radius: 10px;
  display: flex;
  flex-wrap: wrap;
  margin: 5vw;
  padding:4vw;
  font-weight: 500;
  text-align: left;
  position: relative;
  .children-item{
    width: 41vw;
    line-height: 8vw;
    font-size: 4vw;
    span{
      color:#666666;
    }
  }
  .children-edit{
    position: absolute;
    width: 5vw;
    height: 5vw;
    right:4vw;
    top:4vw;
    border:1px dashed #ccc;
    img {
      width: 100%;
    }
  }
  .children-delete{
    position: absolute;
    width: 9vw;
    right: 2vw;
    bottom:3vw;
    color:#999;
    font-size: 3.5vw;
  }
}

.info-submit {
  background: #0074ff;
  width: 80vw;
  margin: 5vw auto !important;
}
.content {
  padding:5vw;
  display: flex;
  flex-wrap: wrap;
  .grade-list{
    width: 28vw;
    background: #E8E8E8;
    border-radius: 5px;
    padding:2.3vw 0;
    margin:1vw;
  }
  .active{
    background: #0074FF;
    color:#fff
  }
  .class-input{
    margin:1vw;
    width:100%;
    padding:2.3vw 0;
    background: #E8E8E8;
    border-radius: 5px;
    border:0;
    text-align: center;
  }
}
</style>