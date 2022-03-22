<template>
  <div class="goodsComment">
     
    <ul class="comment_list">
         <div class="rate_title">
          <div>评价</div>
          <div class="more">更多</div>
      </div>
      <li
        class="list_item"
        v-for="(item, index) in goodsComment.list"
        :key="index"
      >
        <div class="user_info-top">
            <div class="avatar">
          <img :src="item.user.avatar" alt="" />
         
        </div>
        <div class="user_info">
            <div class="user_name"> {{ item.user.uname }}</div>
           
            <!-- 没有时间参数，这里写死 -->
           <div class="comment_date">2020-05-03</div>
        </div>
        </div>
      
        <div class="content">
            {{item.content}}
        </div>
        <div class="style">
            {{item.style}}
        </div>
      </li>
    </ul>
  
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      <li>10</li>
      <li>11</li>
      <li>12</li>
      <li>13</li>
      <li>14</li>
      <li>15</li>
      <li>16</li>
      <li>17</li>
      <li>18</li>
      <li>19</li>
      <li>20</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "goodsComment",
  props: {
    goodsComment: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  updated() {
    console.log("------");
  },
};
</script>
<style  scoped>
.rate_title{
    display: flex;
}
.rate_title div{
    flex: 1;
}
.more{
    text-align: right;
}
.comment_list{
    background-color: #fff;
    padding: 15px;
}
.list_item {
    /* display: flex; */
    /* 换行，让品论内容跑到下面 */
    /* flex-wrap: wrap; */
}
.user_info-top{
    flex-wrap: wrap;
    display: flex;
    margin: 10px 0;

}
.list_item div {
    flex-shrink: 0;
}
.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.avatar img {
  width: 100%;
  border-radius: 50%;
}
.user_info{
    margin-left: 10px;
}
.user_name{
    font-size: 15px;

}
.comment_date{
    font-size: 11px;
    color: #999;
    margin-top: 8px;
}
.content{
    font-size: 13px;
    margin-top: 10px;
}
.style{
    font-size: 12px;
    color: #999;
    margin-top: 8px;
}
</style>