<template>
  <div id="book-form">
    <div class="container">
      <div class="row">
        <div class="col-lg-offset-3 col-lg-6 col-md-offset-2 col-md-8">

          <div class="panel panel-default">
            <div class="panel-heading">
              <span class="panel-title">Add new book</span>
            </div>
            <div class="panel-body">
              <vue-form-generator ref="form" :schema="schema" :model="model" :options="formOptions">
              </vue-form-generator>
            </div>
            <div class="panel-footer">              
              <button class="btn btn-lg btn-block btn-primary" @click="submitForm" :disable="submitting">
                <i class="fa fa-send"></i> Submit
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Book from '../models/book.js'

  export default {
    name: 'bookform',
    data() {
      return {
        submitting: false,
        model: Book.model,
        schema: Book.schema,
        formOptions: Book.formOptions
      }
    }, 
    methods: {
      submitForm() {
        const form = this.$refs.form
        if(form && form.validate()) {
          const data = form.model.data();
          // save the data
          form.model.clear();
        }
      }
    }
  }

</script>

<style scoped>
  #book-form {
    padding: 10px 0 10px 0;
    background: #ff6 url(../assets/book_bar.png) no-repeat center bottom scroll;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
  
  .panel {
    margin: 0;
    box-shadow: 0px 1px 10px #999;
  }

  .panel-heading {
    padding: 15px 20px 5px 20px;
  }
  
  .panel-title {
    font-size: 2em;
    font-family: 'Cabin', sans-serif;
    color: darkslategray;
  }
</style>

<style>
  .vue-form-generator .hint {
    color: darkslategray;
    font-family: 'Nunito Sans', sans-serif;
  }
  
  .vue-form-generator .errors {
    color: red;
    font-family: 'Inconsolata', monospace;
  }
</style>