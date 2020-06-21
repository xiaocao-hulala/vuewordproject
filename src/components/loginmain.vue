<template>
	<div id="main">
		<div class="top">
			<h3>
				<button style="float: left;" type="button" class="btn btn-info" data-toggle="modal" data-target="#exampleModalLong">
					<span @click="">
						<svg class="bi bi-calendar3-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
							<path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2H0z" />
							<path fill-rule="evenodd" d="M0 3h16v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3zm6.5 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm4-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm2 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-8 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm2 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm4-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm2 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-8 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm2 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm4-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
						</svg>
					</span>
				</button>
				我的单词本
				<span class="addword">
					<button type="button" class="btn btn-info" @click="addword">添加</button>
				</span>
			</h3>

			<!-- 模态窗口-->
			<div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle"
			 aria-hidden="true">
				<div class="modal-dialog" role="document">
					<div class="modal-content">
						<div class="modal-body">
							<button type="button" class="btn btn-primary btn-lg btn-block" @click="alterpassword" data-dismiss="modal">修改密码</button>
							<button  type="button" @click="tuichu" class="btn btn-primary btn-lg btn-block" data-dismiss="modal">安全退出</button>
						</div>
						<div class="modal-footer">
							<button type="button" class="btn btn-secondary"  data-dismiss="modal">返回</button>
						</div>
					</div>
				</div>
			</div>

		</div>


		<!-- 单词列表-->
		<div class="content">
			<li>
				<span class="word">beautiful</span>
				<span class="fayin">发音</span>
				<span class="caozuo"><button type="button" class="btn btn-outline-primary">删除</button>
					<button type="button" class="btn btn-outline-primary">修改</button></span>
			</li>


			<li>
				<span class="word">beautiful</span>
				<span class="fayin">发音</span>
				<span class="caozuo"><button type="button" class="btn btn-outline-primary">删除</button>
					<button type="button" class="btn btn-outline-primary">修改</button></span>
			</li>

		</div>

	</div>

</template>

<script>
	import 'bootstrap/dist/css/bootstrap.min.css'
	import 'bootstrap/dist/js/bootstrap.min.js'
	import axios from 'axios'
	export default {
		data: function() {
			return {

			}
		},
		methods: {
			addword: function() {
				var that = this;
				that.$router.push("/add")
			},
			tuichu: function() {
				var that = this;
				that.$router.push("/")
			},
			alterpassword:function(){
				var that = this;
				that.$router.push("/alterpassword");
			}
		}
	}
</script>

<style>
	#main .top {
		width: 600px;
		background-color: skyblue;
		height: 2.5rem;
		margin: 0px auto;
	}

	#main .manager {
		float: left;
	}

	#main h3 {
		line-height: 2.5rem;
		color: white;
	}

	#main .addword {
		font-size: 15px;
		float: right;
	}

	#main .content {
		margin: 0px auto;
		width: 600px;
	}

	#main .content li {
		height: 40px;
		border: 1px dashed skyblue;
		margin-top: 15px;
		margin-bottom: 15px;
		list-style: none;
		border-bottom: 1px solid skyblue;
	}

	#main .content .word {
		float: left;
		font-size: 30px;
		line-height: 40px;
	}


	#main .content .fayin {
		margin-left: 10px;
		line-height: 40px;
		font-size: 20px;
		color: darkgray;
		float: left;
	}

	#main .content .caozuo {
		float: right;
	}
</style>
