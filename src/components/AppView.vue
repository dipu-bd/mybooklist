<template>
  <div class="main-view"> 
    <slot name="navbar">Navigation bar</slot>
    <slot name="content"></slot>
  </div>
</template>

<script>
export default {
  name: 'AppView'
}
</script>

<style scoped>
.main-view {
  min-height: 100vh;  
}
</style>
