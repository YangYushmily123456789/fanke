import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Classify from '@/components/Classify'
import Classifys from '@/components/Classifys'
import Classifys1 from '@/components/Classifys1'
import Fanke from '@/components/Fanke'
import AfterCar from '@/components/AfterCar'
import Car from '@/components/Car'
import Geren from '@/components/Geren'
import Pay from '@/components/Pay'
import Order from '@/components/Order'

Vue.use(Router)

export default new Router({
  routes: [
    {
	    path: '/',
	    redirect: Home
    },
    {
	    path: '/home',
	    component: Home
    },
    {
	    path: '/classify',
	    component: Classify,
                children: [       {
                                path: "/classifys1", 
                                component: Classifys1
                            }]

    },
    {
        path: '/classifys',
        component: Classifys
    },
    {
        path: '/afterCar',
        component: AfterCar
    },
    {
	    path: '/fanke',
	    component: Fanke
    },
    {
        path: '/car',
        component: Car
    },
    {
	    path: '/geren',
	    component: Geren
    },
    {
        path:"/pay",
        component : Pay
    },
    {
        path:"/order",
        component :Order
    }

  ]
})
