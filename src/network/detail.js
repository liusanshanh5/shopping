import {request} from './request'
export  function getDetail(iid){
    return request({
        url:'/detail',
        // methods:'GET',
        // methods: 'POST',
        params:{
            iid
        }
    })
}

// 汇总
export class getGoodsInfo {
   constructor (itemInfo, columns, shopInfo ){
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.newPrice = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.discount = itemInfo.discountDesc
    this.realPrice = itemInfo.lowNowPrice
    this.columns = columns
    this.services = shopInfo.services
   }
}

// 商家信息
export class getShopInfo{
    constructor (shopInfo){
        this.score = shopInfo.score
        this.cFans = shopInfo.cFans
        this.cSells = shopInfo.cSells
        this.cGoods = shopInfo.cGoods
        this.shopLogo = shopInfo.shopLogo
        this.shopName = shopInfo.name 
    }
}

// 商品详情信息
/* export class getGoodsDetail{
    constructor(){

    }
} */