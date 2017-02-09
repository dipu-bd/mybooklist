<template>
  <div class="navbar navbar-inverse navbar-static-top">
    <div class="container">
      <div class="navbar-header">
        <button type="button" 
                class="navbar-toggle collapsed" 
                data-toggle="collapse" 
                data-target="#bs-example-navbar-collapse-1"
                aria-expanded="false">
          <span class="sr-only">Toggle navigation</span>
          <span v-for="i in 3" class="icon-bar"></span>
        </button>

        <router-link class="navbar-brand" to="/">
          <span>{{ title }}</span>
        </router-link>        
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
  data() {
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
    isActive: function(link) {
      return this.$route.path === link
    }
  }
}
</script>

<style scoped>
.navbar {
  margin: 0
}
</style>

<!-- 

  <b-navbar fixed="top" type="inverse" variant="inverse" toggleable> 

      <b-nav-toggle target="nav_collapse"></b-nav-toggle>

      <router-link class="navbar-brand" to="/">
        <span>{{ title }}</span>
      </router-link>

      <b-collapse isNav id="nav_collapse">
        <b-nav class="navbar-right" isNavBar>
          <b-nav-item v-for="{link, text} in navlinks" :to="link" :active="isActive(link)">
            {{ text }}
          </b-nav-item>
        </b-nav>
      </b-collapse> 
      
  </b-navbar>
  -->
