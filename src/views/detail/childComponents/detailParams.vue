<template>
  <div class="param-info" v-if="Object.keys(goodsParams).length !== 0">
      <table>
        <tr><td>{{goodsParams.info.key}}</td></tr>
          <tr v-for="(item, index) in goodsParams.info.set" :key="index">
              <td class="itemKey">{{item.key}}</td>
              <td>{{item.value}}</td>
          </tr>
      </table>
      <!-- 三层for循环嵌套 -->
      <table v-for="(table, index) in goodsParams.rule.tables" :key="index">
        <tr><td>{{goodsParams.rule.key}}</td></tr>
        <tr v-for="(tr, index) in table" :key="index">
          <td v-for="(td, index) in tr" :key="index">
           {{td}}
          </td>
        </tr>
      
      </table>
     <div class="disclaimer">{{goodsParams.rule.disclaimer}}</div>
  </div>
</template>

<script>
export default {
  name: "DetailParamInfo",
  props: {
    goodsParams: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  updated(){
    console.log(this.goodsParams.rule.tables);
  }
};
</script>

<style scoped>
.param-info {
  padding: 20px 15px;
  font-size: 14px;
  border-bottom: 5px solid #f2f5f8;
}

.param-info table {
  width: 100%;
  border-collapse: collapse;
}

.param-info table tr {
  height: 42px;
}

.param-info table tr td {
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
}

.itemKey{
  width: 64px;
}
.disclaimer{
  color: #999;
  font-size: 12px;
  line-height: 18px;
  padding-top: 10px;
}
</style>
