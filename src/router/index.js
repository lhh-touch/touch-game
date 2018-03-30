import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/home/index'//首页
import latestInfo from '@/components/home/latest-info'//资讯
import latestInfoDetail from '@/components/home/latest-info-detail'//资讯详情

Vue.use(Router)

export default new Router({
	mode:'history',
	routes: [
	    {//首页
	      	path: '/',
	      	name: 'index',
	      	component: index
	    },
	    {//最新资讯
	      	path: '/latestInfo',
	      	name: 'latestInfo',
	      	component: latestInfo,
	    },
	    {//资讯详情
	      	path:'/latestInfoDetail',
	      	name:'latestInfoDetail',
	      	component:latestInfoDetail
	  	},
	  	{
	  		path:'/',
	  		redirect:'/index'
	  	}
	]
})
