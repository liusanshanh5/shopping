<template>
  <div class="shopInfo">
    <div class="shopLogo">
      <span><img :src="shopInfo.shopLogo" alt="" /></span>
      <span class="shopName">{{ shopInfo.shopName }}</span>
    </div>
    <div class="secondRow">
      <div class="shopSell">
        <div class="center">{{ shopInfo.cSells | counterFil}}</div>
        <div class="center">总销量</div>
      </div>
      <div class="totalSell">
        <div class="center">{{ shopInfo.cGoods }}</div>
        <div class="center">全部宝贝</div>
      </div>
      <div class="line">

      </div>
      <div>
        <div class="shopScore" v-for="(item, index) in shopInfo.score" :key="index">
          <span class="scoreName">{{ item.name }}</span>
          <span class="isBetter" :class="{redBetter: item.isBetter}">{{ item.score }}</span>
          <span class="level" :class="{redLevel: item.isBetter}">{{item.isBetter ? '高' : '低'}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "shopInfo",
  data(){
      return{

      }
  },
  props: {
    shopInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  filters:{
      counterFil(value){
          if(value < 10000) return value
          return (value / 10000).toFixed(1) + '万'
      }
  }
};
</script>
<style scoped>
.shopInfo {
  background-color: #fff;
  margin-top: 10px;
  padding: 10px 0 15px 0;
 
}
.shopLogo{
    display: flex;
    align-items: center;
    padding: 10px 0 10px 15px;
}
.shopLogo img {
  width: 48px;
  height: 48px;
}
.shopName{
    vertical-align: middle;
    padding-left:10px ;
}
.shopSell, .totalSell{
    margin-top: 6px;
}
.secondRow{
    display: flex;
    margin: 0 15px ;
}
.secondRow>div{
    flex: auto;
}
.center{
    text-align: center;
    margin-top: 4px;
    font-size: 14px;
}
.line{
    border-left: 1px solid #e1e1e1;
   
}

.scoreName{
    padding-right: 8px;
}
.shopScore{
    display: flex;
    font-size: 12px;
    margin-top: 4px;
}
.isBetter{
    color: #5ea732;
    width: 40px;
}
.redBetter{
     color: #f13e3a;
    width: 40px;
}
.level{
    position: relative;
    right: -10px;
     color: #fff;
     background-color: #5ea732;
       border-radius: 2px;
}
.redLevel{
    position: relative;
    right: -10px;
     color: #fff;
        background-color: #f13e3a;
        border-radius: 2px;
}
</style>