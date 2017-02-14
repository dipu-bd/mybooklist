import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/Home.vue'
import Book from '../components/Book.vue'
import MyList from '../components/MyList.vue'
import BookList from '../components/BookList.vue'
import BookForm from '../components/BookForm.vue'
import NotFound from '../components/NotFound.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/books',
      name: 'books',
      component: BookList
    },
    {
      path: '/list',
      name: 'list',
      component: MyList
    },
    {
      path: '/add',
      name: 'add',
      component: BookForm
    },
    {
      path: '/edit/:id',
      name: 'edit',
      component: BookForm
    },
    {
      path: '/view/:id',
      name: 'view',
      component: Book
    },
    {
      path: '*',
      name: '404',
      component: NotFound
    }
  ]
})
