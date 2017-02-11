<template>
  <div id="footer">

    <div id="footer-content" v-if="false">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 text-center">
            A practice project made with <a href="https://vuejs.org/" target="_blank">Vue.js</a>
          </div>
          <div class="col-sm-0">

          </div>
        </div>
      </div>
    </div>

    <div id="footer-bottom">
      <div class="container">
        <span class="pull-left">
        <b>Sudipto Chandra</b> (c) {{copyrightYear}}
      </span>
        <span class="pull-right">
        <a href="https://github.com/dipu-bd/mybooklist" target="_blank">
          <i class="fa fa-github"></i> Github
        </a>
      </span>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'footer',
    computed: {
      copyrightYear() {
        const year = (new Date()).getFullYear()
        return year == '2017' ? '2017' : '2017 - ' + year;
      }
    }
  }

</script>

<style scoped>
  #footer {
    color: white;
    background: DarkCyan;
  }
  
  #footer-content {
    padding: 10px;
  }
  
  #footer-bottom {
    padding: 10px;
    background: Teal;
    font-family: monospace;
  }
  
  a {
    color: white;
  }
  
  a:hover {
    color: wheat;
    text-decoration: none;
  }
</style>