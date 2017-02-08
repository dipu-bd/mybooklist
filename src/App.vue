<template>
  <section id="app">
    <app-view>
      <app-nav slot="navbar"></app-nav>
      <router-view></router-view>
    </app-view>
    <app-footer></app-footer>
  </section>
</template>

<script>
import AppView from 'components/AppView'
import AppNav from 'components/Navbar'
import AppFooter from 'components/Footer'

export default {
  name: 'app',
  components: {
    AppNav,
    AppView,
    AppFooter
  }
}
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
}
</style>
