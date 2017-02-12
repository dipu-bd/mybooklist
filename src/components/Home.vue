<template>
  <div id="home-page">
    <div class="glossy-back">
      <div class="row">
        <span id="page-title" class="col-xs-12">
          My Book List
        </span>
        <span id="page-subtitle">
          Make your own list of books <br> 
          and keep track of your reading
        </span>
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
    background: rgba(0, 0, 0, 0.75);
    padding: 2em 5em;
    box-shadow: 0 0 10px 2px #000;
    border-radius: 10px;
  }
  
  #page-title {
    display: block;
    color: snow;
    font-size: 4.5em;
    padding-top: 10px;
    font-weight: 700;
    font-family: 'Quicksand', sans-serif;
    text-shadow: 0 0 0 8px black;
  }
  #page-subtitle {
    display: block;
    padding-bottom: 30px;
    color: aqua;
    font-size: 2em;    
    font-family: 'Cabin', sans-serif;
    text-shadow: 0 0 0 0 4px black;
  }
  
  .round-button {
    font-family: 'Raleway', sans-serif;
    font-size: 2em;
    padding: 0.25em 1.5em;
    display: inline-block;
    box-sizing: border-box;
    border-width: 0;
    border-radius: 2em;
    margin: 5px;
  }
  
  .round-button:hover {
    box-shadow: 0px 0px 10px 3px #111;
  }
  .round-button:focus {
    box-shadow: inset 0px 0px 10px 2px rgba(20, 20, 20, 0.40);
  }
  
  #book-list-button {
    color: #fff;
    background-color: chocolate;
  }
  
  #my-list-button {
    color: white;
    background-color: mediumslateblue;
  }
</style>