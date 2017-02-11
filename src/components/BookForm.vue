<template>
  <div class="container">
    <div class="row">
      <div class="col-md-offset-3 col-md-6 col-sm-offset-2 col-sm-8">

        <div class="panel panel-default">
          <div class="panel-heading">
            <h1 class="panel-title">Add new book</h1>
          </div>
          <div class="panel-body">
            <vue-form-generator :schema="schema" :model="model" :options="formOptions">
            </vue-form-generator>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  import Book from '../schema/book.js'

  export default {
    name: 'bookform',
    data() {
      return {
        model: Book.model,
        schema: Book.schema,
        formOptions: Book.formOptions
      }
    }
  }

</script>

<style scoped>
  .container {
    padding: 10px;
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