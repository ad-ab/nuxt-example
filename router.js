import Vue from 'vue'
import Router from 'vue-router'

import index from '~/pages/index'
import technicals from '~/pages/technicals'
import technicalsId from '~/pages/t/_id'
import events from '~/pages/events'
import support from '~/pages/support'
import configurator from '~/pages/configurator'

import VueScrollTo from "vue-scrollto";

Vue.use(Router)

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        component: index
      },
      {
        path: '/technicals',
        component: technicals,
      },
      {
        path: '/t/:id',
        component: technicalsId,
      },
      {
        path: '/events',
        component: events,
      },
      {
        path: '/support',
        component: support,
      },
      {
        path: '/configurator',
        component: configurator,
      }
    ],
    scrollBehavior(to, from, savedPosition) {
      if (to.hash) {
        if (to.path !== from.path) return;
        VueScrollTo.scrollTo(to.hash, { offset: -100, duration: 0 });
        return { selector: to.hash };
      } else if (savedPosition) {
        return savedPosition;
      } else {
        return { x: 0, y: 0 };
      }
    },
  })
}
