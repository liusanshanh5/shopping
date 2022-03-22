<template>
    <div class="navBar">
        <div class="navLeft">
            <slot name="navLeft"></slot>
        </div>
        <div class="navCenter">
            <slot name="navCenter">购物街</slot>
        </div>
        <div class="navRight">
            <slot name="navRight"></slot>
        </div>
    </div>
</template>
<script>
export default {
    name:'navbar'
}
</script>
<style scoped>
*{
    margin: 0;
    padding: 0;
}
.navBar{
    display: flex;
    height: 44px;
    /* background-color: #FC3C64; */
    
}
.navLeft{
    width: 40px;
    /* background-color: #F111; */
}
.navRight{
    width: 40px;
    /* background-color: #F111; */
}
.navCenter{
    flex: 1;
    text-align: center;
    line-height: 44px;
    /* color:white; */
    font-weight: 500;
     /* background-color: #FC3C64; */
}
</style>