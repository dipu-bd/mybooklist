<template>
  <section id="app">

    <app-view>
      <app-nav slot="navbar" v-if="showNav"></app-nav>
      <router-view slot="content"></router-view>
    </app-view>

    <app-footer></app-footer>

  </section>
</template>

<script>
  import AppNav from './components/Navbar.vue'
  import AppView from './components/AppView.vue'
  import AppFooter from './components/Footer.vue'

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
@import url(../../node_modules/bootstrap/dist/css/bootstrap.min.css);
@import url(../../node_modules/font-awesome/css/font-awesome.min.css);
@import url(https://fonts.googleapis.com/css?family=Cabin|Gloria+Hallelujah|Inconsolata|Nunito|Nunito+Sans|Pacifico|Quicksand|Raleway|Rubik|Source+Sans+Pro|VT323);

html,
body {
    margin: 0;
    padding: 0;
}

.vue-form-generator .hint {
    color: darkslategray;
    font-family: 'Nunito Sans', sans-serif;
}

.vue-form-generator .errors {
    color: red;
    font-family: 'Inconsolata', monospace;
}
</style>
