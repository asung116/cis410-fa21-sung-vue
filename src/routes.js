import {createRouter, createWebHistory} from "vue-router";

import Home from "./components/Home.vue";
import Account from "./components/Account.vue";
import Chores from "./components/Chores.vue";
import Dashboard from "./components/Dashboard.vue";
import EventCreate from "./components/EventCreate.vue";
import Events from "./components/Events.vue";
import Login from "./components/Login.vue";
import NeedCreate from "./components/NeedCreate.vue";
import Needs from "./components/Needs.vue";
import NotFound from "./components/NotFound.vue";
import Signup from "./components/Signup.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {path: "/", component: Home},
    {path: "/account", component: Account},
    {path: "/chores", component: Chores},
    {path: "/dashboard", component: Dashboard},
    {
      path: "/events",
      component: Events,
      children: [{path: "event", component: EventCreate}],
    },
    {path: "/login", component: Login},
    {
      path: "/needs",
      component: Needs,
      children: [{path: "need", component: NeedCreate}],
    },
    {path: "/signup", component: Signup},
    {path: "/:invalidroute(.*)", component: NotFound},
  ],
});

export default router;
