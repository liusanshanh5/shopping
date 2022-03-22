<template>
  <div class="goodsDetail" v-if="Object.keys(goodsDetail).length !== 0">
    <div class="desc">
      {{ goodsDetail.desc }}
    </div>
    <div class="detail">
      <div class="description">
        <div
          v-for="(item, index) in goodsDetail.detailImage[0].list"
          :key="index"
        >
          <!-- <div class="key">
          {{ goodsDetail.detailImage[0].key }}
        </div> -->
          <img :src="item" alt="" @load="loadDetailImage" />
        </div>
      </div>
    </div>
    <div></div>
  </div>
</template>
<script>
export default {
  name: "goodsDetail",
  data(){
      return {
            counter:0,
            imgLength:0,
      }
  },
  props: {
    goodsDetail: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    loadDetailImage() {
        if(++this.counter == this.imgLength)
      this.$emit("loadDetailImage");
    },
  },
  watch:{
      goodsDetail(){
          this.imgLength = this.goodsDetail.detailImage[0].list.length
          console.log('加入watch监听');
          console.log(this.imgLength);
      }
  }
};
</script>
<style scoped>
.goodsDetail {
  margin-top: 10px;
}
.desc {
  background-color: #fff;
  padding: 15px;
  font-size: 12px;
  line-height: 18px;
  text-indent: 2em;
}
.description {
  padding: 10px 0px;
  margin-top: 10px;
  background-color: #fff;

}
.description>div{
    width: 100vw;
}
.description>div:last-child{
    /* margin-bottom: 60px; */
}
.description img{
    width: 100%;
}
.key {
  padding-left: 15px;
}
</style>