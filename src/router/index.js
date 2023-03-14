import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "../views/HomePage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/:locale(ru|en)?/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/:locale(ru|en)?/users",
    name: "users",
    component: () =>
      import(/* webpackChunkName: "users" */ "../views/UsersPage.vue"),
  },
  {
    path: "/:locale(ru|en)?/users/:user",
    name: "user",
    meta:{
      layout: 'sidebar-layout',
    },
    component: () =>
      import(/* webpackChunkName: "user" */ "../views/UserPage.vue"),
  },
  {
    path: "/:locale(ru|en)?/users/:user/posts",
    name: "userLocation",
    component: () =>
      import(/* webpackChunkName: "user" */ "../views/UserPage.vue"),
  },
  {
    path: "/:locale(ru|en)?/test",
    name: "test",
    // meta: {
    //   layout: 'error-layout'
    // },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "test" */ "../views/TestPage.vue"),
  },
  // {
  //   path: "/login",
  //   name: "login",
  //   component: () => import("../components/app-login.vue")
  // },{
  //   path: "/registration",
  //   name: "registration",
  //   component: ()=> import("../components/app-registration")
  // },
  {
    path: "*",
    name: "error",
    meta: {
      layout: 'error-layout'
    },
    component: () => import("../views/ErrorPage.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});



// router.onError(error => {
//   console.log(error)
//   router.push('/error')
// })

export default router;
