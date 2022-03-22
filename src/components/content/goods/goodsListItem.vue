<template>
  <div class="listItem" @click="detail">
    <!-- 监听每张图片是否加载完成
    在vue中使用： @load="" 
    在原生js中：img.onload = function(){}-->
    <img :src="listItem.show.img" alt="" @load="imgLoad" />
    <div class="info">
      <p class="title">{{ listItem.title }}</p>

      <p>
        <span class="symbol">￥</span>
        <span class="price">{{ listItem.price }}</span>
      </p>

    
      <p class="collect">
        <span>{{ listItem.cfav }}</span>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "GoodsListItem",

  props: {
    listItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },

  mounted() {},

  methods: {
    // 监听每张图片是否加载完成
    imgLoad(){ // 在这里调用refresh()
      // console.log('---'); // 执行30次，
      /* 问题1：太耗性能，所以要防抖
        问题2：非父子（goodsListItem和home不是父子）通信方式-事件总线eventBus（）
      */
     this.$bus.$emit('itemImageLoad');
    },


    // 点击进入详情页
    detail(){
      console.log('---详情页');
      console.log(this.listItem);
      // this.$router.push('/detail/' + this.listItem.iid)  // 请求到的地址：http://192.168.0.101:8080/detail/1lrzvr8
      this.$router.push({
        path:'/detail',
        query:{
          iid:this.listItem.iid
        }
      }) // 请求到的地址：http://192.168.0.101:8080/detail?iid=1m745k0
    }
  },
};
</script>
<style>
.listItem {
  /* 375 * 47% =  176.25 一个图片的大小的父容器
    375-176.25 * 2 =22.5px   justify-content: space-around;现在的中间是11px，左右各5.5px，
    为了使中间间隔6.5px 左右空隙8px(这个方法不能调整中间空间<左右空间，所以不要使用justify-content: space-around;)
    */
  width: 47%;
  /* 中间间隔8px */
  /* margin: 0 4px 0 4px; */
  margin: 2.4% 1.2% 0 1.2%;
  /* 左右间隔12px (.goodsList样式中查看)*/

  background-color: white;
  border-radius: 4px;
  /* 隐藏顶部突出到圆角外部的直角 */
  overflow: hidden;
}
.listItem img {
  /* 相对于父元素listItem */
  width: 100%;
}
.info {
  padding: 4px 8px 10px 10px;
}
/* 商品标题title */
.title {
  width: 100%;
  font-size: 14px;
  line-height: 21px;
  /* 文本超出2行隐藏 */
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  /* position: relative; */
}
/* 人民币符号 */
.symbol {
  font-size: 12px;
  color: #fc3c64;
}
.price {
  font-size: 16px;
  color: #fc3c64;
  font-weight: 500;
}

.collect {
  position: relative;
  top: -20px;
}
.collect span {
  display: block;
  text-align: right;
}
.collect span::before {
  content: "";
  position: absolute;
  margin: 0px -16px;
  top: 2px;
  width: 14px;
  height: 14px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>