<template>
    <div class="goodsList">
      <list-item class="list-item" v-for="(item, index) in childGoods" :key="index" :listItem="item"></list-item>
    </div>
</template>
<script>
import ListItem from '@/components/content/goods/goodsListItem'
export default {
    name: 'GoodsList',
    components:{
        ListItem
    },
    props:{
        childGoods:{
            type: Array,
            default() {
                return []
            }
        }
    },
    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>
<style  >
 .goodsList{
  display: flex;
  flex-wrap: wrap;
  /* justify-content: space-around; */
   /* 左右间隔12px */
    /* margin: 0 4px 0 8px; */
    margin: 1% 0.8% 0 2%;
 } 

</style>