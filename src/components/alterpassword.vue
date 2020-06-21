<template>
	<div id="apassword">

		<h2>修改密码</h2>

		<div class="form-group row">
			<label for="inputEmail1" class="col-sm-2 col-form-label">用户名</label>
			<div class="col-sm-10">
				<input type="email" class="form-control" id="inputEmail1">
			</div>
		</div>

		<div class="form-group row">
			<label for="inputEmail2" class="col-sm-2 col-form-label">密码</label>
			<div class="col-sm-10">
				<input type="email" class="form-control" id="inputEmail2">
			</div>
		</div>

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

			}
		},
		methods:{
			back:function(){
				var that = this;
				that.$router.push("/main");
			}
		}
	}
</script>

<style>
	#apassword {
		width: 560px;
		margin: 0px auto;
	}
</style>
