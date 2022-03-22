<template>
  <div id="detailPage">
    <!-- 顶部nav -->
    <detail-nav class="detailNav"/>
    <!--  -->
    <scroll class="detailScroll" ref="detailScroll">
      <!-- 轮播图 -->
      <detail-swiper class="detailSwiper" :child-top-imgs="topImages"/>
 
      <!-- 轮播图下的商品信息 -->
      <goods-info :goods-info="goodsInfo"/>
      <!-- 商家信息 -->
      <shop-info :shop-info="shopInfo"/>
      <!-- 商品详情信息 -->
      <goods-detail :goods-detail="goodsDetail" @loadDetailImage="loadDetailImage"/>
     <!-- 参数信息 -->
      <detail-params :goods-params="goodsParams"/>
      <!-- 评论 -->
    <goods-comment :goods-comment="goodsComment" />
    </scroll>
    
  </div>
</template>
<script>
import DetailSwiper from "./childComponents/detailSwiper.vue";
import DetailNav from "./childComponents/detailNav.vue";
import GoodsInfo from "./childComponents/goodsInfo.vue";
import ShopInfo from "./childComponents/shopInfo.vue";
import Scroll from "@/components/common/scroll/Scroll.vue";
import GoodsDetail from './childComponents/goodsDetail.vue'
import DetailParams from './childComponents/detailParams.vue'
import GoodsComment from './childComponents/goodsComment.vue'
import { getDetail, getGoodsInfo, getShopInfo } from "@/network/detail.js";
export default {
  name: "detail",
  components: {
    DetailSwiper,
    DetailNav,
    GoodsInfo,
    ShopInfo,
    Scroll,
    GoodsDetail,
    DetailParams,
    GoodsComment,
  },
  data() {
    return {
      iid: null,
      topImages: [], // 把这个传给子组件props
      goodsInfo: {},
      shopInfo: {},
      goodsDetail:{},
      goodsParams:{},
      goodsComment:{},
    };
  },
  created() {
    console.log(this.$route.query.iid); // iid
    this.iid = this.$route.query.iid;
    console.log(this.iid);

    getDetail(this.iid).then((res) => {
      // console.log(res);
      // console.log(res.result.itemInfo.topImages);
      const data = res.result;
      // console.log(data);

      // 获取轮播图数据
      this.topImages = data.itemInfo.topImages;

      // 获取录播图下面的商品信息
      this.goodsInfo = new getGoodsInfo(
        data.itemInfo,
        data.columns,
        data.shopInfo
      );

      // 获取商家信息
      this.shopInfo = new getShopInfo(data.shopInfo);
      console.log(this.shopInfo);

      // 获取商品详情信息
      console.log(data.detailInfo);
      this.goodsDetail = data.detailInfo

      // 获取商品参数信息
      this.goodsParams = data.itemParams
      console.log(this.goodsParams);

      // 获取评论参数信息
      this.goodsComment = data.rate
      console.log(this.goodsComment);
    });
  },
  methods:{
    loadDetailImage(){
      this.$refs.detailScroll.refresh()
      console.log('---监听图片');
    }
  },
  
};
</script>
<style  scoped>
#detailPage {
  position: relative;
  z-index: 9;
  background-color: #f4f5f4;
  height: 100vh;
}
.detailNav {
  position: relative;
  top: 0px;
  z-index: 20;
}
.detailScroll{
    height: calc(100% - 44px);
}
.detailSwiper {
  height: 320px;
}

</style>