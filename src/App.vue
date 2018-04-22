<template>
  <div id="app">
    <div :class="{'router-view': getBottomNav}">
      <router-view/>
    </div>
    <bottom-nav></bottom-nav>
  </div>
</template>

<script>
import BottomNav from './common/components/BottomNav.vue'
import { mapGetters } from 'vuex'
export default {
  name: 'App',
  components: {
    BottomNav
  },
  computed: {
    ...mapGetters([
      'getBottomNav'
    ])
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
body{
  background-color: #f2fafc;
  height: 100vh;
}
.router-view{
  margin-bottom: 96px;
}
</style>
