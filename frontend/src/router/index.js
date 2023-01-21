import { createRouter, createWebHistory } from "vue-router";
// import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../components/VehicleList.vue"),
    },
    {
      path: "/add",
      name: "add",
      component: () => import("../components/VehicleInput.vue"),
    },
    {
      path: "/detail/:id",
      name: "detail",
      component: () => import("../components/Vehicle.vue"),
    },
    {
      path: "/edit/:id",
      name: "edit",
      component: () => import("../components/VehicleEdit.vue"),
    },
  ],
});

export default router;
