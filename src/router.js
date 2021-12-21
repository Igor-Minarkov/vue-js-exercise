import Vue from "vue";
import Router from "vue-router";
import Home from "../src/components/homepage/Home.vue";
import Login from "../src/components/registration/Login.vue";
import Register from "../src/components/registration/Sign-up.vue";
import Events from "../src/components/events/Events.vue";
import Create from "../src/components/events/Create.vue";
import Edit from "../src/components/events/Edit.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    { path: "/", component: Home },
    { path: "/login", component: Login },
    { path: "/register", component: Register },
    {
      path: "/events",
      component: Events,
      beforeEnter: (to, from, next) => {
        if (localStorage.getItem("token") == null) {
          next("/login");
        } else {
          next();
        }
      },
    },
    {
      path: "/events/create",
      component: Create,
      beforeEnter: (to, from, next) => {
        if (localStorage.getItem("token") == null) {
          next("/login");
        } else {
          next();
        }
      },
    },
    {
      path: "/events/edit/:eventId",
      component: Edit,
      name: "Edit",
      beforeEnter: (to, from, next) => {
        if (localStorage.getItem("token") == null) {
          next("/login");
        } else {
          next();
        }
      },
    },
  ],
});
