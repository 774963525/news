<template>
    <div id="show">
		<form id="reg" action="#" method="post">
			<p @click="close()">❌</p><br>
			<div class="reg_info">
				<span class="info_name">用户名</span>
				<input type="text" placeholder="请设置用户名" id="username">
				<span class="tip_msg"></span>
			</div>	
			<div class="reg_info">
				<span class="info_name">密码</span>
				<input type="password" placeholder="请设置登录密码" id="userpwd">
				<span class="tip_msg"></span>
			</div>	
			<div class="reg_info">
				<span class="info_name">确认密码</span>
				<input type="password" id="userpwd2" placeholder="请输入确认密码">
				<span class="tip_msg"></span>
			</div>
			<input type="submit" value="注册">	
		</form>
	</div>


</template>
<script>
export default {
	name:"register",
	data(){
            return {
                
            }
    },
	methods:{
		close(){
			
			document.getElementById("show").style.display='none';
			
		}
	},
	

}
</script>
<style scoped>
	*{
		margin: 0;
		padding: 0;
	}
	body{
		font-family: 微软雅黑;
	}
	#show{
		z-index: 100;
		width: 100%;
		height: 400px;
		/* background: red; */
		margin: 0 auto;
		margin-top: 80px;
		border-top: 1px solid #CCC;
		border-bottom: 1px solid #CCC;
		float: left;
		position: absolute;
		top: -80px;
		background: #FFF;
		
	}
	p{
		text-align: right;
		padding-right: 10px;
		padding-top: 3px;
	}
	#reg .reg_info{
		height: 50px;
		width: 100%;
		margin-bottom: 10px;
		margin-top: 10px;
	}
	.reg_info>.info_name{
		width: 80px;
		height: 46px;
		line-height: 46px;
		font-size: 16px;
		font-weight: bold;
		/*border: 1px solid #F00;*/
		float: left;
		text-align: right;
		margin-right: 3px;
	}
	.reg_info>input{
		width: 200px;
		height: 40px;
		border: 1px solid #CCC;
		font-size: 16px;

		left: 50%;
		margin-left: -100px;
		position: absolute;
	}
	.reg_info>input:focus{
		outline: none;
		border-color: #488ee7;
	}
	.reg_info>.tip_msg{
		width: 240px;
		height: 46px;
		line-height: 20px;
		/*border: 1px solid #CCC;*/
		font-size: 12px;
		color: #333;
		float: left;
		margin-left: 5px;
		/*display: none;*/
		color: #999;
	}
	.reg_info>.error{
		color: #F00;
	}
	.reg_info>.success{
		color: #0F0;
	}
	input[type=submit]{
		display: block;
		width: 150px;
		height: 50px;
		background: #F8595A;
		border: solid #F8595A;
		border-radius: 5px;
		left: 50%;
		margin-left: -75px;
		/* margin-left: 50px; */
		color: #FFF;
		font-size: 20px;
		top:300px;
		position: absolute;
	}
</style>
