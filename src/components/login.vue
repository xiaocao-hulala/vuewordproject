<template>
	<div id="login">
		<div class="top">
			<p>单词本</p>
		</div>

		<div class="bot" style="border: 1px dashed skyblue;">
			<div class="form-group row ml-5 mt-5">
				<div class="col-sm-9">
					<div class="form-row">
						<div class="col-1">
							<svg class="bi bi-phone" width="2em" height="2em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
								<path fill-rule="evenodd" d="M11 1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
								<path fill-rule="evenodd" d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
							</svg>
						</div>
						<div class="col-11">
							<input type="email" v-model="name" class="form-control" placeholder="请输入账号">
						</div>
					</div>
				</div>
			</div>

			<div class="form-group row ml-5">
				<div class="col-sm-9">
					<div class="form-row">
						<div class="col-1">
							<svg class="bi bi-lock" width="2em" height="2em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
								<path fill-rule="evenodd" d="M11.5 8h-7a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1zm-7-1a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-7zm0-3a3.5 3.5 0 1 1 7 0v3h-1V4a2.5 2.5 0 0 0-5 0v3h-1V4z" />
							</svg>
						</div>
						<div class="col-11">
							<input type="password" v-model="password" class="form-control" placeholder="请输入密码" @keyup.enter="login">
						</div>
					</div>

				</div>
			</div>

			<button class="btn btn-primary" @click="login"  type="submit">登陆</button>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	import 'bootstrap/dist/css/bootstrap.min.css'
	import 'bootstrap/dist/js/bootstrap.min.js'
	export default {
		data: function() {
			return {
				name: '',
				password: ''
			}
		},
		methods: {
			login: function() {
				var that = this;
				//发送异步请求
				// axios.get("/api/login", {
				axios.get(" http://localhost:8081/user/login", {
					/* name: this.name,
					password: this.password */
					params: {
						username: this.name,
						password: this.password
					}
				}).then(function(result) {
					console.log(result);
					console.log(result.data.stateCode);
					if (result.data.stateCode == 200) {
						//sessionstorage:可以在当前浏览器范围内保存信息，当浏览器关闭时失效
						//localStorage:与cookie类似可以保存更久
						sessionStorage.setItem("loginuser", result.data.data.name);
						that.$router.push("/main")
					} else {
						alert('密码或者用户名错误');
					}
				});
			}
		}
	}
</script>



<style>
	#login {
		margin: 0px auto;
		width: 500px;
		height: 500px;
		border: 1px dashed skyblue;
	}


	#login .top {
		padding-top: 80px;
		background-color: skyblue;
		height: 200px;
		font-size: 30px;
	}


	#login .bot {
		background-color: aliceblue;
		height: 300px;
	}

	#login .top p {
		height: 40px;
		margin: 0px auto;
		width: 130px;
		background-color: white;
	}
</style>
