<template>
  <div class="address">
    <van-address-edit
      :area-list="areaList"
      show-delete
      show-set-default
      :search-result="searchResult"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      @delete="onDelete"
      @change-detail="onChangeDetail"
    />
  </div>
</template>
<script>
import { areaList } from '@vant/area-data';
import { ref } from 'vue';
import { Toast } from 'vant';

export default {
  setup() {
    const searchResult = ref([]);
    const onSave = () => {
      Toast('save')
    };
    const onDelete = () => {
      Toast('delete')
    };
    const onChangeDetail = (val) => {
      if (val) {
        
      } else {
        searchResult.value = [];
      }
    };

    return {
      onSave,
      onDelete,
      areaList,
      searchResult,
      onChangeDetail,
    };
  },
};
</script>
<style lang="less" scoped>

</style>