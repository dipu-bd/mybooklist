<template>
  <div class="navbar navbar-inverse navbar-static-top">      
    <div class="container">

      <!-- Show header text -->
      <div class="navbar-header">      
        <button type="button" 
                class="navbar-toggle collapsed" 
                data-toggle="collapse" 
                data-target="#bs-example-navbar-collapse-1" 
                aria-expanded="false">
          <span class="sr-only">Toggle navigation</span>
          <span v-for="i in 3" class="icon-bar"></span>
        </button>
        <router-llink class="navbar-brand" to="/" exact>{{ title }}</router-llink>
      </div>

      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav navbar-right">
          <li v-for="{link, text} in navlinks" :class="{ active: isActive(link) }">
            <router-link :to="link">{{ text }}</router-link>
          </li>                
        </ul>        
      </div>
    
    </div>    
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
  },
  data: function () {
    return {
      navlinks: [
        { link: '/', text: 'Home' },
        { link: '/books', text: 'Books' },
        { link: '/list', text: 'My List' },
        { link: '/add', text: 'Add Book' }
      ]
    }
  },
  methods: {
    isActive: function (link) {
      return false
    }
  }
}
</script>
