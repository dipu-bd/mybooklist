<template>
  <div id="home-page">
    <div> 
      <h1>My Book List</h1>
      <router-link to='/books'>
        <button>List of Books</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>

<style scoped>
#home-page {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}
</style>
