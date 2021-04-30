<template>
    <div>
        <van-cell title="头像" style="line-height:60px">
            <van-uploader v-model="imgUrl" multiple :max-count="1" preview-size="60" image-fit="fill"/>
        </van-cell>
        <van-field
            v-model="username"
            name="昵称"
            label="昵称"
            placeholder="昵称"
            :rules="[{ required: true, message: '请填写昵称' }]"
        />
    </div>
</template>
<script>
export default {
  data() {
    return {
        username:'',
        imgUrl:[]
    }
  },
  mounted(){
    
  }
}
</script>