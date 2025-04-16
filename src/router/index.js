// src/router/index.js
import {
    createRouter, createWebHistory,createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
{
    path: '/index', 
    name: 'index',
    component: Home
 },
];

const router = createRouter({
   
history: createWebHashHistory(),
routes
});

export default router;
