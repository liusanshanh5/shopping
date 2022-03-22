<template>
  <div class="wrapper" ref="wrapper">
    <div class="scrollContent" ref="scrollContent">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import BScroll from "better-scroll";

export default {
  name: "Scroll",
  data() {
    return {
      scroll: null, // 在做返回顶部的时候，这个数据要传给父组件
      // scrollTo:{}
      scrollContent:null
    };
  },
  props:{
    probeType:{
      type:Number,
      default:0
    },
    childLoad:{  // 收父组件传过来的控制加载更多的布尔值
      type:Boolean,
      default:false
    }
  },
  mounted() {
    /* 
        $refs：绑定在组件中，this.$refs.ref名字 指向对象
        绑定在标签中，this.$refs.ref名字 指向标签
         */
    // 1.创建BScroll对象
    this.scroll = new BScroll(this.$refs.wrapper, {
      pullUpLoad: this.childLoad,
      disableMouse: false,
      disableTouch: false,
      mouseWheel: true,
      click: true,
      probeType: this.probeType,
      // observeImage: true
    });

    /* 
      解决：引用插件后，PC端滚动，移动端不滚的问题：
      原因：在创建ref="wrapper"这个BScroll对象时，就会把子元素的ovflow:scroll给禁止掉，
      办法：此时我们重新设置子元素的相关属性即可
     */
    this.scrollContent = new BScroll(this.$refs.scrollContent, {
      // probeType: this.probeType,
      // pullUpLoad: this.pullUpLoad,
    });

    // 2. 监听滚动的位置事件
    this.scroll.on('scroll', (position) => {
      // console.log(position);
      // 把事件传给home父组件
      this.$emit('emit-position', position)
    })

    // 3.上拉加载更多
    this.scroll.on('pullingUp', () => {
      console.log('上拉加载');
      // 谁做上拉加载更多，就传给谁，现在首页用
      this.$emit('loadMore')

    })
  },
  methods: {
    scrollTo(x, y, time = 300) {
      // console.log("----");
      this.scroll && this.scroll.scrollTo(x, y, time); // 为什么用逻辑与：（前面为false，后面不执行）钩子函数的执行顺序有关home首页的scroll初始化之前，这里面的函数已经执行了，可能会报错
    },

    // 每次触发 pullingUp 钩子后，你应该主动调用 finishPullUp() 告诉 BetterScroll 准备好下一次的 pullingUp 钩子。
    finishPullUp(){
      this.scroll && this.scroll.finishPullUp()
    },
    refresh(){
      // 引入防抖后查看refresh函数被调用的次数
      // console.log('引入防抖后-----');
      this.scroll && this.scroll.refresh()
    }
  },
};
</script>
<style  scoped>
</style>