<template>
  <swiper>
    <swiper-item v-for="(item, key) in childBanners" :key="key">
      <a :href="item.link">
        <!-- 监听轮播图的图片加载， -->
        <img :src="item.image" alt="" @load="swiperImgLoad">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
// 轮播图流程
/* 1、在request.js中获取后台数据 2、创建轮播图封装组件 3、给Home组件创建子组件，在子组件中使用轮播图组件
  使用轮播图详细流程：1、父组件home通过data接收后台的轮播图数据，2、父组件给子组件传拿到的banner数据（props）-子组件接收，子组件标签名中绑定接收的变量名*/
  import {Swiper, SwiperItem} from 'components/common/swiper'

  export default {
    name: "HomeSwiper",
    props:{
      childBanners:{ // 轮播图-父传子：定义接收来自父组件的banners
        type:Array,
        default(){
          return []
        }
      },

    },
    data() {
      return {
        isLoad:false
      }
    },
    components: {
      Swiper,
      SwiperItem
    },
    methods: {
      swiperImgLoad(){
        if(!this.isLoad){ // 只需要判断一次图片加载完成就行了，只发一次事件
          console.log('监听轮播图');
          this.$emit("swiperImgLoad")
          this.isLoad = true
        }
      }
    }
  }
</script>

<style scoped>

</style>
