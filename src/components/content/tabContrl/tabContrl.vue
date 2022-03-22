<template>
    <div class="tabControl">
        <div class="item" v-for="(item, index) in childTab" :key="index" :class="{itemActive: index == currentIndex}" @click="itemClick(index)">
           <span>{{item}}</span> 
          <div :class="{underline: index == currentIndex}"></div>
        </div>

    </div>
</template>
<script>
export default {
    name:'tabControl',
    props:{
        childTab:{
            type:Array,
            default(){
                return []
            }
        }
    },
    data(){
        return{
            currentIndex:0,
            
        }
    },
    methods:{
        itemClick(index){
            console.log(this.childTab)
            this.currentIndex = index
            this.$emit("tabClick", index) // 给父组件home传事件
        }
    },
   
}
</script>
<style scope>
.tabControl{
    display: flex;
    text-align: center;
    font-size: 15px;
    line-height: 15px;
    height: 48px;
    padding-top: 10px;
   
}
.item{
    flex: 1;
   line-height: 21px;
}
.itemActive{
    width: 20px;
    color: #FC3C64;
}

.underline{
    width: 20px;
    border-bottom: 3px solid #FC3C64;
    margin: 0 auto ;
    border-radius: 50%;
    padding-top: 4px;
}
</style>