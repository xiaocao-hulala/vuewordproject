<template>
	<div id="apassword">

		<h2>修改密码</h2>

		<div class="form-group row">
			<label for="inputEmail1" class="col-sm-2 col-form-label">用户名</label>
			<div class="col-sm-10">
				<input type="email" class="form-control" id="inputEmail1" v-model="uname">
			</div>
		</div>
		

		<div class="form-group row">
			<label for="inputEmail2" class="col-sm-2 col-form-label">密码</label>
			<div class="col-sm-10">
				<input type="email" class="form-control" id="inputEmail2" v-model="pwd">
			</div>
		</div>
		<button type="button" class="btn btn-outline-primary" style="width: 150px;" @click="surealter">修改</button>
		<button type="button" class="btn btn-outline-primary" style="width: 150px;" @click="back">返回</button>
	</div>
</template>

<script>
	import axios from 'axios'
	import 'bootstrap/dist/css/bootstrap.min.css'
	import 'bootstrap/dist/js/bootstrap.min.js'
	export default {
		data: function() {
			return {
				id:'',
				uname : '',
				pwd : ''
			}
		},
		methods:{
			back:function(){
				var that = this;
				that.$router.push("/main");
			},
			surealter:function(){
				var that = this;
				axios.get("http://localhost:8081/user/update",{
					params:{
						id : sessionStorage.getItem("userid"),
						username : that.uname,
						password : that.pwd
					}
				}).then(function(result){
					if(result.data.stateCode==200){
						alert('修改成功');
					}
				})
			}
		},
		created() {
			var that = this;
			axios.get("http://localhost:8081//user/selectone",{
				params:{
					id: sessionStorage.getItem("userid")
				}
			}).then(function(result){
				that.uname = result.data.data.username;
				 that.pwd = result.data.data.password;
			})
		}
	}
</script>

<style>
	#apassword {
		width: 560px;
		margin: 0px auto;
	}
</style>
