<template>

	<div id="add">
		<h2>添加单词</h2>

		<div class="form-group row">
			<label for="inputEmail1" class="col-sm-2 col-form-label">单词</label>
			<div class="col-sm-10">
				<input type="email" class="form-control" id="inputEmail1" v-model="wname">
			</div>
		</div>

		<div class="form-group row">
			<label for="inputEmail2" class="col-sm-2 col-form-label">单词类型</label>
			<div class="col-sm-10">
				<input type="email" class="form-control" id="inputEmail2" v-model="wtype">
			</div>
		</div>


		<div class="form-group row">
			<label for="inputEmail3" class="col-sm-2 col-form-label">单词发音</label>
			<div class="col-sm-10">
				<input type="email" class="form-control" id="inputEmail3" v-model="wpro">
			</div>
		</div>


		<div class="form-group row">
			<label for="inputEmail4" class="col-sm-2 col-form-label">单词汉语</label>
			<div class="col-sm-10">
				<input type="email" class="form-control" id="inputEmail4" v-model="desc">
			</div>
		</div>

		<button type="button" class="btn btn-outline-primary" style="width: 150px;" @click="add">添加</button>
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
				wname: '',
				wtype: '',
				wpro: '',
				desc: ''
			}
		},
		methods: {
			back: function() {
				var that = this;
				this.$router.push("/main");
			},
			add: function() {
				var that = this;
				axios.get("http://localhost:8081/word/add", {
					params: {
						userid: sessionStorage.getItem("userid"),
						wordname: that.wname,
						wordtype: that.wtype,
						pronounce: that.wpro,
						description: that.desc,
					}
				}).then(function(result) {
					if (result.data.stateCode == 200) {
						alert('添加成功');
					}

				})
			}
		}
	}
</script>

<style>
	#add {
		width: 560px;
		margin: 0px auto;
	}
</style>
