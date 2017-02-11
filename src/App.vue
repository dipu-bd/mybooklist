<template>
  <section id="app">

    <app-view>
      <app-nav slot="navbar" v-show="showNav"></app-nav>
      <router-view slot="content"></router-view>
    </app-view>

    <app-footer></app-footer>

  </section>
</template>

<script>
  import AppNav from 'components/Navbar'
  import AppView from 'components/AppView'
  import AppFooter from 'components/Footer'

  export default {
    name: 'app',
    components: {
      AppNav,
      AppView,
      AppFooter
    },
    computed: {
      showNav() {
        return this.$route.name !== 'home'
      }
    }
  }

</script>

<style>
  html,
  body {
    margin: 0;
    padding: 0;
  }
</style>