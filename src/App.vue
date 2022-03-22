<template>
  <div id="app">
    <!-- keep-alive用来解决离开home页面，再次返回，可以定位到最初离开时的状态（位置等），此方法并不能完美解决，还需要其他办法 -->
    <keep-alive exclude="detail">
       <router-view/>
    </keep-alive>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from '@/components/content/mainTabBar/MainTabBar'
export default {
  name: 'App',
  components:{
    MainTabBar
  }
}
</script>

<style>
  body{
    background-color: #f4f4f4;
  }
  @import 'assets/css/base.css'
 
</style>
