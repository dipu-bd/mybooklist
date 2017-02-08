import Vue from 'vue'
import Router from 'vue-router'
import Hello from 'components/Hello'

import BookList from 'components/BookList'
import Book from 'components/Book'
import MyList from 'components/MyList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
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
    }
  ]
})
