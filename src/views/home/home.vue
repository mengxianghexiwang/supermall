  <!-- 首页 -->
<template>
    <div class="index">
        <Top></Top>
        <Swiper></Swiper>
        <item></item>
        <Tabbar></Tabbar>
    </div>
</template>
<script>
import Top from'../components/index/top'
import Swiper from'../components/index/swiper'
import Item from'../components/index/item'
import Tabbar from'../components/index/tabbar'
export default {
    components:{
      Top,
      Item,
      Swiper,
      Tabbar
    },
      data(){

    return{

      selected:"ShoppingList",

      tabs:[
            require("../image/winItem/del.jpg"),
            require("../image/winItem/del.jpg"),
            require("../image/winItem/del.jpg"),
            require("../image/winItem/del.jpg")],

     }

  },
}
</script>
<style scoped>
.index{
  background: #f3f3f5
}
</style>
