<template>
    <div class="recommend">
        <div class="recommend-item" v-for="(item, key) in childRecommends " :key="key">
            <a :href="item.link">
                <img :src="item.image" alt="">
         
                <div class="recommend-title">{{item.title}}</div>
            </a>
        </div>
    </div>
</template>
<script>
export default {
    name:'recommend',
    props:{
        childRecommends:{ // 推荐-父传子：这里接收来自父组件的数据
        type:Array,
        default(){
          return []
        }
      }
    }
}
</script>
<style>
.recommend {
   display: flex;
   padding: 16px 0 16px 0;
   border-bottom: 10px solid #e5e5e5;
  background-color: #fff;
  }

  .recommend-item {
   flex: 1;
   text-align: center;
  }

  .recommend-item img {
    /* 图片大小自适应 */
   width: 56%; 
  }
  .recommend-title{
    margin-top: 8px;
    font-weight: 500;
    color:#FC3C64;
  }
</style>