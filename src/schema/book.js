import { validators } from 'vue-form-generator'

export default {
  model: {
    id: 1,
    name: '',
    authors: '',
    pages: 1,
    publish: null,
    isbn: ''
  },

  formOptions: {
    validateAfterLoad: true,
    validateAfterChanged: true
  },

  schema: {
    fields: [
      {
        type: 'input',
        label: 'ID (disabled text field)',
        model: 'id',
        readonly: true,
        visible: false
      },
      {
        type: 'input',
        inputType: 'text',
        label: 'Name',
        model: 'name',
        minlength: 2,
        maxlength: 50,
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
        minlength: 2,
        placeholder: 'Names of the authors',
        hint: 'Separate names by a comma.',
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
        minlength: 4,
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
          position: 'top left',
          maxDate: new Date()
        }
      },
      {
        type: 'submit',
        buttonText: 'Submit'
      }
    ]
  }

}
