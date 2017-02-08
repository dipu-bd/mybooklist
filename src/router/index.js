import Vue from 'vue'
import Router from 'vue-router'

import Home from 'components/Home'
import Book from 'components/Book'
import MyList from 'components/MyList'
import BookList from 'components/BookList'
import BookForm from 'components/BookForm'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/books',
      name: 'BookList',
      component: BookList
    },
    {
      path: '/view/:id',
      name: 'Book',
      component: Book
    },
    {
      path: '/edit/:id',
      name: 'EditBook',
      component: BookForm
    },
    {
      path: '/add',
      name: 'AddBook',
      component: BookForm
    },
    {
      path: '/list',
      name: 'MyList',
      component: MyList
    }
  ]
})
