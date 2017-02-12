import { validators } from 'vue-form-generator'

export default {
  model: {
    name: '',
    authors: '',
    pages: null,
    publish: null,
    isbn: '',
    clear() {
      this.name = ''
      this.authors = ''
      this.pages = null
      this.publish = null
      this.isbn = ''
    },
    data() {
      return {
        name : this.name,
        authors: this.authors.split(';').map((v)=> v.trim()),
        pages: Number(this.pages),
        publish: this.publish,
        isbn: this.isbn
      }
    }
  },

  formOptions: {
    validateAfterLoad: true,
    validateAfterChanged: true
  },

  schema: {
    fields: [
      {
        type: 'input',
        inputType: 'text',
        label: 'Name',
        model: 'name',
        minlength: 2,
        maxlength: 255,
        placeholder: 'Book name',
        required: true,
        featured: true,
        validator: validators.string
      },
      {
        type: 'textArea',
        multi: true,
        label: 'Authors',
        model: 'authors',
        placeholder: 'Names of the authors',
        hint: 'Separate names by a semi-colon.',
        required: true,
        validator: validators.string
      },
      {
        type: 'input',
        inputType: 'number',
        label: 'Pages',
        model: 'pages',
        required: true,
        min: 1,
        placeholder: 'Number of pages'
      },
      {
        type: 'input',
        inputType: 'text',
        label: 'ISBN',
        model: 'isbn',
        maxlength: 25,
        placeholder: 'ISBN Number',
        validator: validators.string
      },
      {
        type: 'pikaday',
        label: 'Publish Date',
        placeholder: 'Publication date',
        model: 'publish',
        validator: validators.date,
        pikadayOptions: {
          position: 'top left'
          
        }
      }
    ]
  }

}
