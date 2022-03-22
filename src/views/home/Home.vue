<template>
  <div id="home">
    <!-- navigation -->
    <nav-bar class="home-nav">
      <slot name="navCenter"></slot>
    </nav-bar>
    <tab-control
      :class="{ falseSticky: falseSticky }"
      :childTab="ParentTabData"
      @tabClick="ParentTabClick"
      ref="tabControl1"
      v-show="falseSticky"
    >
    </tab-control>
    <!-- 返回顶部 -->
    <back-top @click.native="backTopClick" v-show="topShow"></back-top>
    <scroll
      class="content"
      ref="childScroll"
      :probe-type="probeType"
      @emit-position="backTopShow"
      :child-load="pullUpLoad"
      @loadMore="loadMore"
    >
      <!-- 轮播图 -->
      <home-swiper
        :childBanners="banners"
        @swiperImgLoad="swiperImgLoad"
      ></home-swiper>
      <!-- 推荐 -->
      <recommend :childRecommends="recommends"></recommend>

      <!-- 本周流行 -->
      <feature></feature>
      <!-- 商品列表 ul>li{列表}*50  -->
      <tab-control
        class="tabControl2"
        :childTab="ParentTabData"
        @tabClick="ParentTabClick"
        ref="tabControl2"
      >
      </tab-control>
      <goods-list :childGoods="goods[currentType].list"></goods-list>
    </scroll>
    <!-- <h1>我是</h1> -->
  </div>
</template>
<script>
// 公共组件
import NavBar from "@/components/common/navbar/NavBar";
import Scroll from "@/components/common/scroll/Scroll";
// 子组件
import HomeSwiper from "./childComps/HomeSwiper.vue";
import Recommend from "@/views/home/childComps/Recommend";
import Feature from "@/views/home/childComps/Feature";
import GoodsList from "@/components/content/goods/goodsList";
import TabControl from "@/components/content/tabContrl/tabContrl.vue";
import backTop from "@/components/content/backTop/BackTop.vue";
import { getHomeMultiData, getHomeGoods } from "@/network/home.js";

export default {
  name: "home",
  components: {
    NavBar, //
    HomeSwiper, // 轮播图
    Recommend, // 推荐
    Feature, // 本周流行
    TabControl, //
    GoodsList,
    Scroll, // 滚动子组件
    backTop, //返回顶部
  },
  data() {
    return {
      // result:null,
      banners: [], // 轮播图
      recommends: [], // 推荐
      ParentTabData: ["流行", "新品", "精品"], // tabContrl数据
      goods: {
        // tabContrl的三类商品列表数据
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop", // 当前tabContrl类型控制变量
      probeType:3, // 这个传给scroll子组件，让home可以监听滚动
      topShow: false, // 布尔值判断是否显示返回顶部按钮
      pullUpLoad: true, // 上拉加载 更多
      tabOffsetTop:0, // 存放TabControl组件到父组件的距离
      falseSticky:false, // 吸顶，决定是否有吸顶的样式
      saveY:0, // 用来保存离开首页记录滚动的位置信息
    };
  },
  created() {
    // 这里写主要的逻辑
    // 首页数据调封装函数
    this.getHomeMultiData(); // this.调用因为函数名getHomeMultiData一样，不用this.会当成导入的适用

    // 首页数据调用封装函数
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");

    
  },
  mounted(){ 
    /* 
    监听item中图片是否加载（通过事件总线）
    为什么监听图片要放在mounted函数里面：回调函数执行顺序有关，放这里，防止出现scroll还没有初始化的时候就执行了监听，报错，
    当切换底部菜单的时候还是报错，所以要把这个监听销毁：可以通过在beforeDestroy生命周期中销毁这个监听事件解决bug 
    */ 
    const refresh = this.debounce(this.$refs.childScroll.refresh, 200)
    this.$bus.$on('itemImageLoad', () => { // 完成这一步后，进行 防抖
      // console.log('---'); // 执行30次，说明监听到了来自goodsListItem的事件
      // 加入防抖
      refresh()
    })

    
  },

  methods: {
    /* 
        点击事件
         */
    // tabContrl切换goods的type类型事件监听
    ParentTabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
        default:
          break;
      }
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },

    // 监听scroll子组件的滚动事件，决定是否显示返回顶部
    backTopShow(position){
      // console.log(position);
      this.topShow =  (-position.y) > 800

      this.falseSticky = (-position.y) > this.tabOffsetTop 
     
    },
    backTopClick() {
      this.$refs.childScroll.scrollTo(0, 0, 300)  //
      console.log("---");
    },
    // 监听轮播图是否加载完毕
    swiperImgLoad(){ 
      // console.log(this.$refs.tabControl2.$el.offsetTop);  // 601（ 监听图片加载完后获取的高度 ）
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
    },
    // 引入防抖后的下拉加载更多 
    loadMore(){
      this.getHomeGoods(this.currentType) 
    },

    // 封装防抖函数
    debounce(func, delay){ // 参数：执行的函数传入这里（refresh），一个等待时间
      let timer = null;
      return function(...args){
        if(timer) clearTimeout(timer)    
        timer = setTimeout(() => {
          func.apply(this, args)
        }, delay)
      }
    },

    /* 
        数据请求方法
        */
    // 请求轮播图、推荐、流行数据
    // getHomeMultiData() // 调用函数， 后面加（）
    getHomeMultiData() {
      // 封装函数这里处理具体的方法
      getHomeMultiData().then((res) => {
        // 异步操作
        // console.log(res);
        // this.result = res // 内存回收机制，所以用变量接收一下
        this.banners = res.data.banner.list;

        // 获取recommend接口数据
        // console.log(res.data.recommend.list);
        this.recommends = res.data.recommend.list;
      })
    },

    // 请求tabContrl商品列表数据
    getHomeGoods(type) {
      // type 指的是pop new choice这三种类型
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        // console.log(res.data.list);
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        //
        this.$refs.childScroll.finishPullUp()
      });
    }
  },
  destroyed(){
    // console.log('home destroyed');
  },
  activated(){
    // console.log('home actived');
    this.$refs.childScroll.scrollTo(0, this.saveY, 0)
    this.$refs.childScroll.refresh()
  },
  deactivated(){
    // console.log('home deactived');
    this.saveY = this.$refs.childScroll.scroll.y
    /* 有bug：["流行", "新品", "精品"]这个位置信息，给三类商品都保存了位置 */
  }
};
</script>
<style scoped>
#home {
  /* padding-top: 44px; */
  height: 100vh;
  position: relative;
}
.home-nav {
  background-color: #fc3c64;
  color: #fff;
  z-index: 100;
}
.tabControl2 {
  padding-bottom: 10px;
  border-bottom: 1px solid #d5d5d5;
  background-color: #fff;
}
.falseSticky {
  position: relative;
  /* 必须有top属性,position: sticky适用移动端，不适应IE */

  padding-bottom: 10px;
  border-bottom: 1px solid #d5d5d5;
  background-color: #fff;
  z-index: 50;
}

.content {
  /* 100%高度是相对于父容器的，所以要给父容器一个高度，在#home样式内加一个vh100（viewpoint height 视口高度） */
  /* height: calc(100% - 93px); */
  /* 隐藏系统自动的滚动 */
  overflow: hidden;
  /* height: 300px; */
  position: absolute;
  top: 44px;
  bottom: 49px;
  margin-bottom: 16px;
}
</style>