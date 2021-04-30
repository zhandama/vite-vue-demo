<template>
  <div>
		<div style="height:10px"></div>
    <van-cell title="头像" class="info-img">
      <van-uploader v-model="params.imgUrl" multiple :max-count="1" preview-size="50" />
    </van-cell>

    <van-field v-model="params.nickName" name="昵称" label="昵称" placeholder="请输入" maxlength="20"
      :rules="[{ required: true, message: '请填写昵称' }]" />

    <van-field v-model="params.name" name="真实姓名" label="真实姓名" placeholder="请输入"  maxlength="10"
      :rules="[{ required: true, message: '请填写真实姓名' }]" />

		<van-cell>
			<template #title>
				<span>性别</span>
			</template>
			<van-radio-group v-model="params.sex" direction="horizontal">
				<van-radio name="1">男</van-radio>
				<van-radio name="2">女</van-radio>
			</van-radio-group>
		</van-cell>
		<div style="height:10px"></div>
    <van-field v-model="params.address" name="地址" label="地址" placeholder="请输入" maxlength="30"
      :rules="[{ required: true, message: '请填写地址' }]" />

    <van-field v-model="params.phone" name="电话" label="电话" placeholder="请输入" maxlength="11"
      :rules="[{ required: true, message: '请填写电话' }]" />

		<van-button class="info-submit" round  type="primary" @click="submit">提交</van-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
			params:{
				name:'',
				nickName:'',
				sex:'1',
				address:'',
				phone:'',
				imgUrl:[]
			},
    }
  },
  mounted() {

  },
	methods:{
		submit(){
			console.log(this.params)
		}
	}
}
</script>

<style lang="less" scoped>
.info-submit{
	background: #0074FF;
	width: 80vw;
	margin: 5vw auto !important;
}
.info-img{
	line-height:50px !important;
	.van-cell__value{
		height:50px !important;
	}
}
</style>