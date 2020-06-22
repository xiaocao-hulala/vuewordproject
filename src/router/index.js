import Vue from 'vue'
import VueRouter from 'vue-router'
import main from '../components/loginmain.vue'
import login from '../components/login.vue'
import addword from '../components/addword.vue'
import alterpassword from '../components/alterpassword.vue'
import alterword from '../components/alterword.vue'
import adduser from '../components/adduser.vue'
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
			component: addword
		},
		{
			path: "/alterpassword",
			component: alterpassword
		},
		{
			path: '/alterword',
			component: alterword
		},
		{
			path: '/adduser',
			component: adduser
		}
	]
})
export default router
