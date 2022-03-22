<template>
  <div>
    <nav-bar class="navBar">
      <div slot="navLeft" class="back" @click="back"><img src="~assets/img/common/back.svg" alt="" /></div>
      <div slot="navCenter" class="navCenter" >
        <div class="title" v-for="(item, index, id) in detailNav" :key="id" :class="{titleActive: currentIndex === index}" @click="titleClick(index)">{{ item.name }}</div>
      </div>
    </nav-bar>
  </div>
</template>
<script>
import NavBar from "@/components/common/navbar/NavBar";
export default {
  name: "detailNav",
  components: {
    NavBar,
  },
   data(){
        return {
            detailNav:[
            {id:'01', name:'商品'},
            {id:'02', name:'参数'},
            {id:'03', name:'评论'},
            {id:'04', name:'推荐'}
            ],
            currentIndex:0
        }
    },
    methods:{
        back(){
            console.log(this.$router); // 去VueRouter 原型protoType里面用go或back方法返回
            // this.$router.go(-1)
            this.$router.back()
        },
        titleClick(index){
            this.currentIndex = index;
        }
    }
};
</script>
<style scoped>
.navBar {
  background-color: #fff;
  color:  #666;;
}
.back{
    line-height: 40px;
}
.back img{
    vertical-align: middle;
    padding-left: 8px;
}
.navCenter{
display: flex;

}
.title{
    flex: 1;
    line-height: 44px;
}
.titleActive{
    color: #FC3C64;
}
</style>