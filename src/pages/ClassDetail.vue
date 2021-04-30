<template>
<div class="pdf" v-show="fileType === 'pdf'">
    <p class="arrow">
    <!-- // 上一页 -->
    <span @click="changePdfPage(0)" class="turn" :class="{grey: currentPage==1}">上一页</span>
    {{currentPage}} / {{pageCount}}
    <!-- // 下一页 -->
    <span @click="changePdfPage(1)" class="turn" :class="{grey: currentPage==pageCount}">下一页</span>
    </p>
    <!-- // 自己引入就可以使用,这里我的需求是做了分页功能,如果不需要分页功能,只要src就可以了 -->
    <!-- <pdf
      :src="pdfSrc"
      :page="currentPage"
      @num-pages="pageCount=$event"
      @page-loaded="currentPage=$event"
      @loaded="loadPdfHandler" >
    </pdf> -->
  </div>
</template>
<script>
// import pdf from 'vue-pdf'
  export default {
    metaInfo: {
      title: 'This is the test',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=2,user-scalable=yes' }
      ]
    },
    // components: {pdf},
    // props: ['pdfSrc'],
    data () {
      return {
        currentPage: 0, // pdf文件页码
        pageCount: 0, // pdf文件总页数
        fileType: 'pdf', // 文件类型
        pdfSrc: this.$route.query||'/@/assets/aaa.pptx' // pdf文件地址
      }
    },
    created() {// 有时PDF文件地址会出现跨域的情况,这里最好处理一下
      // this.pdfSrc = pdf.createLoadingTask(this.pdfSrc)
    },
    methods: {
      // 改变PDF页码,val传过来区分上一页下一页的值,0上一页,1下一页
      changePdfPage (val) {
        // console.log(val)
        if (val === 0 && this.currentPage > 1) {
          this.currentPage--
          // console.log(this.currentPage)
        }
        if (val === 1 && this.currentPage < this.pageCount) {
          this.currentPage++
          // console.log(this.currentPage)
        }
      },
      // pdf加载时
      loadPdfHandler (e) {
        this.currentPage = 1 // 加载的时候先加载第一页
      }
    }
  }
</script>
<style lang="less" scoped>
 .pdf-box {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
    overflow-x: hidden;
    height: 100%;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    font-size: .28rem;
    span {
      width: 100%;
    }
  }
</style>