import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/home/index'
import latestInfo from '@/components/latestInfo/latest-info'
import latestInfoDetail from '@/components/latestInfo/latest-info-detail'

Vue.use(Router)

export default new Router({
  routes: [
    {//首页
      path: '/',
      name: 'index',
      component: index,
      redirect:'/index'
    },
    {//最新资讯
      path: '/latestInfo',
      name: 'latestInfo',
      component: latestInfo,
	   	children:[
	      {
	      	path:'/latestInfoDetail',
	      	name:'latestInfoDetail',
	      	component:latestInfoDetail
	      }
	    ] 
    }
  ]
})
