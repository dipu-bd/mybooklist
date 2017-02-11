<template>
  <div id="home-page">
    <div class="glossy-back">
      <div class="row">
        <h1 id="page-title" class="col-xs-12">My Book List</h1>
      </div>
      <div class="row">
        <div class="col-sm-6">
          <router-link to="/books" class="btn round-button" id="book-list-button">List of Books</reouter-link>
        </div>
        <div class="col-sm-6">
          <router-link to="/list" class="btn round-button" id="my-list-button">Reading List</reouter-link>
        </div>
      </div>
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
    background: url(../assets/books.jpg) no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
  
  .glossy-back {
    background: rgba(0, 0, 0, 0.50);
    padding: 2em 5em;
    box-shadow: 0px 1px 10px #000;
  }
  
  #page-title {
    color: white;
    font-size: 5em;
    padding: 10px 0 20px 0;
    font-family: 'Cabin', sans-serif;
    text-shadow: 0px 0px 10px #000;
  }

  .round-button {
    font-family: 'Quicksand', sans-serif;
    font-size: 2em;
    padding: 0.25em 1.5em;
    display: inline-block;
    box-sizing: border-box;
    border-width: 0;
    border-radius: 2em;
    margin: 5px;
  }
  .round-button:hover {
    box-shadow: 0px 1px 10px #000;
  }
  
  #book-list-button {
    color: #fff;
    background-color: chocolate;
    border: 2px solid darkgoldenrod;
  }

  #my-list-button {
    color: white;
    background-color: teal;
    border: 2px solid darkcyan;
  }
  
</style>