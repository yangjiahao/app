<template>
  <div v-if="getBottomNav" class="bottom-navigation">
    <ul class="bottom-navigation-ul">
      <li class="bottom-navigation-li">
          <span class="bottom-navigation-li-icon icon1"></span>
          <span class="bottom-navigation-li-text">首页</span>
      </li>
      <li class="bottom-navigation-li">
          <span class="bottom-navigation-li-icon icon2"></span>
          <span class="bottom-navigation-li-text">久善公益</span>
      </li>
      <li class="bottom-navigation-li">
          <span class="bottom-navigation-li-icon icon3"></span>
          <span class="bottom-navigation-li-text">久善商场</span>
      </li>
      <li class="bottom-navigation-li">
          <span class="bottom-navigation-li-icon icon4"></span>
          <span class="bottom-navigation-li-text">我的</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'BottomNav',
  computed: {
    ...mapGetters([
      'getBottomNav'
    ])
  }
}
</script>
<style scoped>
.bottom-navigation{
  width: 100%;
  height: 96px;
  position: fixed;
  bottom: 0;
  background-color: #ffffff;
}
.bottom-navigation-ul{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  list-style-type: none;
}
.bottom-navigation-li{
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.bottom-navigation-li-icon{
  display: inline-block;
  width: 38px;
  height: 38px;
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.icon1{
  background-image: url('../../assets/nav_home.png');
}
.icon2{
  background-image: url('../../assets/nav_jiushan.png');
}
.icon3{
  background-image: url('../../assets/nav_shop.png');
}
.icon4{
  background-image: url('../../assets/nav_my.png');
}
.bottom-navigation-li-text{
  font-size: 18px;
  color: #8e8e8e;
  margin-top: 17px;
}
</style>
