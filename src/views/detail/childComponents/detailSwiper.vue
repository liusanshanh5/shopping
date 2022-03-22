<template>
    <swiper>
        <swiper-item v-for="(item, key) in childTopImgs" :key="key">
            <img :src="item" alt="">
            <!-- 到这里轮播图做完，但是会有一个bug:选择然和商品，商品详情的轮播图没变化
            原因：因为在app.vue中使用了keep-alive，详情页也进行了缓存，所以，要排除exclude="detail"
            注意：exclude="组件名"，组件名是Detail.vue是export到处的名字
             -->
        </swiper-item>
    </swiper>
</template>
<script>
import { Swiper, SwiperItem } from '@/components/common/swiper/index.js'
export default {
    name:'detailSwiper',
    components:{
        Swiper,
        SwiperItem
    },
    props:{
        childTopImgs:{
            type: Array,
            default(){

            }
        }
    }

}
</script>
