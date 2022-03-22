<template>
    <div class="goodsInfo">
        <div class="goodsTitle">{{goodsInfo.title}}</div>
        <div class="goodsPrice">
           <!-- <span class="symbol">￥</span> -->
           <span class="newPrice"> {{goodsInfo.newPrice}}</span>
           <span class="oldPrice"><i></i>{{goodsInfo.oldPrice}}</span>
           <span class="discount">{{goodsInfo.discount}}</span>
        </div>
        <div class="goodsColumn">
            <div class="columnItem" v-for="(item, index) in goodsInfo.columns" :key="index">
                {{item}}
            </div>
        </div>
        <div class="goodsService">
            
            <div class="serviceName" v-for="(item, index) in goodsInfo.services" :key="index">
                <img :src="item.icon" alt="">
               <span>{{item.name}}</span> 

            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'goodsInfo',
    data(){
        return {
            subNewPrice:0,
        }
    },
    props:{
        goodsInfo:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    updated(){ 
        // 仔细品味，为什么放在这个钩子下
        this.subNewPrice = this.goodsInfo.newPrice.substr(1) 
        console.log(this.subNewPrice); 
    // const a = "￥300.00-￥500.00"
    // const reg = new RegExp("￥")
    // this.subNewPrice = this.goodsInfo.newPrice.replace(reg,'')
    // console.log(this.subNewPrice);
    // console.log(a.replace(reg, ''));
        
   
    },
    // watch:{
    //     testWatch(){
    //         this.subNewPrice = this.goodsInfo.newPrice
    //         console.log(this.subNewPrice );
    //         const reg = new RegExp("￥")
    //         this.subNewPrice = this.subNewPrice.replace(reg,'')
    //         console.log(this.subNewPrice );
    //     }
    // }
}
</script>
<style scoped>
.goodsInfo{
    padding: 15px 15px 0 15px;
    background-color: #fff;
}
.goodsTitle{
    font-size: 14px;
    line-height: 21px;
}
.goodsPrice{
    /* display: flex; */
    /* align-items: center; */
}
.oldPrice, .discount{
    margin-left: 8px;
}
.newPrice{
    color: #FC3C64;
    font-size: 18px;
    font-weight: 500;
}
.oldPrice{
    color: #999;
    position: relative;
    font-size: 12px;
}
.oldPrice i{
    position: absolute;
    top: 7px;
    width: 100%;
    border-bottom: 1px solid #999;
}
.discount{
    font-size: 11px;
    background-color: #FC3C64;
    color: #fff;
    padding: 1px 4px 1px 4px;
    border-radius: 10px;
    line-height: 16px;
    position: relative;
    top: -2px;
}
.goodsColumn{
    display: flex;
    padding: 15px 0 10px;
    border-bottom: 1px solid #e1e1e1;
}
.columnItem{
    flex: auto;
    font-size: 12px;
    line-height: 12px;
}
.goodsService{
   
    display:flex;
    align-items:center;
    justify-content:center;
    padding: 15px 0 15px;
    /* border-bottom: 1px solid #e1e1e1; */
}
.serviceName{
    display:flex;
    flex: auto;
    font-size: 12px;
    text-align: center;
}
.serviceName img{
    width: 12px;
    height: 12px;
}
.serviceName span{
    padding-left: 2px;
}
</style>