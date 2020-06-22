<template>

	<div id="add">
		<h2>修改单词信息</h2>

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
				<input type="email" class="form-control" id="inputEmail3" v-model="pron">
			</div>
		</div>


		<div class="form-group row">
			<label for="inputEmail4" class="col-sm-2 col-form-label">单词汉语</label>
			<div class="col-sm-10">
				<input type="email" class="form-control" id="inputEmail4" v-model="descri">
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
				wname:'',
				wtype:'',
				pron:'',
				descri:'',
			}
		},
		methods: {
			back: function() {
				var that = this;
				this.$router.push("/main");
			},
			
			surealter:function(){
				var that = this;
				axios.get("http://localhost:8081/word/update",{
					params:{
						id: sessionStorage.getItem("alteruserid"),
						wordname: that.wname,
						wordtype:that.wtype,
						pronounce:that.pron,
						description:that.descri
					}
				}).then(function(result){
					if(result.data.stateCode==200){
						alert('修改成功')
					}
				})
			}
		},
		created() {
			var that = this;
			axios.get("http://localhost:8081/word/selectone", {
				params: {
					id: sessionStorage.getItem("alteruserid")
				}
			}).then(function(result){
				that.wname=result.data.data.wordname;
				that.wtype= result.data.data.wordtype;
				that.pron = result.data.data.pronounce;
				that.descri = result.data.data.description;
			})
		}
	}
</script>

<style>
	#add {
		width: 560px;
		margin: 0px auto;
	}
</style>
