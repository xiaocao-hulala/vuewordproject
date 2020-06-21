import Vue from 'vue'
import VueRouter from 'vue-router'
import main from '../components/loginmain.vue'
import login from '../components/login.vue'
import addword from '../components/addword.vue'
import alterpassword from '../components/alterpassword.vue'
Vue.use(VueRouter)

var router = new VueRouter({
	//地址栏去掉#
	mode: 'history',
	routes: [{
			path: "/",
			component: login,
		},
		{
			path: "/main",
			component: main
		},
		{
			path: "/add",
			component:addword
		},
		{
			path:"/alterpassword",
			component:alterpassword
		}
	]
})
export default router
