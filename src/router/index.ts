import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';
import { createrouter } from './routers.ts';
let router = createRouter({
  history: createWebHashHistory(),
  routes: createrouter,
  scrollBehavior() {
    return {
      left: 0,
      top: 0
    }
  }

});


export default router;

