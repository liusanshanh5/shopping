<template>
    <div class="backTop" >
        <img src="~assets/img/common/top.png" alt="">
    </div>
</template>
<script>
export default {
    name:'backTop',
    
}
</script>
<style  scoped>
    .backTop{
        position: fixed;
        bottom: 56px;
        right: -32px;
        z-index: 30;

        
    }
    .backTop img{
        width: 50%;
        height: 50%;
    }
</style>