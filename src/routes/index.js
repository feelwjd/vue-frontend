import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'            // @는 src 를 의미
import Register from '@/components/Register'
import Login from '@/components/Login'
import Index_1 from '@/components/Index_1'
import Edit from '@/components/Edit'
import Delete from '@/components/Delete'

Vue.use(Router)
export const router = new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'index',
            component: Index
        },
        {
            path: '/register',
            name: 'register',
            component: Register
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/index_1/:id_1',
            name: 'index_1',
            component: Index_1
        },
        {
            path: '/edit/:id_1',
            name: 'edit',
            component: Edit
        },
        {
            path: '/delete/:id_1',
            name: 'delete',
            component: Delete
        },                                
    ]
})