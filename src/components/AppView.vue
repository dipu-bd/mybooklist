<template>
  <div class="main-view">
    <div ref="NavBar">
      <slot name="navbar">Navigation bar</slot>
    </div>
    <div :style="{ 'margin-top' : navbarHeight }">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppView',
  computed: {
    navbarHeight: function () {
      return this.$refs.NavBar ? this.$refs.NavBar.offsetHeight : 54
    }
  }
}
</script>

<style scoped>
.main-view {
  min-height: 100vh;  
}
</style>
