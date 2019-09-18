import Vue from 'vue'
import Router from 'vue-router'
import Daletou from '@/components/daletou'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'daletou',
      component: Daletou
    }
  ]
})
