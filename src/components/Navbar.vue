<template>
  <div class="navbar navbar-inverse navbar-fixed-top">      
    <div class="navbar-brand">{{ title }}</div>
    
  </div>
</template>

<script>
export default {
  name: 'AppNav',
  props: {
    title: {
      type: String,
      default: 'My Book List'
    }
  }
}
</script>
