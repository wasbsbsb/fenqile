import Vue from 'vue'
import VueRouter from 'vue-router'

import fenqile from './components/shouye.vue';
import fenlei from './components/fenlei.vue';
import leka from './components/leka.vue';
import me from './components/me.vue';
import xingyonka from './components/xingyonka.vue';


Vue.use(VueRouter);

var routes = [{
    path: '/fenqile',
    component: fenqile,
    meta: {
        title: '分期乐-年轻人的消费平台',
        content: 'disable'
    }
}, {
    path: '/',
    component: fenqile,
    meta: {
        title: '分期乐-年轻人的消费平台',
        content: 'disable'
    }
}
    , {
    path: '/fenlei',
    component: fenlei,
    meta: {
        title: '商品分类',
        content: 'disable'
    }
}, {
    path: '/leka',
    component: leka,
    meta: {
        title: '乐卡',
        content: 'disable'
    }
}, {
    path: '/me',
    component: me,
    meta: {
        title: '分期乐-深受年轻人喜爱的平台',
        content: 'disable'
    }
}, {
    path: '/xingyonka',
    component: xingyonka,
    meta: {
        title: '分期乐',
        content: 'disable'
    }
}];

var router = new VueRouter({
    routes
})

export default router;