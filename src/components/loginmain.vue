<template>
	<div id="main">
		<div class="top">
			<h3>我的单词本
				<span class="addword">
					<button type="button" class="btn btn-info">添加</button>
				</span>
			</h3>
		</div>

		<div class="content">
			<li>
				<span class="word">beautiful</span>
				<span class="fayin">发音</span>
				<span class="caozuo"><button type="button" class="btn btn-primary">删除</button>
					<button type="button" class="btn btn-primary">修改</button></span>
			</li>

			<li>
				<span class="word">beautiful</span>
				<span class="fayin">发音</span>
				<span class="caozuo"><button type="button" class="btn btn-primary">删除</button>
					<button type="button" class="btn btn-primary">修改</button></span>
			</li>
		</div>

	</div>

</template>

<script>
	import 'bootstrap/dist/css/bootstrap.min.css'
	import 'bootstrap/dist/js/bootstrap.min.js'
	export default {

	}
</script>

<style>
	#main .top {
		width: 600px;
		background-color: skyblue;
		height: 2.5rem;
		margin: 0px auto;
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
